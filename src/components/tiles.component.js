import { Link } from 'react-router-dom';
// import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ListItems = props => {

    return (
        <div className='p-1 rounded tileHover position-relative scaleOnHover overflow-visible' key={props.gaun._id} >
            <Link to={{ pathname: `/id/${props.gaun.kode}` }} className="shadow p-0 m-0 ">
                <div className="bg-light bg-opacity-25 m-0 rounded boxshadow overflow-hidden"
                style={{
                    aspectRatio: '3/4'
                }}>
                    {props.gaun._id === "..." ? '' :
                    <img width={'100%'}
                    height={'100%'}
                    src={`https://firebasestorage.googleapis.com/v0/b/fotobridal-83326.appspot.com/o/${props.gaun.kode}%2F${props.gaun.kode}_preview.webp?alt=media`}
                    loading="lazy" alt={'Gaun ' + props.gaun.kode}/>
                    
                    }
                    {/* <LazyLoadImage
                        style={{
                            width: '100%',
                            filter: 'brightness(90%)',
                        }}
                        width={'100%'}
                        height={'100%'}
                        className='rounded overflow-hidden'
                        alt={props.gaun.kode + 'Image'}
                        scrollPosition={props.scrollPosition}
                        placeholderSrc={'/content/placeholder.png'}
                        effect="opacity"
                        src={props.gaun.urlArray.length === 0 ? '/content/placeholder.png' : `https://firebasestorage.googleapis.com/v0/b/fotobridal-83326.appspot.com/o/${props.gaun.kode}%2F${props.gaun.kode}_preview.webp?alt=media`}
                    /> */}
                </div>

                <div className="position-absolute bottom-0 start-0 end-0 text-white rounded m-1 px-2 overflow-visible
                d-flex flex-column justify-content-end"
                    style={{
                        height: '6rem',
                        zIndex: '10',
                        backgroundImage: 'linear-gradient(transparent, #21252953, #212529a4)',
                    }}
                >
                    <h2 className='h3 mt-3 mb-0 d-flex align-items-center placeholder-glow' aria-hidden="true">
                        {props.LoadingState || props?.gaun?.kode === "..."?
                        <span className="placeholder col-4"></span>
                        : props.gaun.kode
                    }
                        <svg className='ms-1' width={24} height={24} clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                            style={
                                props.gaun.favorit === false ? { display: 'none' } : { display: 'border-box', fill: 'gold' }
                            }
                        >
                            <path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fillRule="nonzero" />
                        </svg>
                    </h2>
                    <h6 className='h6 m-0 placeholder-glow mb-2 overflow-visible'>
                        {props.LoadingState || props?.gaun?.harga === "..."?
                            <span className="placeholder col-8"></span> 
                            : 
                            <>
                            {props.gaun.warna} <br/>
                            Rp.{props.gaun.harga.toLocaleString('id-ID', { minimumFractionDigits: 0 })}
                            </>
                        }
                    </h6>
                </div>
            </Link>
        </div>

    );
}

// export default trackWindowScroll(ListItems);

export default ListItems;