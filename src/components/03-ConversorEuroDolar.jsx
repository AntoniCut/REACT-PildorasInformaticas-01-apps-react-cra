//  **************************************************************
//  **********  /src/components/ConversorEuroDolar.jsx  **********
//  **************************************************************


import { useState, useRef, useEffect } from "react";



export const ConversorEuroDolar = () => {
  
    //  almacenamos la tasa de cambio.
    const [valorCambio, setValorCambio] = useState(null);
  
    //  creamos las referencias al HTML.
    const euroRef = useRef()        //  hace referencia al campo 'input'
    const resultadoRef = useRef()   //  hace referencia al div del 'resultado'
  
    //  para la Llamada a la API Externa.
    useEffect( ()=> {
    
      const llamaApiCambio = async()=> {
  
        try {
          
          //  Llamada a la API Externa.
          const respuesta = await fetch('https://v6.exchangerate-api.com/v6/88565d03f5f4feb7a8917341/latest/USD')
          const datos = await respuesta.json()
          console.log(datos)
  
          setValorCambio(datos.conversion_rates.USD)
  
        } catch(error) {
          console.error("Error al acceder a la API: " + error)  
        }
  
      }
  
      llamaApiCambio()
          
    }, [])
    
     
    const calcular = ()=> {
      const eurosValor = parseFloat(euroRef.current.value)
      const dolares = eurosValor * valorCambio
      resultadoRef.current.innerHTML = dolares.toFixed(2) + " $"
    }
  
  
    return (
  
      <div>
          <h1> Conversor Euro-Dolar </h1>
          <input type='text' ref = {euroRef} className='centrarElementos' /> <br/>
          <button onClick = {calcular} className='btn-conversor' > Convertir </button> <br/>
          <div ref = {resultadoRef} className='resultado' > </div>
      </div>
                                                                  
    )
  
  }
  
 