//  ****************************************************
//  **********  /src/components/UseState.jsx  **********
//  ****************************************************


import React, { useState, useEffect } from "react";


export const UseState = () => {


    useEffect(() => {
        document.title = "Use State"
    } , []);


    //  *****  Definir el estado del componente para almacenar el resultado de la suma  *****
    const [resultado, setResultado] = useState(null);

    //  *****  Creación de elementos  *****  
    const elemento1 = <h1 className="centrar-elementos"> Hola mundo! </h1>
    //const elemento2 = <h2 className="centrar-elementos"> { /* función suma */ suma(7, 5)} </h2>

    //  *****  funcion boton pulsado  *****
    const botonPulsado = () => {

        const result = suma(5, 7);
        setResultado(result);

    };


    //  *****  Renderiza elementos.  && = renderiza resultados condicionales. si es 'true' ejecuta lo de la derecha.
    return (

        <div className="component__container">

            <button onClick={botonPulsado} style={{
                marginTop: "30px",
                marginLeft: "10px"
            }} className="boton"> Púlsame </button>

            <div> {elemento1} </div>
            <div> {resultado != null && <h2> El resultado es: {resultado} </h2>} </div>

        </div>
    )

}



//  *****  función que suma 2 números.
function suma(a, b) {
    return a + b;
}

//export default App;




