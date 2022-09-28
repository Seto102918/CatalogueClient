import { Link, Route, Routes, useNavigate } from "react-router-dom"
import { useEffect, useState, useMemo, lazy } from 'react';
import './scss/styles.scss'
import SearchBar from './components/searchBar.component.js';
import OurContacts from './components/contacts.component.js';

const Gown = lazy(() => import("./components/preview.component.js"));
const Unknown = lazy(() => import('./components/404.component.js'));
const HomeMenu = lazy(() => import("./components/home.component.js"));
const Catalog = lazy(() => import("./components/catalog.component.js"));

export const SERVERURL = process.env.REACT_APP_SERVER_URL;

function App() {
	const navigate = useNavigate();

	const [offset, setOffset] = useState(0);
	const [SearchOpen, setSearchOpen] = useState(false);
	const [InputValue, setInputValue] = useState("");

	useEffect(() => {
		const onScroll = () => setOffset(window.pageYOffset);
		window.removeEventListener('scroll', onScroll);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const title = useMemo(() => {
		return {
			color: offset > 0 ? 'rgba(255, 255, 255, 1)' : 'rgba(0 , 0 , 0 , 1)',
			backdropFilter: offset > 10 ? 'blur(2px)' : 'none', 
			backgroundColor: offset > 0 ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0)',
			height: '3rem',
			zIndex: '50',
			transition: '0.25s'
		}
	}, [offset])

	const titleText = useMemo(() => {
		return {
			color: offset > 0 ? 'rgba(255, 255, 255, 1)' : 'rgba(0 , 0 , 0 , 1)',
			backgroundColor: 'rgba(0, 0, 0, 0)',
			textDecoration: 'none',
			transition: '0.25s'
		}
	}, [offset])

	const search = useMemo(() => {
		return {
			blockBehind: {
				display: SearchOpen ? 'block' : 'none',
				PointerEvent: SearchOpen ? 'none' : 'auto',
				width: '100vw',
				height: '100vh',
				zIndex: '51'
			},
		}
	}, [SearchOpen])

	const onSubmit = (e) => {
		var kode = InputValue.toUpperCase();
		navigate('./id/' + kode);
		setSearchOpen(false);
		window.location.reload(false);
	};

	return (
		<div className="d-flex flex-column" style={{minHeight: '100vh'}}>
			<nav className='container-fluid position-fixed top-0 start-50 translate-middle-x'
				style={title}>
				<Link to="/" aria-label='Navigate To Home Page' title="Navigate to home page" className='text-center position-absolute top-50 start-50 translate-middle'
					style={titleText} >D'SISTA LUXURY</Link>
			</nav>

			<div style={{marginTop: '3rem'}}>
				<div className='position-fixed bg-dark bg-opacity-75 top-0' style={search.blockBehind} />

				<SearchBar SearchOpen={SearchOpen} setSearchOpen={setSearchOpen} onSubmit={onSubmit} setInputValue={setInputValue} search={search} />

				<button className='bg-dark bg-opacity-75 position-fixed p-3 rounded-circle overflow-hidden end-0 bottom-0 backdrop_blur scaleOnActive d-flex align-items-center justify-content-center' 
					title="To Top of Page"
					style={{
						minWidth: '2rem',
						margin: '0 1rem 5rem 0',
						cursor: 'pointer',
						zIndex: '49',
						aspectRatio: '1'
					}}
					name="Go to top of page"

					onClick={() => { window.scrollTo(0, 0); }}>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-arrow-up" viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
						</svg>
					
				</button>

				<button className='bg-dark bg-opacity-75 position-fixed p-3 rounded-circle overflow-visible end-0 bottom-0 backdrop_blur scaleOnActive d-flex align-items-center justify-content-center'
					title="Open Search Bar"
					style={{
						minWidth: '2rem',
						margin: '0 1rem 1rem 0',
						cursor: 'pointer',
						zIndex: '49',
						aspectRatio: '1'
					}}
					name="Open Search Bar"
					aria-expanded={SearchOpen}

					onClick={() => {
						if (SearchOpen) return;
						setSearchOpen(true);
					}}>
						<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-search " viewBox="0 0 16 16" width={24} height={24}>
							<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
						</svg>
					
				</button>
			</div>

			<Routes>
				<Route path='/404' exact element={<Unknown />} />
				<Route path='/' exact element={<HomeMenu SearchOpen={SearchOpen} />} />
				<Route path='/:id' exact element={<Catalog offset={offset} />} />
				<Route path='/id/:kode' exact element={<Gown />} />
				<Route path='*' exact element={<Unknown/>} />

			</Routes>

			<footer className='position-relative mt-auto bg-light bg-opacity-25'
			style={{
				height: '10rem'
			}}>
				<hr />
				<OurContacts />
			</footer>
		</div>
	);
}

export default App;
