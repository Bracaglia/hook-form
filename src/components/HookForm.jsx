import React, { useState } from 'react';


const HookForm = (props) => {
    // --------------------- STATE ------------------------------ //
    // STATE FOR HANDLING INPUTS
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    // STATE FOR HANDLING ERROR MESSAGES
    const [firstError, setFirstError] = useState("");
    const [lastError, setLastError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    // --------------------- STATE ------------------------------ //



    // --------------------- EVENT HANDLERS ------------------------------ //
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { first, last, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };

    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    }
    const handleFirst = (e) => {
        setFirst(e.target.value);
        if(e.target.value.length <3) {
            setFirstError("First name must be at least 3 characters long");
        } else {
            setFirstError ("");
        }
    }
    const handleLast = (e) => {
        setLast(e.target.value);
        if(e.target.value.length <3) {
            setLastError("Last name must be at least 3 characters long");
        } else {
            setLastError ("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length <12) {
            setEmailError("Email name must be at least 12 characters long");
        } else {
            setEmailError ("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length <4) {
            setPasswordError("Password must be at least 4 characters long");
        } else {
            setPasswordError ("");
        }
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(password !== e.target.value ) {
            setConfirmPasswordError("Passwords must Match!");
        } else {
            setConfirmPasswordError("");
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setHasBeenSubmitted(true)
    }
    // --------------------- EVENT HANDLERS ------------------------------ //

    // -------------------- REACT COMPONENT ------------------------------ //
    return (
        <div>
            <form onSubmit={submitHandler }>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={ handleFirst } />
                    { firstError ? <p style={{color: 'red'}}>{ firstError }</p> : null}
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={ handleLast } />
                    { lastError ? <p style={{color: 'red'}}>{ lastError }</p> : null}
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={ handleEmail } />
                    { emailError ? <p style={{color: 'red'}}>{ emailError }</p> : null}
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ handlePassword } />
                    { passwordError ? <p style={{color: 'red'}}>{ passwordError }</p> : null}
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ handleConfirmPassword } />
                    { confirmPasswordError ? <p style={{color: 'red'}}>{ confirmPasswordError }</p> : null}
                </div>
                <input type="submit" value="Submit Form" />
            </form>
            <div>
                {
                    hasBeenSubmitted ? 
                    <div>
                        <h1>{ first } { last }</h1>
                        <p>{ email }</p>
                    </div>
                    : null
                }
            </div>
        </div>
    );
};

export default HookForm;