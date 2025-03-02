import React from "react"
import Card from "./Card.jsx"
const PackageColumn = ({title,tasks=[],status,deletehandler})=>{
     return (
          <>
               <h6 className="text-primary border-bottom my-3">{title}</h6>
               <div className="row">
                    {
                         // tasks.filter(task=>task.package === status)
                         // .map((task,index)=>(
                         //       <Card key={index} 
                         //           name= { index + task.name}
                         //           qty= {task.quantity}
                         //           pkg= {task.package}
                         //           tags= {task.tags}
                         //           deletehandler= {deletehandler}
                         //           idxkey={index} />
                         // )) 
                         // * Not unique index nuber at both columns
                         // 0 kyaw      0 su
                         // 1 aung      1 yu
                         // 2 tun       2 nandar
                         // 3 nyi

                         // tasks.map((task,index)=>{
                         //      if(task.package === status){
                         //           return <Card key={index} 
                         //                     name= { index + task.name}
                         //                     qty= {task.quantity}
                         //                     pkg= {task.package}
                         //                     tags= {task.tags}
                         //                     deletehandler= {deletehandler}
                         //                     idxkey={index} />
                         //      }
                         // })

                       

                         // tasks.map((task,index)=> task.package === status ? (
                         //      <Card key={index} 
                         //      name= { index + task.name}
                         //      qty= {task.quantity}
                         //      pkg= {task.package}
                         //      tags= {task.tags}
                         //      deletehandler= {deletehandler}
                         //      idxkey={index} 
                         // />) : null )



                         // In React, you can use && Inline Conditional Rendering (React JSX)
                         tasks.map((task,index)=> task.package === status && 
                              <Card key={index} 
                              name= {task.name}
                              qty= {task.quantity}
                              pkg= {task.package}
                              tags= {task.tags}
                              deletehandler= {deletehandler}
                              idxkey={index} 
                         />  )
                         
                    }
               </div>
          </>
     )
}
export default PackageColumn;



// Why Use && for Inline Rendering?
// It's concise and avoids writing a full if statement or a ternary operator (? :) when there's no "else" case.
// Example: If you used a ternary operator, it would look like this:
// jsx
// Copy code
// task.package === status ? <Card ... /> : null
// Using && simplifies it to:
// jsx
// Copy code
// task.package === status && <Card ... />
// When to Avoid Using &&:
// If you need to handle an "else" case, use a ternary operator instead.
// If the left-hand side (task.package === status) could return values like 0, "", or null that you don't intend to treat as false.