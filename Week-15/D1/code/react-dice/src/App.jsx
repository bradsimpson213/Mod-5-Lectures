import { Component } from 'react'
import DiceContainer from './components/DiceContainer'
import './App.css'

// TODO: Refactor this component to be a functional component

class App extends Component {
  render() {
    return (
      <div className="main-app">
        <div className="title-text">Welcome to React Dice!</div>
        <DiceContainer />
      </div>
    )
  }
}

export default App



// import './App.css'


// function App() {

//   return (
//     <>
//       <h1>Hi there!</h1>
//     </>
//   )
// }

// export default App
