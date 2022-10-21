import axios from "axios";
import EditIcon from "../../Icons/edit-solid";
import TrashIcon from "../../Icons/trash-solid";
import {useNavigate} from 'react-router-dom'
import {useSelector} from "react-redux";


const TaskItem = ({task, setNeedReload}) => {
    const person = useSelector((state)=>
        state.person
    )

    console.log(person)
    const navigate= useNavigate()
    const handleDelete= () => {
        let formData = new FormData();
        formData.append('id',task.id);

        axios({
            method: 'post',
            url: 'http://localhost:80/todo/delete',
            data: formData
        })
            .then(function (response) {
                console.log(response);
                setNeedReload(true)
                navigate('/taskList')
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <div className='grid-item'>
            <div className='td-inner'>
                <p className='tasks-title'>{task.title}</p>
                <p className='tasks-desc'>{task.description}</p>
                <div className='tasks-status'>
                    <p>{task.status}</p>
                </div>
                {person === 'user' ? (
                    <button
                        className='edit-icon'
                        type='button'
                        onClick={() =>
                            navigate('/editTask', {
                                state: {
                                    id: task.id,
                                    title: task.title,
                                    description: task.description,
                                    status: task.status,
                                },
                            })
                        }
                    >
                        <EditIcon fill='black' />
                    </button>
                ) : (
                    <>
                        <button
                            className='edit-icon'
                            type='button'
                            onClick={() =>
                                navigate('/editTask', {
                                    state: {
                                        id: task.id,
                                        title: task.title,
                                        description: task.description,
                                        status: task.status,
                                    },
                                })
                            }
                        >
                            <EditIcon fill='black' />
                        </button>
                        <button
                            className='delete-icon'
                            type='button'
                            onClick={(e) => handleDelete(e)}
                        >
                            <TrashIcon fill='black' />
                        </button>
                    </>
                )}
            </div>
        </div>
    )







    //
    // return(
    //     <div className="task">
    //         <h3>
    //             {task.title}
    //         </h3>
    //         <p>{task.description}</p>
    //         <p>{task.status}</p>
    //     </div>
    //
    // )
}
export default TaskItem
