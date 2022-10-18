import { BrowserRouter as ReactRouter, Routes, Route } from 'react-router-dom'

import React from 'react'

import HomePage from '../pages/HomePage'
import Login from '../pages/Login'
import TaskList from '../pages/task/TaskList'
import EditTask from '../pages/task/EditTask'
// import HistoryPage from '../pages/HistoryPage'

const Router = (path) => {
  return (
    <ReactRouter>
      <Routes>
        <Route path='/homePage' element={<HomePage />} />
        <Route path='/taskList' element={<TaskList />} />
        <Route path='/login' element={<Login />} />
        <Route path='/editTask' element={<EditTask />} />
          {/*<Route path='/historyPage' element={<HistoryPage />} />*/}
      </Routes>
    </ReactRouter>

  )
}
export default Router
