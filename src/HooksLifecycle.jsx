// for mimicking componentDidMount, componentDidUpdate and componentWillUnmount
// you can use a hook called useEffect

import { useEffect } from "react"

const HooksLifecycle = ({ count, name }) => {

    // useEffect can work like componentDidMount, componentDidUpdate and componentWillUnmount
    // it depends on you, an how you use/declare the hook

    useEffect(() => {
        console.log('I got triggered because the name prop changed')
        // just like a componentDidUpdate with a condition checking if name changed
        // prevProps.name !== this.props.name
    }, [name])

    useEffect(() => {
        // this is a callback function
        // this function will be invoked at every render
        // so at every change of state or props
        // this will effectively mimic a componentDidUpdate
        console.log('I got triggered because SOMETHING changed!')
    })

    useEffect(() => {
        console.log('this is like componentDidMount')
    }, [])
    // the second argument of useEffect is a dependency array
    // the hook will listen of any change in any of the array elements for re-invoking itself

    useEffect(() => {
        return () => {
            // if you put something here, it will be executed just when the component is about
            // to be unmounted! --> same as componentWillUnmount
            console.log('about to be unmounted...')
            // same purposes of componentWillUnmount: cleaning pending counters, intervals, sockets, connections, etc...
        }
    }, [])

    return (
        <h1>Lifecycle with hooks</h1>
    )
}

export default HooksLifecycle