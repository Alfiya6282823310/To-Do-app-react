import React, { useState } from 'react'
import Navbar from './Navbar'

const Add = () => {
    const [data,setData]=useState(
        {
            "userid":"",
            "id":"",
            "title":"",
            "status":""
        }
    )
    const inputHandler =(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">User id</label>
                            <input type="text" className="form-control" name='userid' value={data.userid} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">id</label>
                            <input type="text" className="form-control" name='id' value={data.id} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">title</label>
                            <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">status</label>
                            <select name="status" id="" className="form-control" value={data.status} onChange={inputHandler}>
                                <option className="option">yes</option>
                                <option className="opt">No</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add