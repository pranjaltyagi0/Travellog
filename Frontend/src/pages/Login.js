// import React, { useEffect } from 'react';
// import { useState } from 'react';
// import { Link, NavLink, useNavigate } from 'react-router-dom'
// // import styles from './signup.module.css'
// import styles from './Auth.module.css'; // Import the shared styles module

// function Login() {
//     const [username, setusername] = useState('');
//     const [password, setpassword] = useState('');
//     const [isValid, setisValid] = useState(true);
//     const navigate = useNavigate();
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const data = fetch('http://localhost:5000/api/login', {
//             method: 'POST',
//             headers: {
//                 'Content-type': 'application/json'
//             },
//             body: JSON.stringify({
//                 username: username,
//                 password: password
//             })
//         }).then((res) => {
//             if (res.ok) {
//                 return res.json();
//             } else {
//                 res.json();
//             }
//         }).then((data) => {
//             if (data && data.goodtogo) {
//                 setisValid(true);
//                 localStorage.setItem('userId', data.userId)
//                 console.log(data);
//                 navigate("/");

//             } else {
//                 setisValid(false);
//             }
//         })
//             .catch((error) => {
//                 console.error('Error:', error);
//             });

//     }
//     return (
//         <>
//             {/* <div className={styles.container}> */}

//                 <div className={styles.main}>
//                     {/* Apply CSS class */}
//                     <form className='form' onSubmit={handleSubmit}>
//                         {/* <label className='Username-label'>Username */}
//                         <input type='Text' value={username} placeholder=' Username' onChange={(e) => setusername(e.target.value)}></input>
//                         {/* </label> */}
//                         <br />
//                         <input type='Password' value={password} placeholder=' Password' onChange={(e) => setpassword(e.target.value)}></input>
//                         <div>
//                             <button type='submit'>Submit</button>
//                         </div>
//                     </form>
//                     {!isValid && <div className={styles.valid}>Invalid Username or password</div>}
//                 </div>

//                 <div>Don't have an account?
//                 <button className={styles['signup-button']}><Link style={{ textDecoration: 'none', color: '#fff' }} to='/signup'>SignUp</Link></button>
//                 </div>
//         </>
//     )
// }
// export default Login;
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import styles from './Login.module.css';

// function Login() {
//   const [username, setusername] = useState('');
//   const [password, setpassword] = useState('');
//   const [isValid, setisValid] = useState(true);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const data = fetch('http://localhost:5000/api/login', {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json'
//       },
//       body: JSON.stringify({
//         username: username,
//         password: password
//       })
//     })
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         } else {
//           res.json();
//         }
//       })
//       .then((data) => {
//         if (data && data.goodtogo) {
//           setisValid(true);
//           localStorage.setItem('userId', data.userId);
//           console.log(data);
//           navigate('/');
//         } else {
//           setisValid(false);
//         }
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.main}>
//         <form className="form" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             value={username}
//             placeholder="Username"
//             onChange={(e) => setusername(e.target.value)}
//           />
//           <br />
//           <input
//             type="password"
//             value={password}
//             placeholder="Password"
//             onChange={(e) => setpassword(e.target.value)}
//           />
//           <div>
//             <button type="submit">Submit</button>
//           </div>
//         </form>
//         {!isValid && <div className={styles.valid}>Invalid Username or password</div>}
//       </div>
//       <div className={styles['signup-container']}>
//         <div className={styles['signup-text']}>Don't have an account?</div>
//         <button className={styles['signup-button']}>
//           <Link style={{ textDecoration: 'none', color: '#fff' }} to="/signup">
//             SignUp
//           </Link>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Login;
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

    const data = fetch('http://localhost:5000/api/login', {
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
          res.json();
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
