// import React,{useState} from "react";
// const shortlabels = ["Name","Gender","City"];
// const longlabels = ["Full Name","Choose Gender","Enter your Hoetown"];

// const DivNine = ()=>{
     
//      const [labelState,setLabelState] = useState(shortlabels);
//      const clickHandler = ()=>{
//           setLabelState(labelState === shortlabels ? longlabels : shortlabels);
//      }
//      const display = labelState.map((val,idx)=>(
//           <div className="form-group" key={idx}>
//                <label htmlFor={`info-${idx}`}>{val}</label>
//                <br />
//                <input type="text" name={`info-${idx}`} id={`info-${idx}`} className="form-control"/>
//           </div>
//      ));
//      return (
//           <section>
//                <h2>Register Form</h2>
//                <form action="" method="">
//                     {display}
//                </form>
//                <button type="button" onClick={clickHandler}>More</button>
//           </section>
//      )
// }

// export default DivNine;


// import React from "react";
// const shortlabels = ["Name","Gender","City"];
// const longlabels = ["Full Name","Choose Gender","Enter your Hoetown"];

// class DivNine extends React.Component{
     
//      constructor(){
//           super();
//           this.state = {
//                labelState : shortlabels
//           }
//      }

//      clickHandler = ()=>{
//           this.setState({
//                labelState : this.state.labelState === shortlabels ? longlabels : shortlabels
//           });
//      }
     
//      render(){
          
//           const display = this.state.labelState.map((val,idx)=>(
//                <div className="form-group" key={idx}>
//                     <label htmlFor={`info-${idx}`}>{val}</label>
//                     <br />
//                     <input type="text" name={`info-${idx}`} id={`info-${idx}`} className="form-control"/>
//                </div>
//           ));
//           return (
//                <section>
//                     <h2>Register Form</h2>
//                     <form action="" method="">
//                          {display}
//                     </form>
//                     <button type="button" onClick={this.clickHandler}>{this.state.labelState === shortlabels ? "Show More" : "Hide"}</button>
//                </section>
//           )
//      }
// }

// export default DivNine;





// import React,{useState} from "react";

// const shortlabels = ["Name","Gender","City"];
// const longlabels = ["Full Name","Choose Gender","Enter your Hoetown"];
// const DivNine = ()=>{
//      let [labelState,setLabelState] = useState("short");
//      const clickHandler = ()=>{
//           setLabelState(labelState === "short" ? "long" : "short");
//      }

//      const currentLabels = (labelState === "short") ? shortlabels : longlabels; 
//      const display = currentLabels.map((val,idx)=>(
//           <div className="form-group" key={idx}>
//                <label htmlFor={`info-${idx}`}>{val}</label>
//                <br />
//                <input type="text" name={`info-${idx}`} id={`info-${idx}`} className="form-control"/>
//           </div>
//      ));
          
//      return (
//           <section>
//                <h2>Register Form</h2>
//                <form action="" method="">
//                     {display}
//                </form>
//                <button type="button" onClick={clickHandler}>More</button>
//           </section>
//      )
// }

// export default DivNine;


import React from "react";

const shortlabels = ["Name","Gender","City"];
const longlabels = ["Full Name","Choose Gender","Enter your Hoetown"];
class DivNine extends React.Component{

     constructor(){
          super();
          this.state = {
               labelState : "short"
          }
     }


     render(){
          const clickHandler = ()=>{
               this.setState({
                    labelState : this.state.labelState === "short" ? "long" : "short"
               });
          }
     
          const currentLabels = (this.state.labelState === "short") ? shortlabels : longlabels; 
          const display = currentLabels.map((val,idx)=>(
               <div className="form-group" key={idx}>
                    <label htmlFor={`info-${idx}`}>{val}</label>
                    <br />
                    <input type="text" name={`info-${idx}`} id={`info-${idx}`} className="form-control"/>
               </div>
          ));

          return (
               <section>
                    <h2>Register Form</h2>
                    <form action="" method="">
                         {display}
                    </form>
                    <button type="button" onClick={clickHandler}>More</button>
               </section>
          )

     }

     
          
     
}

export default DivNine;
