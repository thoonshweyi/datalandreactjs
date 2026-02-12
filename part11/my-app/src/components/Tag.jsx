import React from "react";

const Tag = ({tagname,selected,checktag})=>{
     
     const tagstyle = {
          Washing:{backgroundColor:"blue",color:"white"},
          Drying:{backgroundColor:"tomato",color:"white"},
          Delivery:{backgroundColor:"green",color:"white"},
          Silver:{backgroundColor:"silver",color:"white"},
     }
     return(
          <span className="badge user-select-none me-1" style={selected ? tagstyle[tagname] : tagstyle.Silver} onClick={()=>checktag(tagname)} >{tagname}</span>
     )
}
export default Tag;