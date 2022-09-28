import { Suspense, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

export const renderLoader = () =>
  <div className='container-fluid bg-dark bg-opacity-75 position-fixed top-0 bottom-0 start-0 backdrop_blur'
    style={{ zIndex: '1000' }}>
    <div className='loaderParent d-flex position-absolute p-3 top-50 start-50 translate-middle'>
      <div className="loader"></div>
      <div className="loader"></div>
      <div className="loader"></div>
    </div>
  </div>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Suspense fallback={renderLoader()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </StrictMode>,
);
