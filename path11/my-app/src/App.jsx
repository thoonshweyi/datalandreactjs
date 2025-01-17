import React,{ useState,useEffect } from 'react'
import MainForm from "./components/MainForm.jsx"
import PackageColumn from "./components/PackageColumn.jsx"

const oldtasks = localStorage.getItem('tasks');
const App = ()=>{
  const [tasks,setTasks] = useState(JSON.parse(oldtasks) || []);

  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks))
  },[tasks]);

  const deleteHandler = (taskindex)=>{
    const remaintasks = tasks.filter((task,index)=> index !== taskindex);
    setTasks(remaintasks);
  };
  return (
    <div className='container py-5'>
      <div className='row'>
        <h3 className='text-center'>Laundry Service</h3>
      </div>

      <div className='col-md-12'>
          <MainForm settasks={setTasks}/>
      </div>


      <div className='col-md-12'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='row'>
                <PackageColumn title="Regular Package" tasks={tasks} status="regular" deletehandler={deleteHandler}/>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row'>
                <PackageColumn title="Urgent Package" tasks={tasks} status="urgent" deletehandler={deleteHandler}/>
            </div>
          </div>
        </div>  
      </div>

    </div>
  )
}

export default App
