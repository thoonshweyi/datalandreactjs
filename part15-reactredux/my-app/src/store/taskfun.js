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

export {readarticle,writearticle}