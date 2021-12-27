import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { filterTasks } from '../redux/action';
import { deletetask } from '../redux/action';
import { showtask } from '../redux/action';
import { done } from '../redux/action';
import {EditTask} from '../redux/action';
const Listtask = () => {
          // Hooks
         const state = useSelector((state) => state.reducer);
         const [showedit, setshowedit] = useState(true);
         const[show,setshow]=useState("");
         const[edit,setedit]=useState(0);
         const [input, setinput] = useState();
        //  functions
         const dispatch = useDispatch();
         const Delete=(id)=>{
        dispatch(deletetask(id))
        alert("Task deleted")
                   }
        const ShowTask=(id)=>{
        dispatch(showtask(id))
        setshowedit(true)
        setedit(id)
                   }
        const Edit=(id,desc)=>{
        dispatch(EditTask(id,desc))
        setshowedit(false)}
        const Done=(id)=>{
        dispatch(done(id))
                   }
        const filter=(done)=>{
            dispatch(filterTasks(done));
                 setshow(done)
                     }
                   
                    return (
                        <div className=" row list">  
                            <div className="row d-flex">
                                <div className="col m-4">
                                <button className=" btn btn-light" style={{width:"30%"}} onClick={()=>setshow("")}>All Tasks</button>
                                </div>
                                    <div className="col m-4"><button className="btn btn-success" style={{width:"30%"}} onClick={()=>filter(true)}>Done Tasks</button>
                                    </div>
                                    <div className="col m-4"><button className="btn btn-danger" style={{width:"50%"}} onClick={()=>filter(false)}>Not done Tasks</button>
                                    </div>
                                    
                                </div>
                            { show ==="" ?(
                            <div className=" m-4 ">
                                <div className="div row">
                                     {/* list tasks */}
                                    {state.tasks.map((element,key)=>{
                                                return(
                                                    element.isDone===false ?(
                                                        <>
                                                        <div className='col d-flex tasklist' >
                                                            <div className='card m-2 p-2'  style={{backgroundColor:"#FF0005"}}>
                                                                <h3 className="color-black description m-2 " >{element.description}<i className="fas fa-exclamation-triangle m-2"></i></h3>
                                                                {/* edit task */}
                                                                {edit===element.id &&showedit===true   ?(
                                                                <div className='m-3  '  >
                                                                        {state.tasktoedit.map((element,key)=>{
                                                                                    return (
                                                                                    <div className=' d-flex'>
                                                                                            <input type="text" className='form-control m-2' defaultValue={element.description} placeholder="" onChange={event=>setinput(event.target.value)}></input>
                                                                                            <button className='btn btn-primary m-2' onClick={()=>Edit(element.id,input)}>Edit</button>
                                                                                    </div>
                                                                                    )
                                                                                })
                                                                        }
                                                                </div>
                                                                ):null}
                                                            </div>
                                                            <i className="fas fa-edit text-black "  onClick={()=>ShowTask(element.id)} id={element.id}>  </i>
                                                            <i class="fas fa-trash-alt" onClick={()=>Delete(element.id)}></i>
                                                            <i className="fas fa-check text-success"  onClick={()=>Done(element.id)}></i>
                                                        </div> 
                                                        </>      
                                                    ):
                                                        <div className='col d-flex tasklist' >
                                                            <div className='card m-2 p-2 ' style={{backgroundColor:"#A5CC89"}}>
                                                                <h3 className="color-black m-2" >{element.description}  <i class="fas fa-check text-white m-2"></i>  </h3>
                                                                    {/* edit task */}
                                                                    {edit===element.id &&showedit===true   ? (
                                                                        <div className='m-3  '  >
                                                                             {state.tasktoedit.map((element,key)=>{
                                                                                return (
                                                                                <div className=' d-flex'>
                                                                                   <input type="text" className='form-control m-2' defaultValue={element.description} placeholder="" onChange={event=>setinput(event.target.value)}></input>
                                                                                   <button className='btn btn-primary m-2' onClick={()=>Edit(element.id,input)}>Edit</button>
                                                                                </div>
                                                                                        )
                                                                                 }) 
                                                                                }
                                                                        </div>)
                                                                           :null}
                                                            </div>
                                                            <i className="fas fa-edit text-black "  onClick={()=>ShowTask(element.id)} id={element.id}>  </i>
                                                            <i class="fas fa-trash-alt" onClick={()=>Delete(element.id)}></i>
                                                            <i class="fas fa-times-circle text-danger" onClick={()=>Done(element.id)}></i>
                                                                
                                                        </div>
                                                )
                                            }) 
                                        }
                                        </div>

                            </div>)
                            //  Filter
                            //  isdone===false
                            : ( show===false ?
                                    <div>
                                        <div className=" row m-4">
                                            {state.tasks.filter(element=> element.isDone===false).map((element,key)=>{  
                                            return(
                                                <div className="col">
                                                        <div className="card m-4 "  draggable="true" style={{backgroundColor:"#FF0005",width:"350px", animationName: "slidein"}} >
                                                            <div className="card-header">
                                                            <h3>  You have to do<i class="far fa-grin-beam-sweat fs-4 m-2"></i>  </h3>
                                                            </div>
                                                            <div className="card-body ">
                                                            <h3 className="color-black m-1" >{element.description}</h3>
                                                            </div>
                                                        </div>
                                                        </div>
                                            )})}
                                        </div>  
                            </div>   
                            // filter isdone===true
                            : show===true?
                                <div className=" row m-4">
                                    {state.tasks.filter(element=>element.isDone===true).map((element,key)=>{
                                        return(
                                            <div className="col">
                                                <div className="card m-4 "  style={{backgroundColor:"#A5CC89",width:"350px"}} >
                                                    <div className="card-header ">
                                                        <h3> You've done: <i className="far fa-smile-wink fs-4  m-2"></i>  </h3>
                                                    </div>
                                                    <div className="card-body ">
                                                        <h3 className="color-black" >{element.description}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                                        )})}
                                </div>
                            :null)}        
                        </div>
                    );
                }

                export default Listtask;
