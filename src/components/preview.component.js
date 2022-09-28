import { useEffect, useState, lazy, Suspense } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { SERVERURL } from '../App';

const ListItems = lazy(() => import( './tiles.component.js'));
const CarouselCard = lazy(() => import( './carouselCard.component.js'));

const carouselLoader = () => 
    <div className="card bg-dark bg-opacity-25 container-fluid rounded position-relative" aria-hidden="true"
    style={{
        aspectRatio: '1',
    }}>
        <div className='loaderParent d-flex position-absolute top-50 start-50 translate-middle p-3'>
            <div className="loader"></div>
            <div className="loader"></div>
            <div className="loader"></div>
        </div>
    </div>

const recommendationLoader = () => 
    <div className='mx-2 bg-dark rounded bg-opacity-50 d-flex justify-content-center align-items-center'
    style={{
        heigth: '7rem'
    }}>
        <h1 className='text-white p-5'>
            Loading...
        </h1>
    </div>


const Gown = () => {
    const navigate = useNavigate();
    const params = useParams();

    const [Kode, setKode] = useState(params.kode);
    const [Data, setData] = useState({
        _id: "",
        kode: "...",
        warna: "...",
        harga: "...",
        favorit: false,
        kategori: "",
        urlArray: []
    });
    const [urlArrayId, setUrlArrayId] = useState([]);
    const [Recommend, setRecommend] = useState(new Array(4).fill({
		_id: "",
		kode: "...",
		warna: "...",
		harga: "...",
		favorit: false,
		kategori: "",
		urlArray: []
	}));
    const [loadingState, setLoadingState] = useState(true);

    useEffect(() => {
        console.log(Kode);
        document.body.style.cursor = 'wait';
        const canceltoken = axios.CancelToken.source();
        let timeout;

        const url = SERVERURL + 'api/v1/gown/kode/' + Kode;
            
        axios.get(url, { cancelToken: canceltoken.token })
            .then(response => {
                setData(response.data.gownFound[0])
                setRecommend(response.data.recommended)
                setUrlArrayId(response.data.gownFound[0].urlArray)
            })
            .catch((error) => {
                if(!error.response) return
                if (error.response.status === 500) {
                    navigate('/404', { kode: Kode })
                }
            })
            .finally(() => {
                timeout = setTimeout(() => {
                    setLoadingState(false)
                    document.body.style.cursor = 'default';
                }, 1000);
            })

        return () => {
			canceltoken.cancel();
			clearTimeout(timeout);
            document.body.style.cursor = 'default';
		}
    }, [Kode])

    return (
        <div className='Gown_Main'>
            <header className={` position-relative shadow-sm px-3`} style={{
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                background: `url('/content/gownorsuitheader.webp')`
            }}>
                <h2 className='display-2 text-white d-flex justify-content-center overflow-hidden position-relative align-items-center mb-0 text-center py-5 placeholder-glow' style={{
                    textTransform: 'uppercase',
                    zIndex: '10'
                }}>
                    Gowns / Suits
                </h2>

                <div className='bg-dark position-absolute top-0 start-0 end-0 bottom-0 bg-opacity-50 backdrop_blur'
                    style={{ zIndex: '0' }}>
                </div>
            </header>

            <main className='mt-4 row m-2 mx-sm-3 px-sm-3 mx-md-4 px-lg-4 mx-lg-5 px-lg-5 row-cols-1 row-cols-lg-2 mb-4 overflow-visible'>
                <div className='d-flex align-items-center p-1'>
                    <Suspense fallback={carouselLoader()}>
                        <CarouselCard urlArrayId={urlArrayId} />
                    </Suspense>
                </div>
                <div className='mt-md-2 col mt-lg-0 align-content-center m-0 p-0 px-2 ps-lg-4 overflow-visible' >
                    <div className='col p-2 ps-0'>
                        <h1 className='display-3 m-0 placeholder-glow'
                        style={{
                            fontWeight: '400'
                        }}>
                            {loadingState || Data?.kode === "..."?
                                <span className='placeholder col-2'></span>
                                : `${Data.kode}`}
                        </h1>
                        <h3 className='display-5 m-0 placeholder-glow'
                        style={{
                            fontWeight: '400'
                        }}>
                            {loadingState || Data?.harga === "..."?
                                <span className="placeholder col-10"></span>
                                : <span>{ 
                                    `Rp ${isNaN(Data.harga) ? 
                                        "Error"
                                        : Data.harga.toLocaleString('id-ID', { minimumFractionDigits: 0 })
                                    }`
                                }
                                </span>
                            }
                        </h3>
                        <hr className='bg-dark rounded' style={{ height: '5px' }} />
                        <h4 className='placeholder-glow ms-2'>
                            {loadingState || Data?.warna === "..." ? <span className='placeholder col-4'></span> : `Warna: ${Data.warna}`}
                        </h4>
                    </div>


                    <div className='col bg-dark bg-opacity-25 rounded d-flex align-items-center flex-wrap justify-content-around overflow-visible boxshadow mb-1 py-4 p-3 p-lg-4'>
                        <h5 className='text-center text-white m-0 m-2 overflow-visible'>
                            To rent this gown, 
                            <br />
                            please 
                            contact us through:
                        </h5>
                        <div className='row row-cols-2 overflow-visible justify-content-center mx-2'>
                            <div className="col overflow-visible p-1">
                                <a href="https://linktr.ee/dsistaluxurybridal" target="_blank" rel="noreferrer" title='Our WhatsApp' 
                                className="scaleOnHover btn btn-dark p-3 container"
                                style={{
                                    transition: '0.2s'
                                }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                    </svg>
                                </a>
                            </div>
                            
                            <div className="col overflow-visible p-1">
                                <a  href="https://instagram.com/dsistaluxury_bridal?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer" title='Our Instagram'
                                className="scaleOnHover btn btn-dark p-3 container"
                                style={{
                                    transition: '0.2s'
                                }}
                                > 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" className="bi bi-instagram" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <section className='mx-2 mx-sm-3 px-sm-3 mx-md-4 px-lg-4 mx-lg-5 px-lg-5 overflow-visible my-4'>
                <h3 className='mx-2 p-1'>What You Might Like...</h3>
                <Suspense fallback={recommendationLoader()}>
                    {Recommend.length > 0 ? 
                        <div className='row row-cols-2 row-cols-md-4 overflow-visible mx-2' >
                            {Recommend.map((props, index) => {
                                return <ListItems gaun={props} key={index} params={params.id} setKode={setKode} />;
                            })}
                        </div>
                        : 
                        <h5 className='bg-dark bg-opacity-25 rounded p-4 py-5 text-center text-white mx-2'>Sorry... <br />No recommendation exists for this gown</h5>
                    }
                </Suspense>
                
            </section>
        </div>
    )
}

export default Gown;