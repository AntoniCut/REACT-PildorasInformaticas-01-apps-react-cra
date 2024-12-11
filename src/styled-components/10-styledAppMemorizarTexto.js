//  ******************************************************
//  **********  /01-apps-react-cra  **********************
//  **********  /styled-components/src/  *****************
//  **********  /10-styledAppMemorizarTexto.js  **********
//  ******************************************************


import styled from "styled-components";
import { EstilosComunes } from "../styled-components/09-styled";


export const RowMemoria = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;

`;


export const BotonMemoria = styled.button`
    width: 45%;
    height: 45%;
    padding: 35px;
    margin-top: 100px;
    font-size: 2rem;
    cursor: pointer;
    background-color: lightgreen;
    ${EstilosComunes}
`;
