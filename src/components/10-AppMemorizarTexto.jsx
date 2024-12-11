//  ********************************************************
//  **********  /01-apps-react-cra/src/  *******************
//  **********  /components/10-AppMemorizarTexto  **********
//  **********  /01-apps-react-cra/src/  *******************
//  ********************************************************


import { useState, useRef, useEffect } from "react";
import parrafos from "../data/quijote.json";
import { RowMemoria, BotonMemoria } from "../styled-components/10-styledAppMemorizarTexto";



export const AppMemorizarTexto = () => {

    const numParrafos = parrafos.length;

    const [parafoActual, setParrafoActual] = useState(0);
    const appContainerRef = useRef(null); // Usar un ref para el contenedor

    useEffect(() => {
        
        console.warn('Se ejecuta al montaje');
        console.log('Estas Leyendo el párrafo ', parafoActual + 1);

        const colorAleatorio = `
            rgb(${Math.floor(Math.random()*256)}, 
                ${Math.floor(Math.random()*256)}, 
                ${Math.floor(Math.random()*256)}
            )
        `;

        console.log(colorAleatorio)
        
        if (appContainerRef.current) appContainerRef.current.style.backgroundColor = colorAleatorio; // Aplicar el color de fondo
        
        
        return () => {
            console.warn('Se ejecuta al Desmontaje'); 
        };

    }, [parafoActual]);     //  el efecto depende del párrafo actual.


    const anteriorParrafo = () => {
        if(parafoActual === 0) return;
        setParrafoActual(parafoActual - 1);
    }

    const siguienteParrafo = () => {
        if(parafoActual === numParrafos - 1) return;
        setParrafoActual(parafoActual + 1)
    }

    
    return (

        <div className="app-memorizar-texto">

            <h2 className="memorizar__title"> App Memorizar Texto </h2>

            <p className="mostrar-parrafo"> {parrafos[parafoActual]} </p>

            <RowMemoria>
                <BotonMemoria onClick={anteriorParrafo}> Anterior </BotonMemoria>
                <BotonMemoria onClick={siguienteParrafo} > Siguiente </BotonMemoria>
            </RowMemoria>

        </div>
    )
}
