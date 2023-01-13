import React from 'react'
import "./ForgotPass.css"
const ForgotPass = () => {
  return (
    <div>
    <div className='logo-name'>Money Managed</div>
  <div className='inner-forgotpass-div'>
    <h5>Recover Password</h5>
    <input type="email" id="email" name="email"
  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder='Email'/><br /><br />
<button type='button' className='button'>RECOVER</button>
<p>Already have an account? <a href='forgotpass' className='myLink'>Sign In</a></p>
</div>
</div>
  )
}
export default ForgotPass