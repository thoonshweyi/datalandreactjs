import React,{ Fragment } from 'react'
import Tag from "./Tag.jsx"
import "./Card.css";
import removeIcon from "../assets/remove.png";


const Card = ({name,qty,pkg,tags,deletehandler,idxkey})=>{
     const customername = name.charAt(0).toUpperCase()+name.slice(1);
     const packagename = pkg.charAt(0).toUpperCase()+pkg.slice(1);
     const handleTagClick = (tagname)=>{
          console.log(`Tag clicked = ${tagname}`);
          // Add any logic here
     }
     return (
     <Fragment>
      <div className='card col-md-5 border-0 shadow rounded-0 m-1'>
          <div className='card-headerd d-flex justify-content-between align-items-center'>
               <h6 className='card-title m-0'>{`${idxkey+1}. ${customername}`}</h6>
               <div onClick={()=>deletehandler(idxkey)}>
                    <img src={removeIcon} className='removeicon' alt="removeicon"/>
               </div>
          </div>

          <div className='card-body'>
               <div className='d-flex justify-content-between align-items-center mb-3'>
                    <span className='d-block'>{packagename}</span>
                    <span className='d-block'>total: {qty} qty</span>
               </div>

               <div className='d-flex'>
                    {
                         tags.map((tag,index)=>(
                              <Tag key={index} tagname={tag} selected={true} checktag={()=>handleTagClick(tag)}/>
                         ))
                    }
               </div>
          </div>
      </div>


    </Fragment>
  )
}

export default Card
