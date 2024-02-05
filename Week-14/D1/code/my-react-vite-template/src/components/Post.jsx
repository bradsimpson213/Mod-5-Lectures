


export default function Post(props) {
    console.log("our props", props)
    // const title = "This post is great!"
    return (
        <div>
            <h3>Post info here...</h3>
            <h3>{ props.title }</h3>
        </div>
    )
}