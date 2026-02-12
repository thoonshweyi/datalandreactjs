import React from "react"    

class PhotoPost extends React.Component{
       render(){
          const title = this.props.title;
          const caption = this.props.caption;
          const imagepath = this.props.src;
          return(
               <div>
                    {/* <img src="./../assets/icons/1.png" className="posticon" alt="posticon" /> */}
                    <img src={imagepath} className="posticon" alt="posticon" />
                    <h4>{title}</h4>
                    <h5>{caption}</h5>
               </div>
          );
       }
}

export default PhotoPost;