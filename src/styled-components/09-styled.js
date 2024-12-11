//  ***********************************************
//  **********  /01-apps-react-cra/src/  **********
//  **********  /src/styled-components/  **********
//  **********  /09-styled.js  ********************
//  ***********************************************


import styled, { css } from "styled-components";


//  *****  Componente Estilo  --  MiCaja  -----  div  -----
export const MiCaja = styled.div`

    width: 300px;
    height: 200px;
    line-height: 200px;
    font-size: 48px;
    font-weight: bold;
    color: white;
    background-color: blue;
    transition: All 600ms ease-in-out;
    &:hover {
        background-color: red;
    }
`;


//  *****  Componente Estilo  --  MiBoton  -----  button  -----
export const MiBoton = styled.button`
    
    width: 120px;
    height: 50px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2), 
                -4px -4px 10px rgba(255, 255, 255, 0.3);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    cursor: pointer;

    &:hover {
        box-shadow: inset 4px 4px 10px rgba(0, 0, 0, 0.2),
                    inset -4px -4px 10px rgba(255, 255, 255, 0.3);
        transform: translateY(2px);
    }

    &:active {
        box-shadow: inset 6px 6px 15px rgba(0, 0, 0, 0.3),
                    inset -6px -6px 15px rgba(255, 255, 255, 0.4);
        transform: translateY(4px);
    }
    cursor: pointer;

`;


//  *****  Componente Estilo  --  MiBotonProps  -----  button  -----
export const MiBotonProps = styled.button`
    
    ${({ entrar }) =>

        entrar
            
            ? css`
                ${EstilosComunes}                            
                width: 150px;
                height: 50px;
                background-color: #007bff;
                color: white;
                font-size: 16px;
                font-weight: bold;
                border-radius: 5px;
            `

            : `
                ${EstilosComunes}
                padding: 10px 20px;        
                font-size: 20px;
                color: yellow;
                background-color: green;
                border-radius: 20px;
              `
    }
`;


//  *****  Componente Estilos Comunes para MiBoton y MiBotonProps  -----  button  -----
export const EstilosComunes = css`
    
    border: none;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2), 
                -4px -4px 10px rgba(255, 255, 255, 0.3);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    cursor: pointer;

    &:hover {
        box-shadow: inset 4px 4px 10px rgba(0, 0, 0, 0.2),
                    inset -4px -4px 10px rgba(255, 255, 255, 0.3);
        transform: translateY(2px);
    }

    &:active {
        box-shadow: inset 6px 6px 15px rgba(0, 0, 0, 0.3),
                    inset -6px -6px 15px rgba(255, 255, 255, 0.4);
        transform: translateY(4px);
    }
    cursor: pointer;

`;