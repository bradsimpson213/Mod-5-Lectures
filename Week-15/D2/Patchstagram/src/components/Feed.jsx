import Post from "../components/Post"
// import { usePostsContext } from "../context/PostsContext";
import { useSelector } from "react-redux"
import"./Feed.css"

export default function Feed() {
    // const { posts } = usePostsContext()
    const posts = useSelector(state => state.postsState.posts)

    const compare = (a, b) => {
        if (new Date(a.date) < new Date(b.date)) return 1;
        if (new Date(a.date) > new Date(b.date)) return -1;
        if (new Date(a.date) === new Date(b.date)) return 0;
    };
    const sortedFeed = posts.sort(compare)
    return (
        <div className="feed-container">
            { sortedFeed.map((postData) => (
                <div key={postData.id}>
                    <Post data={postData} />
                </div>
            ))}
        </div>
    )
}