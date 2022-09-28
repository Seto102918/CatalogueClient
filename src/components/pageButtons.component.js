export default function PageButtons(props) {
    return (
        <div className='container-fluid d-flex justify-content-center align-items-center my-5 overflow-hidden'>
            <button type='button' id="page_back" aria-label="previous page" title='previous page' disabled={props.pageNow === 0}
                className={`bg-transparent d-flex justify-content-center align-items-center ` + (props.pageNow !== 0 ? 'scaleOnHover_2' : '')}
                onClick={() => {
                    props.pageNow > 0 ? props.pageButton(false) : console.log("First Page Already")
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="bi bi-caret-left-fill" viewBox="0 0 16 16"
                    fill={props.pageNow === 0 ? 'rgba(0, 0, 0, .2)' : 'black'}>
                    <title>Navigate To Previous Page</title>
                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>
            </button>

            <div id="page_num" className="mx-4 justify-content-center align-items-center d-flex">
                <h3 className="mb-0 text-dark">{props.pageNow + 1}</h3>
            </div>

            <button type='button' id="page_next" aria-label="next page" title='next page' disabled={props.gownOrSuit.length <= 20}
                className={`bg-transparent d-flex justify-content-center align-items-center ` + (props.gownOrSuit.length <= 20 ? '' : 'scaleOnHover_2')}
                onClick={() => {
                    props.pageButton(true)
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="bi bi-caret-right-fill" viewBox="0 0 16 16"
                    fill={props.gownOrSuit.length <= 20 ? 'rgba(0, 0, 0, .2)' : 'black'}>
                        <title>Navigate To Next Page</title>
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
            </button>
        </div>
    )
}