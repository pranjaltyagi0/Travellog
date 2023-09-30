import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Auth.module.css';

function Login() {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [isValid, setisValid] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
    const data = fetch(backendUrl+"/api/login", {
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
    <div className={styles['auth-container']}>
      <div className={styles['auth-main']}>
        <form className={styles['auth-form']} onSubmit={handleSubmit}>
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
        {!isValid && <div className={styles['auth-valid']}>Invalid Username or password</div>}
      </div>
      <div>
        <div className={styles['auth-signup-text']}>Don't have an account?</div>
        <button className={styles['auth-signup-button']}>
          <Link style={{ textDecoration: 'none', color: '#fff' }} to="/signup">
            SignUp
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Login;
