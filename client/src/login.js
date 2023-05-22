import { useState } from 'react'

const Login = () => {
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')

    const submit = async (e) => {
        e.preventDefault()
        console.log(Username, Password)
    }
    return (
        <form className = "login" onSubmit = {submit}>
            <h4>Login</h4>
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

            <button>Login</button>
        </form>
    )
}

export default Login