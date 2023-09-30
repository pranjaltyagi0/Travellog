// import React from "react";
// // import styles from './signup.module.css'
// import styles from './Auth.module.css'; // Import the shared styles module

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// const SignUp = () => {
//     const [username, setusername] = useState('');
//     const [password, setpassword] = useState('');
//     const [email, setemail] = useState('');
//     const [isValid,setisValid] = useState(true);
//     const navigate = useNavigate();
//     const handleSubmit = (e) => {
//         console.log("Submit clicked")
//         e.preventDefault();
//         const data = fetch('http://localhost:5000/api/signup', {
//             method: 'POST',
//             headers: {
//                 'Content-type': 'application/json'
//             },
//             body: JSON.stringify({
//                 username: username,
//                 email: email,
//                 password: password
//             })
//         }).then((res) => {
//             if (res.ok) {
//                 return res.json();
//             }else{
//                 res.json();
//             }
//         }).then((data)=>{
//             console.log("second then");
//             if (data && data.goodtogo) {
//                 setisValid(true)
//                 console.log(data.userId);
//                 localStorage.setItem('userId',data.userId)
//                 console.log(data);
//                 navigate("/");
//             } else {
//                 setisValid(false);
//             }
//         })
//         .catch((error) => {
//             // Handle any network errors or server errors here
//             console.error('Error:', error);
//         });
  
//     }
//     return (
//     <>
//         <div className={styles["styles-main"]}>
//             <form className='form' onSubmit={handleSubmit}>
//                 {/* <label className='Email-label'>Email */}
//                     <input type='email' value={email} placeholder=' Email' onChange={(e) => setemail(e.target.value)}></input>
//                     {/* </label> */}
//                 <br />
//                 {/* <label className='Username-label'>Username */}
//                     <input type='Text' value={username} placeholder=' Username' onChange={(e) => setusername(e.target.value)}></input>
//                     {/* </label> */}
//                 <br />
//                 {/* <label className='Password-label'>Password */}
//                     <input type='Password' value={password} placeholder=' Password' onChange={(e) => setpassword(e.target.value)}></input>
//                 <div>
//                     <button type='submit'>Submit</button>
//                 </div>
//             </form>
//             {!isValid&& <div className={styles.valid}>Username or email already exist</div>}
//         </div>
//         <div>Don't have an account?
//             <button  type="button" ><Link style={{ textDecoration: 'None' }} to='/login'>Login</Link></button>
//         </div>
//     </>
//     )
// }
// export default SignUp;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Auth.module.css';

const SignUp = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [email, setemail] = useState('');
  const [isValid, setisValid] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

    const data = fetch(backendUrl+'/api/signup', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          res.json();
        }
      })
      .then((data) => {
        if (data && data.goodtogo) {
          setisValid(true);
          console.log(data.userId);
          localStorage.setItem('userId', data.userId);
          console.log(data);
          navigate('/');
        } else {
          setisValid(false);
        }
      })
      .catch((error) => {
        // Handle any network errors or server errors here
        console.error('Error:', error);
      });
  };

  return (
    <>
      <div className={styles['auth-container']}>
        <form className={styles['auth-form']} onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setemail(e.target.value)}
          />
          <br />
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setusername(e.target.value)}
          />
          <br />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <div>
            <button className={styles['auth-button']} type="submit">
              Submit
            </button>
          </div>
        </form>
        {!isValid && <div className={styles['auth-valid']}>Username or email already exist</div>}
        
        {/* Move the Login button to a separate div */}
        <div className={styles['auth-login-button']}>
          <div className={styles['auth-signup-text']}>Don't have an account?</div>
          <button className={styles['auth-signup-button']}>
            <Link style={{ textDecoration: 'none', color: '#fff' }} to="/login">
              Login
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
