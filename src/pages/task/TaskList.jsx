import TaskItem from "./TaskItem";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import SignInIcon from "../../Icons/sign-solid";
import HomeIcon from "../../Icons/home-solid";
import {useNavigate} from "react-router-dom";

const axios = require('axios').default;


const TaskList = ({needReload,setNeedReload}) => {

    const [tasks, setTask] = useState([])

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:80/todo/read_all',
        })
            .then(function (response) {
                setTask(response.data.data)
                setNeedReload(false)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [needReload])

    return (
        <div className="task-list">
            <div className="task-list-h">
        <h2> Tasks</h2>
            </div>
            <div id="items">
                {tasks && tasks.length > 0 ? (
                    tasks.map((task) => (<TaskItem key={task.id} task={task} setNeedReload={setNeedReload}/>))
                ) : (
                    <pre>You have nothing to do.
                    Go get some sleep.</pre>
                )
                }
            </div>
        </div>
    )
}
export default TaskList
