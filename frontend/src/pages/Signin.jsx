import React from 'react'
import ButtomWarning from '../components/ButtomWarning'
import { Button } from '../components/Button'
import Heading from '../components/Heading'
import { InputBox } from '../components/Inputbox'
import { Navbar } from '../components/Navbar'
import { SubHeading } from '../components/Subheading'

function Signin() {
  return (
    <div>
      <Navbar />
      <div className="bg-slate-950 h-screen w-78 flex justify-center">
        <div className="flex flex-col justify-center">

          <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label={"Signin"} />
            <SubHeading label={"Enter your Credentials to access your accout"} />
            <InputBox placeholder="test@gmail.com" label={"Email"} />
            <InputBox placeholder="****" label={"Password  "} />
            <div className="pt-4">
              <Button label={"Sign In"} />
            </div>
            <ButtomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/Signup"} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Signin
