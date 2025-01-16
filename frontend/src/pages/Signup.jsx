import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtomWarning from '../components/ButtomWarning';
import { Button } from "../components/Button.jsx";
import Heading from '../components/Heading';
import { InputBox } from "../components/Inputbox";
import { Navbar } from '../components/Navbar.jsx';
import { SubHeading } from "../components/Subheading";
export const Signup = () =>{

  const [firstName, setFirstName]= useState();
  const [lastName,setLastName]=useState();
  const [username,setUserName]=useState();
  const [password,setPassword]=useState();
  const navigate = useNavigate();


  return <div>
    <Navbar/> 
  <div className="bg-slate-950 h-screen w-78 flex justify-center">

    <div className="flex flex-col justify-center">

      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox onChange={e=>{
          setFirstName(e.target.value)
        }}
        placeholder="John" label={"First Name"} />
        <InputBox  onChange={e=>{
          setLastName(e.target.value)
        }}       placeholder="Doe" label={"Last Name"} />
        <InputBox onChange={e=>{
          setUserName(e.target.value)
        }} 
        placeholder="test@gmail.com" label={"Email"} />
        <InputBox onChange={e=>{
          setPassword(e.target.value)
        }}  
        placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button  onClick={async ()=>{
            const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
              username,
              firstName,
              lastName,
              password

            })
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
          }}label={"Sign up"} />
           
        </div>
        <ButtomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/Signin"} />
      </div>
    </div>
  </div>
  </div>
}