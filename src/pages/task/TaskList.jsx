import TaskItem from "./TaskItem";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

const axios = require('axios').default;


const TaskList = () => {
    const person = useSelector((state) =>
        state.person
    )

    const [tasks, setTask] = useState([])
    const [needReload, setNeedReload] = useState(false)

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

            <div className='t-head'>
                <span>Tasks</span>
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
