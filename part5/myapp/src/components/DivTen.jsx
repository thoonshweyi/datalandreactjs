// import React,{useState} from "react";

// const students = [
//      {id:1,name:"aung aung",result:"pass"},
//      {id:2,name:"kyaw kyaw",result:"fail"},
//      {id:3,name:"zaw zaw",result:"pass"},
//      {id:4,name:"tun tun",result:"fail"},
//      {id:5,name:"hla hla",result:"pass"},
//      {id:6,name:"nu nu",result:"pass"},
//      {id:7,name:"su su",result:"pass"},
//      {id:8,name:"yu yu",result:"pass"},
//      {id:9,name:"thidar",result:"fail"},
//      {id:10,name:"zayar",result:"pass"},
// ];
// const DivTen = ()=>{
//      const [studentState,setStudentState] = useState("all");
//      const allclickHandler = ()=>{
//           setStudentState("all");
//      }
//      const passclickHandler = ()=>{
//           setStudentState("pass");
//      }
//      const failclickHandler = ()=>{
//           setStudentState("fail");
//      }

//      const display = students.
//                     filter(student=>(studentState === "all" ? student : studentState === "pass" ? student.result !== "fail" : student.result !== "pass"))
//                     .map(student=>(<li key={student.id.toString()}>{student.name} = {student.result}</li>))

//      return (
//           <section>
//                <h2>Exam Result</h2>

//                <ul>
//                     {display}
//                </ul>

//                <button type="button" onClick={allclickHandler}>All Students</button>
//                <button type="button" onClick={passclickHandler}>Pass Students</button>
//                <button type="button" onClick={failclickHandler}>Fail Students</button>
//           </section>
//      )
// }

// export default DivTen;

import React from "react";
const students = [
     {id:1,name:"aung aung",result:"pass"},
     {id:2,name:"kyaw kyaw",result:"fail"},
     {id:3,name:"zaw zaw",result:"pass"},
     {id:4,name:"tun tun",result:"fail"},
     {id:5,name:"hla hla",result:"pass"},
     {id:6,name:"nu nu",result:"pass"},
     {id:7,name:"su su",result:"pass"},
     {id:8,name:"yu yu",result:"pass"},
     {id:9,name:"thidar",result:"fail"},
     {id:10,name:"zayar",result:"pass"},
];

class DivTen extends React.Component{

     constructor(){
          super();
          this.state = {
               studentState : "all"
          }
     }
     
     render(){
          const allclickHandler = ()=>{
               this.setState({
                    studentState : "all"
               })
          }
          const passclickHandler = ()=>{
               this.setState({
                    studentState : "pass"
               })
          }
          const failclickHandler = ()=>{
               this.setState({
                    studentState : "fail"
               })
          }
     
          const display = students.
                         filter(student=>(this.state.studentState === "all" ? student : this.state.studentState === "pass" ? student.result !== "fail" : student.result !== "pass"))
                         .map(student=>(<li key={student.id.toString()}>{student.name} = {student.result}</li>))
     
          return (
               <section>
                    <h2>Exam Result</h2>
     
                    <ul>
                         {display}
                    </ul>
     
                    <button type="button" onClick={allclickHandler}>All Students</button>
                    <button type="button" onClick={passclickHandler}>Pass Students</button>
                    <button type="button" onClick={failclickHandler}>Fail Students</button>
               </section>
          )
     }
}

export default DivTen;
