// import { React, useState } from 'react';
// import './Login.css'
// import Navbar from '../components/navbar';
// function Login() {
//     const [username, setusername] = useState('');
//     const [password, setpassword] = useState('');
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const Logindata = {
//             username: username,
//             password: password,
//         }
//         fetch('http://localhost:5000/login', {
//             method: 'POST',
//             headers: {
//                 'Content-type': 'application/json',
//             },
//             body: JSON.stringify({
//                 Logindata,
//             })
//         })
//     }

//     function handleUsername(event) {
//         setusername(event.target.value);
//     }
//     const handlePassword = (event) => {
//         setpassword(event.target.value);
//     }
//     return (
//         <>
//             <Navbar />
//             <div className='outer-box'>
//                 <div className="innerbox-main">
//                     <h1 class='main-heading'>Sign In</h1>

//                     <form className="formclass" onSubmit={handleSubmit}>
//                         <div className='Username-heading'>
//                             <label>Username/Email</label>
//                             <input type="text" value={username} placeholder='Username/Email' onChange={handleUsername}></input>
//                         </div>
//                         <div>
//                             <label>Password</label>
//                             <input type='text' value={password} placeholder='Password' onChange={handlePassword}></input>
//                         </div>
//                         <div>
//                             <input type="Submit"></input>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default Login;
import React, { useEffect } from 'react';
import { useState } from 'react';
import {Link, NavLink,useNavigate} from 'react-router-dom'
import './Login.css'
function Login() {
    const [username,setusername] = useState('');
    const [password,setpassword] = useState('');
    const navigate =  useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();

        const data = fetch('http://localhost:5000/api/login',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify({
                username:username,
                password:password
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
  
        console.log(data);
        console.log(username);
        console.log(password);

    }
    return (
        <>
            <div className='form-container'>
                <form className='form' onSubmit={handleSubmit}>
                    <label className='Username-label'>Username
                        <input className="form-input" type='Text' value={username} placeholder=' Username' onChange={(e)=> setusername(e.target.value)}></input></label>
                    <br />
                    {/* <label className='Password-label'>Password */}
                        <input className="form-input" type='Password' value={password} placeholder=' Password' onChange={(e)=> setpassword(e.target.value)}></input>
                        {/* </label> */}
                        <div>
                    <button type='submit' className="form-button">Submit</button>
                    </div>
                </form>
            </div>
            
            <div>Don't have an account? 
                <p>
            <button type="button" ><Link className="redirectbutton" style={{textDecoration:'None'}}  to ='/signup'>SignUp</Link></button>
            </p>
            </div>
        </>
    )
}
export default Login;