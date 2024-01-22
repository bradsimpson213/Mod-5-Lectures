import Comment from "./Comment";


export default function Post({ postNum, postTitle, comments }) {
    // console.log(comments)
    return (
        <div>
            <h3>PostId: { postNum }  PostTitle: { postTitle }</h3>
            { comments.map((comment, index) => (
                <Comment key={ index } comment={ comment } />
            ))};
        </div>
    );
}