import {useState} from "react";
import {useDispatch} from "react-redux";
import {adminLogin, userLogin} from "../../redux/action/actions";
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [user, setUser] = useState('admin')
    const handleLogIn = (e) => {
        e.preventDefault()
        console.log(user)
        if (user === 'admin') {
            console.log('admin')
            dispatch(adminLogin())
            navigate('/homePage')
        } else {
            console.log('user')
            dispatch(userLogin())
            navigate('/homePage')
        }
    }

    return (
        <form className='login-form' onSubmit={(e) => {
            handleLogIn(e)
        }}>
            <div className='select-container'>
                <select onChange={(e) => setUser(e.target.value)}>
                    <option value='admin'>Admin</option>
                    <option value='user'>User</option>
                </select>
            </div>
            <button className='login-btn' type='submit'>
                Login
            </button>
        </form>
    )
}

export default Login