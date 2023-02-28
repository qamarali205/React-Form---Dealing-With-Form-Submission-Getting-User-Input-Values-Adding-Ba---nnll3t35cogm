import React from 'react'
import { useState } from 'react';
import '../styles/App.css';


const App = () => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    contactNo: "",
  })
  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
    contactNo: "",
  })
  const [success, setSuccess] = useState('none');

  const disableStyle = {
    display: `${success}`,
  }

  const validateInput = (formObject) => {
    const errors = {}
    Object.keys(formObject).forEach((val) => {
      if (formObject[val] === "")
        errors[val] = "Please fill this field"
    });
    if (formObject.password.length < 4) {
      errors.password = "Password cannot contain characters less than 4";
    }
    if (formObject.contactNo.length != 10) {
      errors.contactNo = "Contact number should have exactly 10 digits"
    }
    return errors;
  }

  const takeInput = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    setState({
      ...state,
      [key]: value,
    })
  }
  
  const submit = (e) => {
    e.preventDefault();
    setError({});
    const errors = validateInput(state)
    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }
    setSuccess("block");
    e.target.reset()
  }

  return (
    <div id="main">
      <h3 className='success-alert' style={disableStyle}>Registered Successfullly</h3>
      <form onSubmit={submit}>
        <h1>Registeration Form</h1>
        <section>
          <label>Username</label>
          <input type="text" name='username' onChange={takeInput} />
          {error.username?<p className='username-error'>{error.username}</p>:""}
  
          <label>Email</label>
          <input type="email" name='email' onChange={takeInput} />
          {error.email?<p className='email-error'>{error.email}</p>:""}
 
          <label>Password</label>
          <input type="password" name='password' onChange={takeInput} />
          {error.password?<p className='password-error'>{error.password}</p>:""}
        
          <label>Contact Number</label>
          <input type="number" name='contactNo' onChange={takeInput} />
          {error.contactNo?<p className='contactNo-error'>{error.contactNo}</p>:""}
     
          <button>Submit</button>
        </section>
      </form>
    </div>
  )
}


export default App;
