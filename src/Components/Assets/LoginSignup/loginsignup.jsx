import React, { useState } from 'react'
import './loginsignup.css'
import {MdEmail} from "react-icons/md";
import {RiLockPasswordLine} from "react-icons/ri";
import {IoMdPerson} from "react-icons/io";

export const LoginSignup = () => {

    const[action,setaction]=useState("SignUp");
  return (
    <div>
    <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<></>:
            <div className="input">
            <IoMdPerson className='image'/>
            <input type="text" className='textr' placeholder='Name' />
        </div>}
            
            <div className="input">
                <MdEmail className='image'/>
                <input type="email" className='textr' placeholder='Email' />
            </div>
            <div className="input">
                <RiLockPasswordLine className='image'/>
                <input type="password" className='textr' placeholder='Password' />
            </div>
        </div>
        {action==="SignUp"?<></>:
        <div className="forgotpassword">
        Forgot Password? <span className='spantag'>Click here</span>
    </div>}
        
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setaction("SignUp")}}>SignUp</div>
            <div className={action==="SignUp"?"submit gray":"submit"} onClick={()=>{setaction("Login")}}>Login</div>
        </div>

    </div>

    </div>
  )
};
