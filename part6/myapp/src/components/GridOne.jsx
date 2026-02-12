// import React,{useState} from "react";

// const GridOne = ()=>{
//      const students = {
//           data:[
//                {
//                     "id":1,
//                     "name":"aung aung",
//                     "city":"yangon"
//                },
//                {
//                     "id":2,
//                     "name":"su su",
//                     "city":"mawlamyine"
//                },
//                {
//                     "id":3,
//                     "name":"kyaw kyaw",
//                     "city":"bago"
//                },
//                {
//                     "id":4,
//                     "name":"hnin hnin",
//                     "city":"yangon"
//                },
//                {
//                     "id":5,
//                     "name":"thura",
//                     "city":"madalay"
//                }
//           ]
//      }
//      const [dataState, setDataState] = useState(students);
//      return (
//           <div>
//                <Article />
//                <ul>
//                     {
//                          dataState.data.map((student,idx)=><Post key={idx.toString()} senddata={student}/>)
//                     }
//                </ul>
//           </div>
//      )
// }
// const Article = ()=>{
//      return(
//           <div>
//                <h3>This is Article Functional Component</h3>
//                <p>Hello World</p>
//           </div>
//      )
// }

// class Post extends React.Component{
//      render(){
//           return(
//                <div>
//                     <li>{this.props.senddata.id} . {this.props.senddata.name}, {this.props.senddata.city}</li>
//                </div>
//           )
//      }
// }

// export default GridOne;


import React from "react";

class GridOne extends React.Component{
  
     constructor(){
          super();
          this.students = {
               data:[
                    {
                         "id":1,
                         "name":"aung aung",
                         "city":"yangon"
                    },
                    {
                         "id":2,
                         "name":"su su",
                         "city":"mawlamyine"
                    },
                    {
                         "id":3,
                         "name":"kyaw kyaw",
                         "city":"bago"
                    },
                    {
                         "id":4,
                         "name":"hnin hnin",
                         "city":"yangon"
                    },
                    {
                         "id":5,
                         "name":"thura",
                         "city":"madalay"
                    },
               ]
          };
     }

     render(){
          return(
               <div>
                    <Article />
                    <ul>
                         {
                              this.students.data.map((student,idx)=><Post key={idx.toString()} senddata={student}/>)
                         }
                    </ul>
               </div>
          )
     }

     
}
const Article = ()=>{
     return(
          <div>
               <h3>This is Article Functional Component</h3>
               <p>Hello World</p>
          </div>
     )
}

class Post extends React.Component{
     render(){
          return(
               <div>
                    <li>{this.props.senddata.id} . {this.props.senddata.name}, {this.props.senddata.city}</li>
               </div>
          )
     }
}

export default GridOne;