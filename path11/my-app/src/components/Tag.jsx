import React from "react";

const Tag = ({tagName,selected,checkTag})=>{
     
     const tagstyle = {
          Washing:{backgroundColor:"blue",color:"white"},
          Drying:{backgroundColor:"tomato",color:"white"},
          Delivery:{backgroundColor:"green",color:"white"},
          Silver:{backgroundColor:"silver",color:"white"},
     }
     return(
          <span className="badge user-select-none me-1" style={selected ? tagstyle[tagName] : tagstyle[Silver]}>Hello</span>
     )
}
export default Tag;