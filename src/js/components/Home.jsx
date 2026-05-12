import React from "react";

import SecondsCounter from "./SecondsCounter";

const Home = ({ seconds }) => {
    return (
       <div className="text-center mt-5">
            <SecondsCounter seconds={seconds} />
            
            <div className="mt-4">
                <input 
                    type="number" 
                    id="userNumber" 
                    placeholder="Ingresa un número" 
                    className="p-2"
                />
                <button 
                    className="btn btn-primary ms-2"
                    onClick={() => window.updateCounter()}
                >
                    Ejecutar
                </button>
            </div>
        </div>
    );
};
export default Home;