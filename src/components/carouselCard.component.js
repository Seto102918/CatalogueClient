import {
    ButtonBack, ButtonNext,
    CarouselProvider, ImageWithZoom, Slide, Slider, Dot
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function CarouselCard(props) {
    return (
        <CarouselProvider visibleSlides={1} totalSlides={props.urlArrayId.length} step={1} naturalSlideWidth={1} naturalSlideHeight={1} hasMasterSpinner lockOnWindowScroll 
        className='bg-dark bg-opacity-25 backdrop_blur rounded overflow-hidden col p-0 m-0 boxshadow' 
        style={{aspectRatio: '1', maxHeight: '90vh'}}>
            <Slider className='m-0'>
                {props.urlArrayId.map((el, index) => {
                    return <Slide index={index} key={index}>
                        <ImageWithZoom src={el} className='imageWZoom'/>
                    </Slide>;
                })}
            </Slider>

            <ButtonBack className='position-absolute top-50 start-0 translate-middle-y d-grid mx-lg-3 btn btn-link'>
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="white" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg>
            </ButtonBack>
            <ButtonNext className='position-absolute top-50 end-0 translate-middle-y d-grid mx-lg-3 btn btn-link'>
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="white" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
            </ButtonNext>

            <div className='position-absolute bottom-0 start-50 translate-middle-x'>
                {props.urlArrayId.map((el, index) => {
                    return <Dot key={index} slide={index} className='btn btn-light my-3 mx-1' />
                })}
            </div>
        </CarouselProvider>
    )
}
