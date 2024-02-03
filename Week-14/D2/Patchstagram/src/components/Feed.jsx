import Post from "../components/Post"


export default function Feed({data}) {
    console.log(data)
    return (
        <div>
            { data.map((postData) => (
                <div key={postData.id}>
                    <Post data={postData} />
                </div>
            ))}
        </div>
    )
}