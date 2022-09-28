
export default function FormFilter(props) {
    return (
        <form className="container">
            <hr />
            <ul className='row row-cols-1 row-cols-lg-3 mx-0 mx-sm-0 mx-xl-5 px-0 px-xl-5 mb-3 justify-content-center'>
                <li className='col mb-4'>
                    <legend className="d-flex align-items-center h5 overflow-visible">
                        Warna
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-palette ms-2" viewBox="0 0 16 16">
                            <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z" />
                        </svg>
                    </legend>
                    <ul className="row row-cols-2 m-0 p-0" style={{
                        maxHeight: '20rem'
                    }}>
                        {props.WarnaList()}
                    </ul>
                </li>
                <li className='mb-4 col'>
                    <label htmlFor="inputSelectColor" className="d-flex h5 align-items-center overflow-visible">Sort By
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-sort-alpha-down ms-2" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z" />
                            <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z" />
                        </svg>
                    </label>
                    <select id="inputSelectColor" onChange={e => props.setSortingType(e.target.value)} value={props.sortingType} name='sort' title='tipe_sorting' className='form-select'>
                        <option id="FVR" value="FVR" name="sort">Favorit</option>
                        <option id="warna" value="WRN" name="sort">Warna</option>
                        <option id="A2Z" value="A2Z" name="sort">A to Z</option>
                        <option id="Z2A" value="Z2A" name="sort">Z to A</option>
                        <option id="H2L" value="H2L" name="sort">Highest to Lowest Price</option>
                        <option id="L2H" value="L2H" name="sort">Lowest to Highest Price</option>
                    </select>
                </li>

                <li className='formBar col'>
                    <h5 className="d-flex align-items-center">Limit Harga
                        <svg aria-hidden='true' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-cash-stack ms-2" viewBox="0 0 16 16">
                            <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                            <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z" />
                        </svg>
                    </h5>
                    <div>
                        <label htmlFor="inputHargaMin">Min</label>
                        <div className='input-group' id="inputHargaMin">
                            <span className='input-group-text m-0 bg-light text-black'>Rp</span>
                            <input type="number"
                                name="hargaMin"
                                placeholder='Harga Minimum'
                                className="form-control"
                                value={isNaN(props.minHarga) ? "" : props.minHarga}
                                onChange={e => props.setMinHarga(parseInt(e.target.value))}
                            />
                        </div>
                    </div>
                    <div >
                        <label className='m-0 mt-1' htmlFor="inputHargaMax">Max</label>
                        <div className='input-group' id="inputHargaMax">
                            <span className='input-group-text m-0 bg-light text-black'>Rp</span>
                            <input type="number"
                                name='hargaMax'
                                placeholder='Harga Maksimum'
                                className="form-control"
                                value={isNaN(props.maxHarga) ? "" : props.maxHarga}
                                onChange={e => props.setMaxHarga(parseInt(e.target.value))}
                            />
                        </div>
                    </div>
                </li>
            </ul>
            <div className="row row-cols-2 mx-0 mx-xl-5 px-0 px-xl-5 mb-2 justify-content-center">
                <button type="submit" value="Submit" className="col-auto btn btn-primary mx-2 d-flex align-items-center justify-content-center">
                    <svg aria-hidden='true' xmlns="http://www.w3.org/2000/svg" fill="white" width="20" height="20" className="bi bi-check2 me-1" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                    </svg>
                    Apply
                </button>
                <button type="submit" value='Submit' className="col-auto btn btn-danger mx-2 d-flex align-items-center justify-content-center" onClick={() => {
                    props.setMaxHarga(10000000)
                    props.setMinHarga(0)
                    props.setSortingType("FVR")
                    props.setWarna(prev => {
                        let items = [...prev];
                        items.forEach((el, i) => {
                            let item = { ...items[i] };
                            item.value = true;
                            items[i] = item;
                        })
                        return items
                    })
                }}>
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" width="18" height="18" className="bi bi-arrow-counterclockwise me-1" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
                        <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
                    </svg>
                    Reset
                </button>
            </div>
        </form>
    )
}