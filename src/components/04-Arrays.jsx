//  **************************************************
//  **********  /src/components/Arrays.jsx  **********
//  **************************************************


export const Arrays = () => {

   const miArray1 = () => {

      const numerosArray = [15, 37, 26, 95, 81]

      return (

         <p> {
            numerosArray.map((numero, index) => {
               return <span key={index}> &nbsp; &nbsp; {index} - {numero} </span>
            })
         } </p>
      )
   }


   const miArray2 = () => {

      const numerosArray = [
         { id: 1, numero: 15 },
         { id: 2, numero: 37 },
         { id: 3, numero: 26 },
         { id: 4, numero: 95 },
         { id: 5, numero: 81 }
      ]

      return (

         <p> {

            numerosArray.map((elemento) => {
               return <span key={elemento.id}> &nbsp; &nbsp; {elemento.id} - {elemento.numero} </span>
            })

         } </p>
      )
   }


   return (
      <div className="App">
            <h1> Numeros del Array </h1>
            <h5 className="resultado"> con array... {miArray1()} </h5>
            <h5 className="resultado"> con objetos... {miArray2()} </h5>
      </div>
   );

}


