import { NavLink } from 'react-router-dom';
export default function Navbar() {
    return (
        <>
            <div className='nav'>
                <div className='navbar'>
                    <div className="login-svg">
                    <NavLink to="/login"  >
                        <svg width="30" height="30"
                            x="0px" y="0px" viewBox="0 0 95 118.75" enableBackground="new 0 0 95 95" xmlSpace="preserve"><path d="M47.499,90.395c23.653,0,42.896-19.243,42.896-42.895S71.152,4.605,47.499,4.605C23.847,4.605,4.605,23.848,4.605,47.5  S23.847,90.395,47.499,90.395z M23.505,77.313c1.227-5.755,11.18-15.4,23.994-15.4s22.769,9.645,23.994,15.4  c-6.57,5.298-14.916,8.48-23.994,8.48S30.075,82.611,23.505,77.313z M47.499,9.207c21.115,0,38.295,17.178,38.295,38.293  c0,10.207-4.022,19.486-10.555,26.358c-2.416-5.874-9.057-11.822-17.33-14.723c6.298-3.62,10.552-10.411,10.552-18.181  c0-11.558-9.403-20.961-20.962-20.961c-11.558,0-20.96,9.403-20.96,20.961c0,7.77,4.254,14.561,10.551,18.181  c-8.273,2.901-14.915,8.849-17.33,14.723C13.228,66.985,9.206,57.707,9.206,47.5C9.206,26.385,26.385,9.207,47.499,9.207z   M47.499,57.312c-9.021,0-16.358-7.338-16.358-16.358c0-9.021,7.338-16.36,16.358-16.36c9.021,0,16.36,7.339,16.36,16.36  C63.859,49.974,56.521,57.312,47.499,57.312z" /></svg></NavLink></div>
                    <ul>
                    <NavLink className="site-title" to='/'>TravelLog</NavLink>

                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/create'>Get Started</NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </>
    )
}