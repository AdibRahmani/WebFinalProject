import {useState} from "react";
import {useNavigate} from 'react-router-dom'


const axios = require('axios').default;

const HomePage = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        console.log("title"+ title);
        console.log("description"+ description);

        if(!title){
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
                navigate('/taskList')
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                setTitle('')
                setDescription('')
            });

    }

    return(
        <div id="add-task">
            <h3>Add a new Task</h3>
            <form onSubmit={onSubmit}>
                <input type='text' placeholder='Title' className="task-details" onChange={(e) => setTitle(e.target.value)}/>
                <input type='text' placeholder='Description' className="task-details" onChange={(e) => setDescription(e.target.value)}/>
                <input type="submit" value="Add" id="submit"/>
            </form>
        </div>
    )
}
export default HomePage