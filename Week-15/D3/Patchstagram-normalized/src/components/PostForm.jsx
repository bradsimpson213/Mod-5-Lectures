import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import postData, { users } from "../data"
// import { usePostsContext } from '../context/PostsContext'
import { useDispatch, useSelector } from "react-redux"
import { createPost } from '../store/postsReducer'


export default function PostForm() {
    // const { posts, setPosts } = usePostsContext()
    // const posts = useSelector(state => state.postsState.posts)
    const users = useSelector(state => state.usersState.users)
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [author, setAuthor] = useState("")
    const [validationErrors, setValidationErrors] = useState({})
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    

    useEffect(() => {
        const errors = {};
        if (!title.length) errors.title = "Please enter a post title!"
        if (!image.length) errors.image = "Please provide an image!"
        setValidationErrors(errors)
    }, [title, image])


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('we submitted!')
        setHasSubmitted(true)

        if (Object.values(validationErrors).length) 
        return alert(`The following errors were found:
        
          ${validationErrors.title ? "* " + validationErrors.title : ""}
          ${validationErrors.image ? "* " + validationErrors.image : ""}`)

        const selectedUser = users.find( user => user.username === author )
        console.log(selectedUser)

        // const randomLikes = Math.floor(Math.random() * 10)
        
        const newPost = {
            title,
            image,
            author: selectedUser.id,
        }
        console.log(newPost)
        // // postData.push(newPost)
        // setPosts([ ...posts, newPost ])
        // set state back to old
        const response = await dispatch(createPost(newPost))
        if (response === true) { 
            setAuthor('')
            setTitle('')
            setImage('')
            navigate("/posts")
        } else {
            console.log("RESPONSE-ERROR", response)
        }
    }

    return (
        <div>
            <h2>Create Post</h2>
            <form
                onSubmit={handleSubmit}
            >
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='title'
                    />
                </div>
                <div className='error'>
                    { hasSubmitted && validationErrors.title }
                </div>
                <div>
                    <label htmlFor="image">Image URL:</label>
                    <input
                        id="image"
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        placeholder="image URL"
                    />
                </div>
                <div className='error'>
                    { hasSubmitted && validationErrors.image }
                </div>
                <div>
                    <label htmlFor="author">Author:</label>
                    <select
                        name='author'
                        onChange={e => setAuthor(e.target.value)}
                        value={ author }
                    >
                        <option value='' disabled>
                            Select an author...
                        </option>
                        { users.map((user, index ) => (
                            <option key={ index }>
                                { user.username }
                            </option>
                        ))}
                    </select>
                </div>
                <button>Submit</button>
            </form>

        </div>
    )
}