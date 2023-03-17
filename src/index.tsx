import React from 'react';
import ReactDOM from 'react-dom/client';
import {Home} from './styled';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root')as HTMLElement);
root.render (
    <React.StrictMode>

        <Home/>
        <App/>

    </React.StrictMode>
);
