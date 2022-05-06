// import React from "react";
// import Signup from "./SIgnup";


// const LoginForm = (props) => {
//     return (
//         <Signup action={checkFields}>Check Fields</Signup>
//     )
// };


// const [username, setUsername] = React.useState('')
// const [password, setPassword] = React.useState('')
// const [errorMessage, setErrorMessage] = React.useState('')

//     function checkFields (e) {
//         e.preventDefault();
        
//         if(username.length < 4){
//             setErrorMessage('Username must be at least 4 characters')
//         } else if(password.length < 6){
//             setErrorMessage('Password must be at least 6 characters')
//         } else if(password === 'password'){
//             setErrorMessage('Password cannot be password')
//         } else{
//             setErrorMessage(`Welcome ${username}!`)
//         }
//     }


// export default LoginForm;