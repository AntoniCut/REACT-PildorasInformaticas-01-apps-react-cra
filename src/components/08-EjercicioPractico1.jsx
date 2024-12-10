//  *************************************************************************************************
//  **********  /00-apps-react-pildorasinformaticas/src/components/EjercicioPractico1.jsx  **********
//  *************************************************************************************************


import { useState } from "react";
import { ComponenteMultiple } from "./08-ComponenteMultiple";


export const EjercicioPractico1 = () => {


    const [dias, setDias] = useState(0);
    const [opcion, setOpcion] = useState("Hotel");

    const selectorHotelCoche = (e) => {
        setOpcion(e.target.value);
    };

    return (

        <div className="layout">
            <h1> Calculo del Coste de un Hotel y Alquiler de un Vehiculo </h1>

            <section className="container">
                <select className="desplegable" onChange={selectorHotelCoche}>
                    <option value="Hotel"> Hotel </option>
                    <option value="Coche"> Coche </option>
                </select>

                <input type="text" onChange={e => setDias(e.target.value)} placeholder="introduce el Nº de dias" />

                {opcion === "Hotel" && <ComponenteMultiple opcion={1} dias={dias} />}
                {opcion === "Coche" && <ComponenteMultiple opcion={2} dias={dias} />}

            </section>
        </div>
    )
}


