


export default function Post(props) {
 
    const randNum = Math.floor(Math.random() * 10)
    console.log(randNum)
    // const title = "This post is great!"
    return (
        <div>
            <h3>Post info here...</h3>
            <h3>{ props.num * randNum }</h3>
            <h4>Randnum: { randNum }</h4>
        </div>
    )
}