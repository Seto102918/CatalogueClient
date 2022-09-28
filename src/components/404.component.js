import { useNavigate } from "react-router-dom";

const Unknown = (props) => {
    console.log(props)
    const navigate = useNavigate();

    return (
        <main className=" my-5 py-5 d-flex flex-column align-items-center justify-content-center" style={{ height: '100%', minHeight: '60vh' }}>
            <h1 className="display-1 text-center container">404</h1>
            <h3 className="h3 text-center container pb-1 mb-3">Sorry, We are unable to find
                {isNaN(props.idNotFound) ? ' what you are looking for...' : props.idNotFound} </h3>
            <button type="button"
                onClick={() => navigate("/")}
                className="btn btn-primary">
                Go Back to Homepage
            </button>
        </main>
    )
}

export default Unknown;