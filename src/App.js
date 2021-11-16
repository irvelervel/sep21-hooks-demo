import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

// React Hooks allow you to use the State and the Lifecycle methods in functional components.

// THE RULES OF HOOKS:
// 1) Use React Hooks just in functional components! (not in classes, not in generic JS)
// 2) Use React Hooks just at the TOP LEVEL of your component, outside loops, if/else, conditions, etc.

// with hooks you can create state variables!
// let's think about a traditional state object in a class component:
// state = {
//   count: 0,
//   name: ''
// }
// with hooks you can take out the count variable and declare it on its own
// useState can be used for declaring a state variable!

const App = () => {
  const [count, setCount] = useState(0)
  // count is the state variable
  // setCount is the function capable of setting a new value on count
  // the argument you're gonna invoke useState with (0) is going to be the initial value of the state variable
  const [name, setName] = useState('')
  // same thing with the name state variable, this one is going to be initialized with an empty string

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
