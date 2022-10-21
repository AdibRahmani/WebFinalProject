import {BrowserRouter as ReactRouter, Route, Routes} from 'react-router-dom'

import React from 'react'

import HomePage from '../pages/home/HomePage'
import Login from '../pages/login/Login'
import TaskList from '../pages/task/TaskList'
import EditTask from '../pages/task/EditTask'

const Router = () => {
    return (
        <ReactRouter>
            <Routes>
                <Route path='/homePage' element={<HomePage/>}/>
                <Route path='/taskList' element={<TaskList/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/editTask' element={<EditTask/>}/>
            </Routes>
        </ReactRouter>

    )
}
export default Router
