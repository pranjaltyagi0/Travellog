import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Auth.module.css';
import Navbar from '../components/navbar';

function Login() {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [isValid, setisValid] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
    fetch(backendUrl + "/api/login", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json();
        }
      })
      .then((data) => {
        if (data && data.goodtogo) {
          setisValid(true);
          localStorage.setItem('userId', data.userId);
          console.log(data);
          navigate('/');
        } else {
          setisValid(false);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    // <div className={styles['auth-container']}>
    //   <div className={styles['auth-main']}>
    //     <form className={styles['auth-form']} onSubmit={handleSubmit}>
    //       <input
    //         type="text"
    //         value={username}
    //         placeholder="Username"
    //         onChange={(e) => setusername(e.target.value)}
    //       />
    //       <br />
    //       <input
    //         type="password"
    //         value={password}
    //         placeholder="Password"
    //         onChange={(e) => setpassword(e.target.value)}
    //       />
    //       <div>
    //         <button className={styles['auth-button']} type="submit">
    //           Submit
    //         </button>
    //       </div>
    //     </form>
    //     {!isValid && <div className={styles['auth-valid']}>Invalid Username or password</div>}
    //   </div>
    //   <div>
    //     <div className={styles['auth-signup-text']}>Don't have an account?</div>
    //     <button className={styles['auth-signup-button']}>
    //       <Link style={{ textDecoration: 'none', color: '#fff' }} to="/signup">
    //         SignUp
    //       </Link>
    //     </button>
    //   </div>
    // </div>

    <div className='login'>

      <Navbar />

      <div className='login-container'>

        <div className='login-box'>

          <div className='signin-head'> Sign in</div>
          <form className='login-form' onSubmit={handleSubmit}>
            <input
              type="text"
              value={username}
              placeholder="Username"
              onChange={(e) => setusername(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setpassword(e.target.value)}
            />
            {/* <div> */}
            <button className='submit-btn' type="submit">
              Submit
            </button>
            {/* </div> */}
          </form>
          {!isValid && <div className='login-error'>Invalid Username or password</div>}
          <div className='signup-box '>
          <div className='dont'>Don't have an account?</div>
          <Link style={{ textDecoration: 'none', color: '#fff' }} to="/signup">
            <button className='signup-btn'>
              SignUp
            </button>
          </Link>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Login;
