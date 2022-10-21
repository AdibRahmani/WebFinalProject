import {useLocation, useNavigate} from "react-router-dom";
import React, {useState} from 'react'
// import { taskEdited } from '../redux/action/actions'
import * as states from '../../utils/stateTypes'
import EditIcon from "../../Icons/edit-solid";
import axios from "axios";
import {useSelector} from "react-redux";


const EditTask = () => {
    const {person} = useSelector((state) => ({
        person: state.person,
    }))

    const location = useLocation()
    console.log(person)
    const [title, setTitle] = useState(location.state.title)
    const [description, setDescription] = useState(location.state.description)
    const [status, setStatus] = useState(location.state.status)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title && description) {
            let formData = new FormData();
            formData.append('task_id', location.state.id);
            formData.append('task_title', title);
            formData.append('task_description', description);
            formData.append('task_status', status);

            axios({
                method: 'post',
                url: 'http://localhost:80/todo/update',
                // param:{'id':location.state.id},
                data: formData
            })
                .then(function (response) {
                    console.log(response);
                    navigate('/taskList')
                })
                .catch(function (error) {
                    console.log(error);
                })
        } else {
            alert('Please fill in the blanks!')
        }
    }

    let handleState = () => {
        console.log(location.state.status)
        switch (location.state.status) {
            case states.TODO:
                return (
                    <>
                        <option value='ToDo'>ToDo</option>
                        <option value='InProgress'>InProgress</option>
                    </>
                )
            case states.INPROGRESS:
                return (
                    <>
                        <option value='InProgress'>InProgress</option>
                        <option value='InQA'>InQA</option>
                        <option value='Blocked'>Blocked</option>
                    </>
                )
            case states.BLOCKED:
                return (
                    <>
                        <option value='Blocked'>Blocked</option>
                        <option value='ToDo'>ToDo</option>
                    </>
                )
            case states.INQA:
                return (
                    <>
                        <option value='InQA'>InQA</option>
                        <option value='Done'>Done</option>
                        <option value='ToDo'>ToDo</option>
                    </>
                )
            case states.DONE:
                return (
                    <>
                        <option value='Done'>Done</option>
                        <option value='Deployed'>Deployed</option>
                    </>
                )
            case states.DEPLOYED:
                return (
                    <>
                        <option value='Deployed'>Deployed</option>
                    </>
                )
            default:
                return <></>
        }
    }

    return (
        <>
            <div className='t-head'>
                <div className="title-h">
                    <h2>Edit Tasks</h2>
                </div>
            </div>
            {/*<p className='task-text'>Edit Task</p>*/}
            <form className='form' onSubmit={(e) => handleSubmit(e)}>
                {person === 'user' ? (
                    <>
                        <div className='title-container'>
                            <input
                                type='text'
                                className='title'
                                placeholder='Title'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                disabled
                            />
                        </div>
                        <div className='eDesc-container'>
                            <input
                                type='text'
                                className='e-desc'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                disabled
                            />
                        </div>
                        <div className='select-st'>
                            <select
                                id='states'
                                name='states'
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                {handleState()}
                            </select>
                        </div>
                    </>
                ) : (
                    <>
                        <div className='title-container'>
                            <input
                                type='text'
                                className='title'
                                placeholder='Title'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className='eDesc-container'>
                            <input
                                type='text'
                                className='e-desc'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className='select-st'>
                            <select id='states' name='states' value={status} disabled>
                                <option value='ToDo'>{location.state.status}</option>
                            </select>
                        </div>
                    </>
                )}

                <button
                    type='submit' className='edit-btn'>
                    <EditIcon fill='white'/>
                    Edit
                </button>
                <button
                    type='button '
                    className='cancel-btn'
                    onClick={() => navigate('/taskList')}
                >
                    Cancel
                </button>
            </form>
        </>
    )
}

export default EditTask