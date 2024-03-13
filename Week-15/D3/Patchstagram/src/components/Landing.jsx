import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { getAllUsers, loginUser } from "../store/usersReducer"
import "./Landing.css"
// import { users as seedUsers } from "../data"

export default function Landing(){
    const [ user, setUser ] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const users = useSelector(state => state.usersState.users)


    useEffect( () => {
        dispatch(getAllUsers())
    }, [dispatch])

    const handleSubmit = (e) => {
        e.preventDefault()
        const selectedUser = users.find( person => person.username === user )
        dispatch(loginUser(selectedUser))
        setUser("")
        navigate("/posts")
    }
    return (
        <div className="landing-container">
            <h1 className="landing-title">Welcome to Patchstagram!</h1>
            <img 
                style={
                    { height: "300px" }
                } 
                src="https://res.cloudinary.com/app-academy4/image/upload/v1647291502/Patchstagram/patch_hd_riobbp.png" 
                alt="cute-kitty-image"
            />
            <p className="landing-subtitle">The cat with so much to talk about, he needs his own social media site!</p>
            <form onSubmit={ (e) => handleSubmit(e) }>
            <div>
                    <label htmlFor="user">User:</label>
                    <select
                        name='user'
                        onChange={e => setUser(e.target.value)}
                        value={ user }
                    >
                        <option value='' disabled>
                            Select an user...
                        </option>
                        { users.map((user ) => (
                            <option key={ user.id }>
                                { user.username }
                            </option>
                        ))}
                    </select>
                </div>
                
                <button
                    className="landing-button"
                >
                    Enter Site
                </button>

            </form>
            
        </div>
    )
}