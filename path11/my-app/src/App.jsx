import { useState } from 'react'
import MainForm from "./components/MainForm.jsx"
import PackageColumn from "./components/PackageColumn.jsx"

const App = ()=>{
  return (
    <div className='container py-5'>
      <div className='row'>
        <h3 className='text-center'>Laundry Service</h3>
      </div>

      <div className='col-md-12'>
          <MainForm/>
      </div>


      <div className='col-md-12'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='row'>
                <PackageColumn/>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row'>
                <PackageColumn/>
            </div>
          </div>
        </div>  
      </div>

    </div>
  )
}

export default App
