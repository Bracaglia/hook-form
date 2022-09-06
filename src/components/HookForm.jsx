import React, { useState } from 'react';

const HookForm = props => {
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    return(
        <div>
            <form>
                <input type="text" value= {first} onChange={ e => setFirst(e.target.value) } />
                <input type="text" value={last} onChange={ e => setLast(e.target.value) } />
                <input type="text" value={email} onChange={ e => setEmail(e.target.value) }/>
                <input type="password" value={password} onChange={ e => setPassword(e.target.value) } />
                <input type="password" value= {confirmPassword} onChange={ e => setConfirmPassword(e.target.value) }/>
            </form>
            <p>{ first }</p>
            <p>{ last }</p>
            <p>{ email }</p>
            <p>{ password }</p>
            <p>{ confirmPassword }</p>
        </div>
    );
}

export default HookForm;