import { Outlet, NavLink } from 'react-router-dom'
import "./Layout.css"
import { useThemeContext } from '../context/ThemeContext'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Navigate } from 'react-router-dom'
import { logoutUser } from '../store/userReducer'
import Switch from '../components/Switch'


export default function Layout() {
    const currentUser = useSelector(state => state.userState.sessionUser)
    const { theme } = useThemeContext()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logoutUser())
        console.log("dispatched logout")
        navigate("/")
    }

    return (
        <div>
            <nav className={`navbar-links-container ${theme}`}>
                <div className='navbar-subcontainer'>
                    <img
                        className='navbar-logo'
                        src="https://res.cloudinary.com/app-academy4/image/upload/v1647291502/Patchstagram/patch_hd_riobbp.png"
                        alt="cute-kitty-image"
                    />
                    <h2 className='navbar-title'>Patchstagram</h2>
                </div>
                <NavLink to="/"> Home </NavLink>
                <NavLink to="/posts"> Feed </NavLink>
                <NavLink to="/new"> New Post </NavLink>
                <div className="navbar-user-info">
                    <span>Current user:</span>
                    { currentUser 
                        ? <span>{ currentUser.username }</span> 
                        : <Navigate to="/" replace={true} />
                    }
                </div>
                <button 
                    onClick={ handleLogout }
                    className='navbar-logout-button'
                >
                    Logout
                </button>
                <Switch />
            </nav>
            <Outlet />
        </div>
    )
}