//  ************************************
//  **********  /src/App.jsx  **********
//  ************************************


import { Routes, Route, Link, Navigate } from 'react-router-dom';

import './App.css';
import { HeaderComponent } from './HeaderComponent/jsx/HeaderComponent.jsx';
import { Titulo } from './components/00-Titulo.jsx';
import { UseState } from './components/01-UseState.jsx';
import { UseRef } from './components/02-UseRef.jsx';
import { ConversorEuroDolar } from './components/03-ConversorEuroDolar.jsx';
import { Arrays } from './components/04-Arrays.jsx';
import { Contador } from './components/05-Contador.jsx';
import { Saludo } from './components/06-Saludo.jsx';
import { RenderizadoCondicional } from './components/07-RenderizadoCondicional.jsx';
import { EjercicioPractico1 } from './components/08-EjercicioPractico1.jsx';
import { Boton, MiCaja } from './components/09-styled.js';



//  ----------  Definición de Objetos  ----------
const usuario = {
    nombre: "Antonio",
    apellido: "Cutillas",
    edad: 48,
    genero: "masculino"
}

const usuario2 = {
    nombre: "Antonio",
    apellido: "Cutillas",
    edad: 48,
    genero: "masculino"
}


//  **********  Documentación  **********
/**
 * **********  Componente Principal App()  **********
 * @returns {JSX.Element}
 */

//  **********  Componente Padre App()  **********
export const App = () => {


    return (

        <div className="App">

            {/* **********  Cabecera del Proyecto  ********** */}
            <HeaderComponent />

            <nav className='navbar-header'>
                {/* <Link to='/'> HOME </Link> */}
                <Link to='/use-state'> Use State </Link>
                <Link to='/use-ref'> Use Ref </Link>
                <Link to='/conversor-euro-dolar'> Conversor Euro Dolar </Link>
                <Link to='/arrays'> Arrays </Link>
                <Link to='/contador'> Contador </Link>
                <Link to='/saludo'> Saludo </Link>
                <Link to='/renderizado-condicional'> Renderizado Condicional </Link>
                <Link to='/ejercicio-practico-1'> Ejercicio Practico 1 </Link>
                <Link to='/styled-components'> Styled Components </Link>


                <Link to='/404'> Not Exist Route </Link>
            </nav>


            {/* **********  Contenido Principal de la Aplicación  ********** */}
            <main className="App-main">


                <Routes >

                    {/* <Route path="/" element={<App />} /> */}

                    {/* **********  1. Use State  ********** */}
                    <Route
                        path="/use-state"
                        element={
                            <>
                                { document.title = 'Use State' }
                                <Titulo nameTitulo="----------  1. Use State  ----------" />
                                <UseState />
                            </>

                        }
                    />


                    {/* **********  2. Use Ref  ********** */}
                    <Route
                        path="/use-ref"
                        element={
                            <>
                                { document.title = 'Use Ref' }
                                <Titulo nameTitulo="----------  2. Use Ref  ----------" />
                                <UseRef />
                            </>
                        }
                    />


                    {/* **********  3. Conversor Euro Dolar  ********** */}
                    <Route
                        path="/conversor-euro-dolar"
                        element={
                            <>
                                <Titulo nameTitulo="----------  3. Conversor Euro Dolar  ----------" />
                                <ConversorEuroDolar />
                            </>
                        }
                    />


                    {/* **********  4. Arrays  ********** */}
                    <Route
                        path="/arrays"
                        element={
                            <>
                                <Titulo nameTitulo="----------  4. Arrays  ----------" />
                                <Arrays />
                            </>
                        }
                    />


                    {/* **********  5. Trabajo con Componentes I  ********** */}
                    <Route
                        path="/contador"
                        element={
                            <>
                                <Titulo nameTitulo="----------  5. Trabajo con Componentes I  ----------" />
                                <Contador />

                            </>
                        }
                    />


                    {/* **********  6. Trabajo con Componentes II  ********** Utilizando Props  **********/}
                    <Route
                        path="/saludo"
                        element={
                            <>
                                <Titulo nameTitulo="----------  6. Trabajo con Componentes II - Props  ----------" />
                                <Saludo usuario={usuario} />

                            </>
                        }
                    />

                    {/* **********  7. Renderizado Condicional  **********/}
                    <Route
                        path="/renderizado-condicional"
                        element={
                            <>
                                <Titulo nameTitulo="----------  7. Renderizado Condicional  ----------" />
                                <RenderizadoCondicional usuario2={usuario2} />

                            </>
                        }
                    />


                    {/* **********  8. Ejercicio Practico 1  **********/}
                    <Route
                        path="/ejercicio-practico-1"
                        element={
                            <>
                                <Titulo nameTitulo="----------  8. Ejercicio Practico 1  ----------" />
                                <EjercicioPractico1 />

                            </>
                        }
                    />


                    {/* **********  9. Styled Components  **********/}
                    <Route
                        path="/styled-components"
                        element={
                            
                            <>
                                <Titulo nameTitulo="----------  9. Styled Components  ----------" />
                                <div className='styled-components'>
                                    <MiCaja> Mi Caja </MiCaja>
                                    <Boton> Entrar </Boton>
                                </div>
                            </>
                        }
                    />

                </Routes>

            </main>

        </div>
    )
}
