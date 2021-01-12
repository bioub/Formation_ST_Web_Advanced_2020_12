import React, { Component } from 'react';

 class ExHelloWorld extends Component {
   constructor() {
     super();
     this.state = {};
   }
   render() {
     const {} = this.state;
     return (
       <div className="ExHelloWorld">
         <div>
           Prénom : <input /> {/* écouter l'événement input et mettre à jour le state */}
         </div>
         <p>Bonjour {/* affiche en temps réel le prénom saisi */}</p>
       </div>
     );
   }
 }

 export default ExHelloWorld;
