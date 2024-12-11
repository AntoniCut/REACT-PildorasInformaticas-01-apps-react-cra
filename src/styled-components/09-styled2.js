//  ***********************************************
//  **********  /01-apps-react-cra/src/  **********
//  **********  /src/styled-components/  **********
//  **********  /09-styled2.js  *******************
//  ***********************************************


import styled from "styled-components";
import { MiBoton} from './09-styled'


//  **********  Media Queries  **********
const medidaAncho = 900;
const moviles = `@media(max-width: ${medidaAncho}px)`;


//  *****  Componente Estilo  --  MiBotonLargo  --  button  *****
export const MiBotonLargo = styled(MiBoton) `
    
    width: 750px;
    background-color: red;
        
    ${moviles} {
        width: 50%;
    }
`;


//  *****  Componente Estilo  --  MiBotonLargo2  --  button  *****
export const MiBotonLargo2 = styled(MiBotonLargo) `
    
    color: blue;
    background-color: yellow;
`;
