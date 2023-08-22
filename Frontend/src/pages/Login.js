import { React, useState } from 'react';
import './Login.css'
import Navbar from '../components/navbar';
function Login() {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        const Logindata = {
            username: username,
            password: password,
        }
        console.log(Logindata);
    }
    function handleUsername(event) {
        setusername(event.target.value);
    }
    const handlePassword = (event) => {
        setpassword(event.target.value);
    }
    return (
        <>  
            <Navbar />
            <div className='outer-box'>
                <div className="innerbox-main">
                    <h1 class='main-heading'>Sign In</h1>

                    <form className="formclass" onSubmit={handleSubmit}>
                        <div className='Username-heading'>
                            <label>Username</label>
                            <input type="text" value={username} placeholder='Username/Email' onChange={handleUsername}></input>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type='text' value={password} placeholder='Password' onChange={handlePassword}></input>
                        </div>
                        <div>
                            <input type="Submit"></input>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login;