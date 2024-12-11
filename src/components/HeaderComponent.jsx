//  ****************************************************************************
//  **********  /src/componentes/HeaderComponent/HeaderComponent.jsx  **********
//  ****************************************************************************


import logoReact from '../assets/logoReact.svg';


export const HeaderComponent = () => {

    return (

        <header className="App-header">

            {/* -----  Logo de React  ----- */}
            <img src={logoReact} className="app-logo-react" alt="logo" />
            <h1 className='header__title'> APPS REACT - PILDORAS INFORMÁTICAS </h1>
            <img src={logoReact} className="app-logo-react" alt="logo" />
           

        </header>
    )
}