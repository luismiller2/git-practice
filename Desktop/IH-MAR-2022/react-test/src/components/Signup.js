import React from "react";

const Signup = () => {

const [email, setEmail] = React.useState('')
const [username, setUsername] = React.useState('')
const [password, setPassword] = React.useState('')
const [confirmPassword, setConfirmPassword] = React.useState('')
const [confirmEmail, setConfirmEmail] = React.useState('')
const [errorMessage, setErrorMessage] = React.useState('')

function checkFields(e) {
    e.preventDefault();

    if(username.length < 4){
        setErrorMessage('Username must be at least 4 characters')
    } else if(password.length < 6){
        setErrorMessage('Password must be at least 6 characters')
    } else if(password === 'password'){
        setErrorMessage('Password cannot be password')
    } else if(password !== confirmPassword){
        setErrorMessage('Password does not match!')
    } else if(email !== confirmEmail){
        setErrorMessage('Email does not match!')
    } else {
        setErrorMessage(`Welcome ${username}!`)
    }
}




    return(
        <form onSubmit={checkFields} style={{textAlign: "center"}}>
        <div><label>Email</label></div>
        <div><input onChange={(e) => setEmail(e.target.value)} type="email" value={email} /></div>
        <br></br>
        <div><label>Username</label></div>
        <div><input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/></div>
        <br></br>
        <div><label>Password</label></div>
        <div><input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/></div>
        <br></br>
        <div><label>Confirm Email</label></div>
        <div><input onChange={(e) => setConfirmEmail(e.target.value)} value={confirmEmail}/></div>
        <br></br>
        <div><label>Confirm Password</label></div>
        <div><input onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/></div>
        <br></br>
        <div><button>Create</button></div>
        <div><p>{errorMessage}</p></div>


        </form>
    )
}







export default Signup;