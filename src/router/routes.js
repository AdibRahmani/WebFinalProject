import HomePage from '../pages/HomePage'
import Login from '../pages/Login'
import TaskList from '../pages/task/TaskList'

const routes = [
  {
    component: HomePage,
    path: '/homePage',
  },
  {
    component: Login,
    path: '/Login',
  },
  {
    component: TaskList,
    path: '/taskList',
  },
]
export default routes
