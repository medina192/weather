import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {

    let navigate = useNavigate();

    const returnScreen = () => {
        navigate(-1);
    }

    return (
        <div className="containerNotFound">
            <h3 className="error">Error</h3>
            <h2 class="_404">404</h2>
            <p class="url">La Url no existe</p>
            <button
                class="button_return"
                onClick={returnScreen}
            >
                Regresar
            </button>
        </div>
    )
}

export default PageNotFound
