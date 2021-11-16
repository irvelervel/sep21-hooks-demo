import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
import HooksLifecycle from './HooksLifecycle'

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
  const [name, setName] = useState('Asadbek')
  // same thing with the name state variable, this one is going to be initialized with an empty string

  return (
    <div className="App">
      <header className="App-header">
        {count < 5 && <HooksLifecycle count={count} name={name} />}
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={() => setName('Sefa')}>My name is {name}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
        <h2>THE VALUE OF COUNT IS {count}</h2>
        <button onClick={() => setCount(count - 1)}>-</button>
      </header>
    </div>
  )
}

export default App

// both this.setState in a class component and the setter function of useState (setCount, setName, etc...)
// they are ASYNCRONOUS functions, they take a couple of cycles/ms to complete
// they are not even promises, they cannot be "awaited"

// this.setState({ <-- take some time to complete, it's asynchronous
//   count: this.state.count + 1
// })
// console.log(count) <-- this is still going to be the OLD value of count

//FIX:
// this.setState({
//   count: this.state.count + 1
// }, () => {
//    console.log(count) <-- this is GUARANTEED to be the updated value
//    because you're guaranteed that this callback is going to be executed AFTER setting the state
//})

// in useState this behavior has NOT been implemented
// setCount(count + 1)
// console.log(count) <-- this will be still be the old value
// you can use this package to solve this problem
// https://github.com/the-road-to-learn-react/use-state-with-callback
