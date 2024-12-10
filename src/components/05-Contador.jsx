//  ***************************************************
//  **********  /src/Components/Contador.js  **********
//  ***************************************************

import React, { useState } from "react"


//  **********  Componente 'Contador'  **********
export const Contador = () => {

    const [cuenta, setContador] = useState(0);

    const incrementar = () => {
        setContador(cuenta + 1);
    }

    const decrementar = () => {
        if (cuenta === 0) return;
        setContador(cuenta - 1);
    }

    const handleChange = (e) => {
        setContador(Number(e.target.value));
    };

    const reset = () => {
        setContador(0);
    }


    return (

        <div className="contador">
            
            <div className="contador-superior">
                <button className="btn-contador" onClick={decrementar}> - </button>
                <input className="marcador-contador" type="text" value={cuenta} size="2" style={{ textAlign: "center" }} onChange={handleChange} />
                <button className="btn-contador" onClick={incrementar}> + </button>
            </div>

            <div className="contador-inferior">
                <button className="btn-contador btn-reset" onClick={reset}> reset </button>
            </div>



        </div>
    )

}


