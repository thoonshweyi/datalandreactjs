// import React from "react";

// function CardOne(){
//      return <h3>I am card one</h3>
// }

// export default CardOne;




// import React from "react";

// function CardOne(){
//      return React.createElement(
//           "h1",
//           null,
//           "I am card one"
//      )
// }

// export default CardOne;

// - function component directly return



import React from "react";

class CardOne extends React.Component{
     render(){
          return <h3>I am card one</h3>
     }
}

export default CardOne;
// - class component
//        extends  React.Component
//        firstly render() and return