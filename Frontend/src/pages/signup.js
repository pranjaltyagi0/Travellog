import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import './authentication.css'
import { Link } from "react-router-dom";

const SignUp = () => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [email, setemail] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {

        e.preventDefault();
        const data = fetch('http://localhost:5000/api/signup', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }else{
                res.json();
                console.log("Res part"+res);
            }
        }).then((data)=>{
            if (data && data.goodtogo) {
                navigate("/");
            } else {

                console.log("data");
                console.log(data.goodtogo);
            }
        })
        .catch((error) => {
            // Handle any network errors or server errors here
            console.error('Error:', error);
        });
  
    }
    return (<>
        <div className="outer-box">
            <form className='form' onSubmit={handleSubmit}>
                <label className='Email-label'>Email
                    <input type='email' value={email} placeholder=' Email' onChange={(e) => setemail(e.target.value)}></input></label>
                <br />
                <label className='Username-label'>Username
                    <input type='Text' value={username} placeholder=' Username' onChange={(e) => setusername(e.target.value)}></input></label>
                <br />
                <label className='Password-label'>Password
                    <input type='Password' value={password} placeholder=' Password' onChange={(e) => setpassword(e.target.value)}></input></label>
                <div>
                    <button type='submit'>Submit</button>

                </div>
            </form>
        </div>
        <div>Don't have an account?
            <button type="button" ><Link style={{ textDecoration: 'None' }} to='/login'>Login</Link></button>
        </div>
    </>
    )
}
export default SignUp;