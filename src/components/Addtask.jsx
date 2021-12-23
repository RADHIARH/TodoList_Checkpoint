import React from 'react';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask } from '../redux/action';
import { useHistory } from 'react-router-dom';

const Addtask = () => {
        const [input,setinput]=useState();
        const dispatch = useDispatch();
        const history = useHistory();
        const add=(desc)=>{
        dispatch(addTask(desc));   
        
           history.push("/listtasks");
    }
    return (
    <div className="addtask">
        <div className="card">
            <div className="card-header text-center">
                     <h3 className='text-white'>TO DO LIST</h3>
            </div>
            <div className="card-body">
                <div className="form-group ">
                   <label htmlFor="task" className='text-white'>
                                 Add a task to do
                    </label>                         
                    <input 
                    className="form-control mt-4"
                    id="task"
                    value={input}
                    onChange={event=>setinput(event.target.value)}
                         />
                    <button type="submit" className=" btn btn-primary  btn-block mt-5  " onClick={()=>{add(input)}} >Add to do list
                    </button>    
                </div>         
            </div>
        </div>
    </div>
    );
}
export default Addtask;
