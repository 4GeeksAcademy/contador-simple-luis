import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
let seconds = 0;

window.updateCounter = () => {
    const input = document.getElementById("userNumber");
    seconds = parseInt(input.value) || 0;
};

setInterval(() => {
    root.render(
        <React.StrictMode>
            <Home seconds={seconds} />
        </React.StrictMode>
    );
    seconds++;
}, 1000);


