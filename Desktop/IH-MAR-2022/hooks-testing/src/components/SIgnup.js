import React from "react";
import TextInput from "./TextInput";

const Signup = () => {

    const [email, setEmail] = React.useState('')
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const [confirmEmail, setConfirmEmail] = React.useState('')
    const [errorMessage, setErrorMessage] = React.useState('')
// Username at least 4 characters
// Password at least 6 characters
// Password cant be 'password'



function checkFields (e) {
    e.preventDefault();
    
    if(username.length < 4){
        setErrorMessage('Username must be at least 4 characters')
    } else if(password.length < 6){
        setErrorMessage('Password must be at least 6 characters')
    } else if(password === 'password'){
        setErrorMessage('Password cannot be password')
    } else{
        setErrorMessage(`Welcome ${username}!`)
    }
}

    return(
        <> 
        <h2 style={{textAlign: "center"}}>Signup</h2>
        <form onSubmit={checkFields} style={{textAlign: "center"}}>
            <label>Email</label>
            <TextInput action={(e) => setEmail(e.target.value)} value= {email} type="email" />
            <label> Username </label>
            <TextInput action={(e) => setUsername(e.target.value)} value = {username} name="username" />
            <button>Create</button>
            <label> Password </label>
            <TextInput action={(e) => setPassword(e.target.value)} value = {password} type="password" />
            <button>Create</button>
            <label>Confirm Email</label>
            <TextInput action= {(e) => setConfirmEmail(e.target.value)} value = {confirmEmail} />
            <label> Confirm Password </label>
            <TextInput action={(e) => setConfirmPassword(e.target.value)} value = {confirmPassword} type="password" />
            <button>Confirm</button>
            <p>{errorMessage}</p>
        </form>
        </>
    );
};






export default Signup;