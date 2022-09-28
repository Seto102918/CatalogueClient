import { Link } from "react-router-dom";
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import list from '../listKategori.js'

// const preloadHomeImages = async () => {
//     for await (const i of list) {
//         const url = `https://firebasestorage.googleapis.com/v0/b/dsista-bridal.appspot.com/o/${i.link}.webp?alt=media`;
//         const img = new Image();
//         img.src = url;
//     }
// }
// preloadHomeImages()

const Home = () => {
    return (
        <div className="container">
            <header>
                <h1 className="text-center overflow-visible display-1 text-dark"
                style={{
                    fontFamily: 'Nothing You Could Do,cursive',
                }}>
                    Catalogue
                </h1>
            </header>

            <main className="row d-flex justify-content-center overflow-visible mb-5"> 
                {list.map((props, index) => {
                    return (
                        <Link to={"/" + props.link} title={props.name}
                        className={`m-2 col-10 col-sm-8 col-md-5 col-lg-4 position-relative rounded background d-flex align-items-center justify-content-center scaleOnHover p-0 overflow-hidden boxshadow Afterblack`} 
                        id={props.id} key={index}
                            style={{
                                minHeight: '10rem',
                                aspectRatio: '4/3',
                            }}
                        >
                            <LazyLoadImage
                                width={'100%'}
                                height={'100%'}
                                alt=""
                                placeholderSrc={`/placeholder.png`}
                                className="overflow-hidden ratio ratio-4x3"
                                scrollPosition={props.scrollPosition}
                                effect="blur"
                                src={`/content/home/${props.link}.webp`}
                            />
                            <h3 className="position-absolute h4 text-white text-center mx-2" style={{
                                zIndex: '1',
                                fontWeight: '400',
                                textTransform: 'uppercase'
                            }}>
                                {props.name}
                            </h3>
                        </Link>
                    )
                })}
            </main>
        </div>
    )
}

export default trackWindowScroll(Home);