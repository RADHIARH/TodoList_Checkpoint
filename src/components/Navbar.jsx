import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {
            const state = useSelector((state) => state.reducer);
             const task=localStorage.getItem("state");
         const taskobj=JSON.parse(task)
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand-lg ">
                 <div className="container-fluid">
                     <a className="navbar-brand" href="/">TODO LIST</a>
                       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                       </button>
                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <NavLink className="nav-link fs-6 text-black" to="/addtask"> 
                                Add Task
                              </NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink className="nav-link fs-6 text-black" to="/listtasks"> 
                                List Tasks
                                ({state.tasks.length})
                              </NavLink>
                          </li>  
                        </ul>
                    </div>
                 </div>
             </nav>
        </div>
    );
}

export default Navbar;
