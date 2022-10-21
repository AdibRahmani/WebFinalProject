import {useState} from "react";
import {useNavigate} from 'react-router-dom'
import TaskList from "../task/TaskList";
import SignInIcon from "../../Icons/sign-solid";
import {useSelector} from "react-redux";


const axios = require('axios').default;

const HomePage = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [needReload, setNeedReload] = useState(false)
    const navigate = useNavigate()

    const person = useSelector((state) =>
        state.person
    )


    const onSubmit = (e) => {
        e.preventDefault()
        console.log("title" + title);
        console.log("description" + description);

        if (!title) {
            alert('please add title')
            return
        }

        let formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('status', 'ToDo');
        axios({
            method: 'post',
            url: 'http://localhost:80/todo/create',
            data: formData
        })
            .then(function (response) {
                console.log(response);
                setNeedReload(true)
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                setTitle('')
                setDescription('')
            });

    }

    return (
        <div id="home-page">
            <button
                type='button'
                className='home-btn'
                onClick={() => navigate('/login')}
            >
                <SignInIcon/>
            </button>
            { person ==='user'? (
                <>
                <div className='t-head'>
                    <div className="title-h">
                        <h2>Home</h2>
                    </div>

                </div>
                <div id="add-task">
                <h3>Add a new Task</h3>
                <form onSubmit={onSubmit}>
                <input type='text' placeholder='Title' className="task-details" value={title}
                onChange={(e) => setTitle(e.target.value)}/>
                <input type='text' placeholder='Description' className="task-details" value={description}
                onChange={(e) => setDescription(e.target.value)}/>
                <input type="submit" value="Add" id="submit"/>
                </form>
                </div>
                </>
                ):(<></>)
            }
            <TaskList needReload={needReload} setNeedReload={setNeedReload}/>
        </div>
    )
}
export default HomePage