
export default function SearchBar({ SearchOpen, setSearchOpen, onSubmit, setInputValue, search }) {
    return (
        <div
        className='position-fixed start-50 translate-middle-x top-50 overflow-hidden bg-dark backdrop_blur scaleOnActive p-2 rounded'
        style={{
            zIndex: '51',
            width: '90%',
            maxWidth: '30rem',
            display: SearchOpen? "block" : "none"
        }}>
            
            <form onSubmit={onSubmit} className='overflow-visible input-group'>
                <label title="Search" for="searchKode" className="text-muted d-flex align-items-center px-2 me-2">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" className="bi bi-search " viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </label>
                <input id='searchKode' required className='form-control rounded' type='search' name='kode'
                placeholder="Cari Gaun dengan Kode ex. WG01" aria-label="Cari Gaun dengan Kode"
                onChange={e => setInputValue(e.target.value)} />
                

                <button title="Apply Search"
                type="button" onClick={() =>{
                    if (!SearchOpen) return;
                    onSubmit()
                } } className={`d-flex align-items-center bg-transparent mx-2 px-2`}
                style={{
                    cursor: 'pointer'
                }}>
                    <svg clip-rule="evenodd" width={32} height='32' fill="white" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.25 12.321 7.27 6.491c.143.127.321.19.499.19.206 0 .41-.084.559-.249l11.23-12.501c.129-.143.192-.321.192-.5 0-.419-.338-.75-.749-.75-.206 0-.411.084-.559.249l-10.731 11.945-6.711-5.994c-.144-.127-.322-.19-.5-.19-.417 0-.75.336-.75.749 0 .206.084.412.25.56" fill-rule="nonzero"/></svg>
                </button>

                <button title='Close Search' 
                className='align-items-center bg-dark me-2 scaleOnActive' 
                type='button'
                onClick={() => {
                    if (!SearchOpen) return;
                    setSearchOpen(false);
                }}>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="40" width="40"><path d="m10.542 30.958-1.5-1.5 9.5-9.458-9.5-9.458 1.5-1.5 9.458 9.5 9.458-9.5 1.5 1.5-9.5 9.458 9.5 9.458-1.5 1.5-9.458-9.5Z"/></svg>
                </button>
            </form>
        </div>
    );
}

