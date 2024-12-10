//  *************************************************
//  **********  /src/Components/Saludo.js  **********
//  *************************************************


import PropTypes from "prop-types";



/**
 * -----  Componente Saludo  -----
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.usuario - Objeto que contiene la información del usuario.
 * @param {string} props.usuario.nombre - Nombre del usuario.
 * @param {string} props.usuario.apellido - Apellido del usuario.
 * @param {number} props.usuario.edad - Edad del usuario.
 * @param {string} props.usuario.genero - Género del usuario.
 * @returns {JSX.Element} Elemento JSX que representa el saludo.
 */

export const Saludo = (props) => {

   return (

      <div>

           <h1> Hola {props.usuario.nombre} {props.usuario.apellido} !!! </h1>
           <h2> Tienes {props.usuario.edad} años </h2>
           <h2> y de genero <strong> {props.usuario.genero} </strong> </h2>

      </div>

   )

}


//  *****  Validacion de 'props'  *****
Saludo.propTypes = {

   usuario: PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      edad: PropTypes.number.isRequired

   }).isRequired

}
