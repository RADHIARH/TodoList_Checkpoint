import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { filterTasks } from '../redux/action';
import { deletetask } from '../redux/action';
import { showtask } from '../redux/action';
import { useHistory } from "react-router-dom";
import { done } from '../redux/action';
const Listtask = () => {
         const state = useSelector((state) => state.reducer);
         const state1=useSelector((state)=>state.FilterReducer)
         const [checked, setchecked] = useState();
         const dispatch = useDispatch();
         const history = useHistory();
         const task=localStorage.getItem("state");
         const taskobj=JSON.parse(task)
        const Delete=(id)=>{
        dispatch(deletetask(id))
                   }
        const ShowTask=(id)=>{
        dispatch(showtask(id))
         history.push("/edit");
                   }
        const Done=(id)=>{
        dispatch(done(id))
                   }
        
        const filter=(done)=>{
            dispatch(filterTasks(done));

                     }
    return (
        <div className=" row list">  
             <div className="col tasklist  ">
                  <h3 className=" m-4 text-black">Tasks List</h3>
                      {state.tasks.map((element,key)=>{
                                 return(
                                    element.isDone===false ?(
                                        <div className='d-flex' >
                                             <div className='card m-2 p-2'  style={{backgroundColor:"#FF0005"}}>
                                                 <h3 className="color-black description m-2 " >{element.description}<i className="fas fa-exclamation-triangle m-2"></i></h3>
                                                 </div>
                                                 <i className="fas fa-check text-black"  onClick={()=>Done(element.id)}></i>
                                                 <i className="fas fa-edit text-black "  onClick={()=>ShowTask(element.id)} id={element.id}>  </i>
                                                 <i className="fas fa-times text-black" onClick={()=>Delete(element.id)}> </i>
                                           </div> 
                                  ):
                                                 <div className='d-flex' >
                                             <div className='card m-2 p-2 ' style={{backgroundColor:"#A5CC89"}}>
                                                 <h3 className="color-black m-2" >{element.description}  <i class="fas fa-check text-white m-2"></i>  </h3>
                                                 
                                                 </div>
                                                 
                                                 <i className="fas fa-edit text-black "  onClick={()=>ShowTask(element.id)} id={element.id}>  </i>
                                                 <i className="fas fa-times text-black" onClick={()=>Delete(element.id)}> </i>
                                           </div>
                                 )
                             })
                         }
             </div>
                                 
            <div className="col searchtask ">
                 <h3  className="mb-4">Filter Tasks</h3>
                             {/* Dropdown */}
                        <div className=" d-flex">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value={checked} onChange={()=>setchecked(true)} id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Done
                                 </label>
                            </div>
                            <div className="form-check done">
                                <input className="form-check-input" type="checkbox" value={checked}  onChange={()=>setchecked(false)} id="flexCheckChecked" />
                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                                        Not Done
                                    </label>
                            </div>
                            <button className="btn btn-secondary  filter"   onClick={()=>filter(checked)} type="button"  >
                                    Filter Tasks
                            </button>
                            <h3 className='text-red'>{checked}</h3>
                        </div>
                        <div className="m-4">
                            {state1.filter.map((element,key)=>{
                             return(
                                  element.isDone===false ?(
                                        <div className="card m-4  "  style={{backgroundColor:"#FF0005"}} >
                                            <div className="card-header">
                                             <h3>  You have to do<i class="far fa-grin-beam-sweat fs-4 m-2"></i>  </h3>
                                            </div>
                                            <div className="card-body ">
                                             <h3 className="color-black m-1" >{element.description}</h3>
                                            </div>
                                        </div>):
                                       <div className="card m-4 "  style={{backgroundColor:"#A5CC89"}} >
                                             <div className="card-header ">
                                                  <h3> You've done: <i className="far fa-smile-wink fs-4  m-2"></i>  </h3>
                                            </div>
                                             <div className="card-body ">
                                             <h3 className="color-black" >{element.description}</h3>
                                             </div>
                                        </div>
                             )})}
                        </div>     
            </div>              
       </div>
    );
}

export default Listtask;
