const readarticle = (state)=>{
     return {
          type: "READ",
          payload:state
     }
}

const writearticle = (state)=>{
     return {
          type: "WRITE",
          payload:state
     }
}


const increment = (state)=>{
     return {
          type: "INCREMENT",
          payload:state
     }
}
const decrement = (state)=>{
     return {
          type: "DECREMENT",
          payload:state
     }
}
export {readarticle,writearticle,increment,decrement}