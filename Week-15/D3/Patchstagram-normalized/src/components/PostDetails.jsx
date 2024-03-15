import { useParams, useNavigate } from 'react-router-dom'
import Comment from './Comment'
import { useThemeContext } from '../context/ThemeContext'
import { useSelector } from 'react-redux'


export default function PostDetails(){
    const { postId } = useParams()
    const posts = useSelector(state => state.postsState.posts)
    // const postData = posts.find( (post) => post.id === +postId )
    const postData = posts[postId.toString()]
    const navigate = useNavigate()
    const { theme } = useThemeContext()
    console.log("post ID:", postId)
    const { title, author, image, date, comments, likes } = postData

    return (
        <div className={`feed-container`}>
            <div className={`post-container ${theme}`}
                onClick={ () => navigate("/posts") }
            >
                <div className="post-header">
                    <div className="user-info">
                        <img
                            src={author.profile}
                            alt="user-profile"
                            className="profile-image"
                        />
                        <h2>{ author.username }</h2>
                    </div>
                    <h3>{ date }</h3>
                </div>
                <div className="post-body">
                    <h2>{ title }</h2>
                    <img 
                        src={image} 
                        alt="main-post-iamge"
                        className="content-image" 
                    />
                </div>
                <p>Likes: { likes }</p>
                <div className="comment-container">
                    { comments.length ? null : <h3>No comments yet...</h3>}
                    {comments.map((comment) => (
                        <Comment key={ comment.id } comment={ comment.body } />
                    ))}
                </div>
            </div>
        </div>
    )
}