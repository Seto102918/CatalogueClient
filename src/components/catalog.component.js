import { useEffect, useState, useMemo, lazy, Suspense } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { SERVERURL } from '../App';
import list from '../listKategori';
import { renderLoader } from '..';
import FormFilter from './filter.component.js';
import PageButtons from  './pageButtons.component.js';

const ListItems = lazy(() => import( './tiles.component'));

const ListWarna = props => (
	<li key={props.index} className='m-0 col'>
		<div>
			<div className="form-check">
				<input
					type="checkbox"
					className='form-check-input'
					id={`custom-checkbox-${props.index}`}
					name={"warna"}
					value={props.warna || undefined}
					checked={props.value}
					onChange={() => props.handleOnChange(props.value, props.index)}
				/>
				<label className='form-check-label' htmlFor={`custom-checkbox-${props.index}`}>{props.warna}</label>
			</div>
		</div>
	</li>
)

const ListCatalog = props => {
	const navigate = useNavigate();
	const params = useParams();

	const [searchParams] = useSearchParams();
	const [listWarna, setWarna] = useState([]);
	const [gownOrSuit, setGownOrSuit] = useState(new Array(16).fill({
		_id: "",
		kode: "...",
		warna: "...",
		harga: "...",
		favorit: false,
		kategori: "",
		urlArray: []
	}));

	const [sortingType, setSortingType] = useState(searchParams.get('sort') || "FVR");
	const [minHarga, setMinHarga] = useState(searchParams.get('hargaMin') || 0);
	const [maxHarga, setMaxHarga] = useState(searchParams.get('hargaMax') || 10000000);
	const [pageNow, setpageNow] = useState(parseInt(searchParams.get('page')) || 0);
	const [warnaChosen] = useState(searchParams.getAll('warna') || "");

	const [filterButtonState, setFilterButtonState] = useState(false);
	const [LoadingState, setLoadingState] = useState(true);

	const disableTouch = useMemo(() => {
		return {
			pointerEvents: LoadingState ? 'none' : 'all'
		}
	}, [LoadingState])

	const filterStyle = useMemo(() => {
		return {
			bruh: {
				maxHeight: filterButtonState ? '100%' : '0',
			},
			arrow: {
				transform: filterButtonState ? 'rotate(0.5turn)' : 'rotate(0turn)',
				height: '1.5rem'
			}
		}
	}, [filterButtonState])

	useEffect(() => {
		document.body.style.cursor = 'wait';

		let redirectto404 = true;

		list.forEach(el => {
			if(el.link === params.id) redirectto404 = false;
		})

		if(redirectto404) return navigate('/404');

		const getUrl = () => {
			let hargaMin = isNaN(minHarga) ? 0 : minHarga;
			let hargaMax = isNaN(maxHarga) ? 10000000 : maxHarga;

			return {
				page: '?page=' + pageNow,
				sorting: "&sort=" + sortingType,
				kategori: "&kategori=" + params.id,
				filterHarga: "&hargamin=" + hargaMin + "&hargamax=" + hargaMax,
				filterWarna: "&warna=" + warnaChosen,
			}
		}

		const urlParams = getUrl();
		const url = SERVERURL + 'api/v1/gown' + urlParams.page + urlParams.filterHarga + urlParams.sorting + urlParams.filterWarna + urlParams.kategori
		const canceltoken = axios.CancelToken.source();
		let timeout;

		axios.get(url, { cancelToken: canceltoken.token })
			.then(res => {
				let listWarna = [];
				for (let element of res.data.listWarna) {
					if (!warnaChosen.includes(element)) {
						listWarna.push({
							warna: element,
							value: false
						});
					} else {
						listWarna.push({
							warna: element,
							value: true
						});
					}
				}
				setWarna(listWarna)
				setGownOrSuit(res.data.gownOrSuit);
			}).catch(error => {
				if (axios.isCancel(error)) {
					console.log("Cancelled");
				} else {
					alert(
						'Cant connect to server.\n' +
						'Please try again later and if problem persist, please contact us through Whatsapp.'
					);
				}
			}).finally(() => {
				timeout = setTimeout(() => { 
					setLoadingState(false) 
					document.body.style.cursor = 'default';
				}, 1000)
			})

		return () => {
			canceltoken.cancel();
			clearTimeout(timeout);
			document.body.style.cursor = 'default';
		}
	}, [pageNow])

	const handleOnChange = (value, index) => {
		value ? setWarna(prev => {
			let items = [...prev];
			let item = { ...items[index] };
			item.value = false;
			items[index] = item;
			return items
		}) : setWarna(prev => {
			let items = [...prev];
			let item = { ...items[index] };
			item.value = true;
			items[index] = item;
			return items
		})
	}

	const WarnaList = () => {
		return listWarna.map((props, index) => {
			return <ListWarna warna={props.warna} key={index} index={index} value={props.value} handleOnChange={handleOnChange} />
		})
	}

	const pageButton = (prevOrNext) => {
		if (prevOrNext) {
			setpageNow(prev => prev + 1)
		} else { pageNow > 0 ? setpageNow(prev => prev - 1) : setpageNow(0) }
	}

	return (
		<div className='overflow-hidden d-flex flex-column'>
			<header className={`position-relative background px-3 boxshadow`} style={{
				backgroundImage: `url('/content/home/${params.id}.webp')`,
			}}>
				<h2 className='mt-5 display-2 text-white d-flex justify-content-center overflow-hidden position-relative align-items-center mb-0 text-center'
					style={{
						textTransform: 'uppercase',
						zIndex: '10'
					}}>{params.id.replace("_", " ") + "s"}
				</h2>

				<button 
				className='btn btn-link position-absolute bottom-0 start-50 translate-middle-x mb-2 d-grid bg-light bg-opacity-25' 
				style={{ zIndex: '11' }} 
				onClick={() => setFilterButtonState(!filterButtonState)}
				aria-expanded={filterButtonState}
				title={filterButtonState ? "Close Filter Bar" : "Expand Filter Bar"}
				>
					{filterButtonState ?
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-x-lg" viewBox="0 0 16 16">
							<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
						</svg>
						:
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-funnel" viewBox="0 0 16 16">
							<path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
						</svg>
					}
				</button>

				<div className='bg-black position-absolute top-0 start-0 end-0 bottom-0 bg-opacity-50 backdrop_blur'
					style={{ zIndex: '0' }}>
				</div>

				<div className='position-relative mb-5' style={{ zIndex: '10' }}>
					<div className='d-flex justify-content-center text-white mt-4'
						style={filterStyle.bruh}>
						<FormFilter WarnaList={WarnaList} listWarna={listWarna} setWarna={setWarna} setSortingType={setSortingType}
							minHarga={minHarga} maxHarga={maxHarga} setMinHarga={setMinHarga} setMaxHarga={setMaxHarga} sortingType={sortingType}
						/>
					</div>
				</div>
			</header>

			<main className='d-flex flex-column align-items-center overflow-visible mx-2 mx-md-1 mx-xl-5 mt-3' style={disableTouch}>
				<Suspense fallback={renderLoader()}>
					<div className={`row ${gownOrSuit.length === 0 ? "" : ' row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'} overflow-visible px-md-3 px-xl-5`}
					style={{width: '95%', maxWidth: '75rem'}}>
						{gownOrSuit.length === 0 ? 
						<div className='d-flex flex-column align-items-center justify-content-center container-fluid overflow-visible'>
							<h1 className='display-4'>(┬┬﹏┬┬)</h1>
							<h3 className='text-center h3 p-2'>Sorry Nothing Here....</h3>
						</div>
						:
						gownOrSuit.map((currentgaun, index) =>
							<ListItems
							key={index}
							gaun={currentgaun}
							params={params.id}
							LoadingState={LoadingState}/>
						)}
						{/* gownOrSuit.map((currentgaun, index) =>
							<ListItems
							key={index}
							gaun={currentgaun}
							params={params.id}
							LoadingState={LoadingState}
							scrollPosition={props.offset} />
						)} */}
					</div>
				</Suspense>
				<PageButtons pageNow={pageNow} pageButton={pageButton} gownOrSuit={gownOrSuit} />
			</main>
		</div>
	);
}

export default ListCatalog;