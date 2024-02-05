import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Post from './components/Post'
import './App.css'

function App() {
  console.log("Hello there!")

  return (
    <div>
      <h1>Hello Programmers!</h1>
      <h2>Welcome to React!</h2>
      <Post title="This post is cool" />
      <Post title="This post is less cool"/>
      <Post />
      <Post />
      <Post />
    </div>

  )
}

export default App
