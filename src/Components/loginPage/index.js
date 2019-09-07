import React, { useState } from 'react';
import './loginPage.css';


function LoginPage(props) {
  const [name, setName] = useState('John Doe');
  const [password, setPassword] = useState('123')
  const handleNameInput = e => {
    e.target.type==="text" ? setName(e.target.value) : setPassword(e.target.value);
  };
    return (
      <div className="loginPage">
        <div className="content">
          <label>Email: </label>
          <input type='text' placeholder='Email' onChange={handleNameInput} value={name} required/>
          <label>Password: </label>
          <input type='password' placeholder='Password' onChange={handleNameInput} value={password} required/>
          <button onClick={()=>props.post(name,password)}>Login</button>
        </div>
      </div>
    );
  }

  export default LoginPage;