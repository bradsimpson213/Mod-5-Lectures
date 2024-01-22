import Post from "./Post"
import './App.css'


function App() {
  const someData = [
    {
      postNum: 1,
      postTitle: "Great pic!",
      comments: ["Love the pic!", "Not my jam..."]
    },
    {
      postNum: 2,
      postTitle: "I love cheese!",
      comments: ["Me too!", "Who doesn't?", "I'm lactose intolerant"]

    },
    {
      postNum: 3,
      postTitle: "What is that cat doing?",
      comments: ["Aww so cute!", "I like dogs better", "He looks just like his owner!"]

    },
    {
      postNum: 4,
      postTitle: "Pizza again?",
      comments: ["Never can have too much pizza", "I want peperoni!", "Kevin, you're the worst"]
    },
  ]

  return (
    <>
      {/* <Post data={someData[0]} />
      <Post data={someData[1]} />
      <Post data={someData[2]} />
      <Post data={someData[3]} /> */}
      { someData.map((postData) => (
        <Post key={ postData.postNum } { ...postData } />
        ))}:
    </>
  )
}

export default App
