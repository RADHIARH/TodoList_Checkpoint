import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { EditTask } from '../redux/action';
import { useState } from 'react';
const Edittask = () => {
       const state = useSelector((state) => state.reducer);
         const history = useHistory();
        const [input, setinput] = useState();
       const dispatch=useDispatch();
       const Edit=(id,desc)=>{
        dispatch(EditTask(id,desc))
        history.push("/listtasks");
       }
    return (
        <div className='edit col-md-5 offset-md-4'>
            <h3 className='m-4'>Edit Task</h3>
            {state.tasktoedit.map((element,key)=>{
               
                return (
                     <div className='d-flex'>
                <input type="text" className='form-control m-2' value={input} placeholder={element.description} onChange={event=>setinput(event.target.value)}></input>
               <button className='btn btn-primary m-2' onClick={()=>Edit(element.id,input)}>Edit</button>
                </div>
                )
            })
           
}

        </div>
    );
}

export default Edittask;

