import { useState } from 'react'

const Signup = () => {
    const [Email, setEmail] = useState('')
    const [Name, setName] = useState('')
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')

    const submit = async (e) => {
        e.preventDefault()
        console.log(Email, Name, Username, Password)
    }
    return (
        <form className = "signup" onSubmit = {submit}>
            <h4>Sign up</h4>
            <label>Email:</label>
            <input
                type = "Email"
                onChange={(e) => setUsername(e.target.value)}
                value = {Email}
            />
            <label>Name:</label>
            <input
                type = "Name"
                onChange={(e) => setUsername(e.target.value)}
                value = {Name}
            />
            <label>Username:</label>
            <input
                type = "Username"
                onChange={(e) => setUsername(e.target.value)}
                value = {Username}
            />
            <label>Password:</label>
            <input
                type = "Password"
                onChange={(e) => setPassword(e.target.value)}
                value = {Password}
            />

            <button>Sign up</button>
        </form>
    )
}

export default Signup