//  ************************************
//  **********  /src/App.jsx  **********
//  ************************************


import { Routes, Route } from 'react-router-dom';

import {
    HeaderComponent,
    NavBarLink,
    Titulo,
    UseState,
    UseRef,
    ConversorEuroDolar,
    Arrays,
    Contador,
    Saludo,
    RenderizadoCondicional,
    EjercicioPractico1,
    AppMemorizarTexto
} from './components';

import { MiCaja, MiBoton, MiBotonProps } from './styled-components/09-styled';
import { MiBotonLargo, MiBotonLargo2 } from './styled-components/09-styled2';


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

            <NavBarLink />

            {/* **********  Contenido Principal de la Aplicación  ********** */}
            <main className="App-main">


                <Routes >

                    {/* <Route path="/" element={<App />} /> */}

                    {/* **********  1. Use State  ********** */}
                    <Route
                        path="/use-state"
                        element={
                            <>
                                {document.title = 'Use State'}
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
                                {document.title = 'Use Ref'}
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
                                    <MiBoton> Entrar </MiBoton>
                                    <MiBotonProps entrar={false}> Entrar - props </MiBotonProps>
                                    <MiBotonLargo> Salir </MiBotonLargo>
                                    <MiBotonLargo2> Warning </MiBotonLargo2>
                                </div>
                            </>
                        }
                    />

                    {/* **********  10. App Recopilatoria  **********/}
                    <Route
                        path="/app-memorizar-texto"
                        element={

                            <>
                                <Titulo nameTitulo="----------  10. App Recopilatoria  ----------" />
                                <AppMemorizarTexto />
                            </>
                        }
                    />

                </Routes>

            </main>

        </div>
    )
}
