import React from 'react';
import "./Register.css";


const Register = () => {
  return (
    <div>
     
      <div className='logo-name'>Money Managed</div>
    
    <div className='inner-register-div'>
      <h5>Create An Account</h5>
  <input type='text' name='name' placeholder='First Name'required /><br /><br />
  <input type='text' name='name' placeholder='Last Name'required /><br /><br />
  <input type='email' name='email' placeholder='Email' required /><br /><br />
  <input type='text' name='name' placeholder='Password'required /><br /><br />
  <input type='text' name='name' placeholder='Confirm Password'required /><br /><br />
  <button type='button' className='button'>Sign Up</button>
  <p>Already have an account? <a href='#Register'>Sign In</a></p>
</div>
</div>
  )
}

export default Register