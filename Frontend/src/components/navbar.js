import { NavLink } from 'react-router-dom';
export default function Navbar() {
    return (
        <>
            <div className='nav'>
                <div className='navbar'>
                    <NavLink className="site-title" to='/'>TravelLog</NavLink>
                    <ul>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/login'>Login</NavLink>
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