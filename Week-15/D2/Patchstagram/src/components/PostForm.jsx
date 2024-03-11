import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import postData, { users } from "../data"
// import { usePostsContext } from '../context/PostsContext'
import { useDispatch, useSelector } from "react-redux"
import { savePosts } from '../store/postsReducer'


export default function PostForm() {
    // const { posts, setPosts } = usePostsContext()
    const posts = useSelector(state => state.postsState.posts)
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


    const handleSubmit = (e) => {
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
            id: posts.length + 1,
            title,
            image,
            author: selectedUser,
            date: new Date(),
            comments: [],
            likes: Math.floor(Math.random() * 10)
        }
        console.log(newPost)
        // // postData.push(newPost)
        // setPosts([ ...posts, newPost ])
        // set state back to old
        dispatch(savePosts(newPost))
        navigate("/posts")
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