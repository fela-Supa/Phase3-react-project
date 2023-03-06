import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = ({ user, setUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const handleLogin = (e) => {
    e.preventDefault()
    fetch(``, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    setUser(true)
    history.push('/')
  }

  return (
    <div className='loginFormContainer'>
      <form className='loginForm' onSubmit={handleLogin}>
        <h1>Login</h1>
        <label>
          Email <span>*</span>
        </label>
        <input type='email' required placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>
          Password <span>*</span>
        </label>
        <input type='password' required placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type='submit'>Login</button>
        <br />
        <hr width='100%' />
        <br />
        <p>
          Dont have an Account? <a href='/register'>Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
