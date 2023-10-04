import React, { useState } from "react";
import { PasswordInput, InputArea, DropdownBox } from "../Components/Inputs";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import nupsgLogo from '../Assets/nupsgLogo.png'
import akuafoLogo from '../Assets/akuafoLogo.png'
import groupPic from '../Assets/groupPic1.png'


const SignIn = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const URL = "http://localhost:5000/users";

  const handleLogin = async () => {
    const response = await fetch("http://localhost:5000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const json = await response.json();

    if (response.ok) {
      navigate('/UserPage');
    } else {
      console.log("There is something wrong");
    }
  };
    


    return (
        <div className="flex md:h-screen justify-center items-center">
            <div className="flex flex-col md:relative items-center md:flex-row w-full my-[30px] gap-[40px] md:h-4/5 md:w-2/3 md:shadow-md md:shadow-[#0096FF] md:rounded-[20px]">
                <form className="flex flex-col md:justify-center px-[10%] md:px-0 w-full md:w-2/3 items-center">
                    <div className="font-semi-bold font-times-new-roman font-[lara]"> 
                        <div className="text-[40px] text-center"> Sign In  </div>
                        <small className="text-center"> Only Akuafo NUPS-G Members are expected to sign up </small>
                    </div>
                    <div className="flex w-full flex-col justify-around md:w-2/3 md:justify-between">
                        <div>
                            <InputArea value={email} label="Email" type="email" onChange={(event) => setEmail(event.target.value)} />
                        </div>
                        <div>
                            <PasswordInput value={password} label="Password" onChange={(event) => setPassword(event.target.value)} />
                        </div>
                        <div>
                            <Button className="w-full" type="submit" label="Sign In"/>
                        </div>
                    </div>
                </form>
                <div className="flex flex-col items-center rounded-[20px] w-4/5 bg-[#0096FF] md:w-1/3 md:h-full md:rounded-l-[0px]">
                    <div className="flex flex-row md:max-w-[70%] justify-evenly md:justify-around my-[20px] w-full">
                        <img className="bg-[#fff] max-w-[40%] md:w-[150px] rounded-[100px]" alt='Nups-g logo' src={nupsgLogo} />
                        <img className="max-w-[40%] md:w-[50%]" alt="Akuafo log" src={akuafoLogo} />
                    </div>
                    <h1 className="text-[#fff] text-[30px] font-bold "> NUPS-G OO!! </h1>
                    <h1 className="text-[#fff] text-[30px] font-bold "> Akuafo OO!! </h1>
                    <img className="rounded-[20px] mt-[40px]" alt="Group Picture" src={groupPic} />
                </div>
            </div>
        </div>
    )
}


export default SignIn;