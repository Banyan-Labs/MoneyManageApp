import React, { useState } from 'react';
import "./Register.css";
import Logo from '../assets/moneyManLogo1.png';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  // setName("Owen")
  const [formState, setFormState] = useState({});
  const navigate=useNavigate();
  const [message, setMessage] = useState("");
  const handleFormInput = (e) => {
    setFormState({
        ...formState,
        [e.currentTarget.name]: e.currentTarget.value,
    });
    console.log(formState)
};
  const handleSubmit = (e) => {
    e.preventDefault();
    //going to pass form state into post
    axios
      .post(`http://localhost:8080/api/register`, formState)
      .then((res) => {
        if (res.data.code === 11000) {
          (setMessage("Please fill out all required fields"));
        } else {
          (setMessage("User Created"))
          navigate(`/Login`)
        }
      })
      .catch((err) => console.log(err));
    // handleModalChange(e);
  };




  return (
    <div>
      <div className='logo-name'>Money Managed</div>
      <div className='img-div'>
<img src={Logo} alt="Money Managed Logo" className='logo' />
</div>
    <div className='inner-register-div'>
      <h5>Create An Account</h5>
  <input type='text' name='fname' onChange={(e)=>handleFormInput(e)} placeholder='First Name'required /><br /><br />
  <input type='text' name='lname' onChange={(e)=>handleFormInput(e)} placeholder='Last Name'required /><br /><br />
  <input type="email" id="email" name="email" onChange={(e)=>handleFormInput(e)}
  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder='Email'/><br /><br />
  <input type="password" id="password" onChange={(e)=>handleFormInput(e)} name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder='Password' required></input><br /><br />
  <input type="password" id="psw" onChange={(e)=>handleFormInput(e)} name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder='Password' required></input><br /><br />
  <button type='button' className='button' onClick={handleSubmit()}>SIGN UP</button>
  <p>Already have an account? <a href='#Register' className='myLink'>Sign in</a></p>
  <p>{message}</p>
</div>
</div>
  )
}
export default Register