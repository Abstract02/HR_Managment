import React, { useState } from 'react';
import { navigate, useNavigate } from 'react-router-dom';
import axios from "axios";

function Login() {
    let navigate = useNavigate();
    
    const [user, setuser] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {

        const { name, value } = e.target;
        setuser({
            ...user,
            [name]: value
        })
    }

    const Logi = () => {
        
        const { email, password } = user;
        
        if (email && password) {
            if(email === "admin" && password === "admin")
            {
            navigate("/admin")
            }
            else if(email && password)
            {
            axios.get("https://gorest.co.in/public/v2/users?access-token=286dd3e0fca27a70bf293eabdf125e81571bf002570a32a894e7b9092421a390")
                .then(res => {
                    
                    const usr = res.data.filter((user)=> {
                        return (user.email === email)
                    })
                    if(usr[0]){
                    navigate("/profile/"+usr[0].id)
                    }
                    else{
                        alert("Email not registered")
                    }
                }).catch(err => console.log(err))
        }
    }
        else {
            alert("Enter Valid Email and Password");
        }
    }

    return (
        <>
            <div className="bg-gray-800 h-screen flex justify-around ">
                <div className="m-auto  w-3/12  rounded-lg ">
                    <h1 className="p-5 text-5xl font-serif bg-zinc-700 flex justify-center">Login</h1>
                    <div className="bg-zinc-400 flex flex-col">
                        <input type="text" placeholder="Enter your Email" value={user.email} name = "email" onChange={handleChange} className="m-4 rounded-md p-3"></input>
                        <input type="text" placeholder="Enter your password" value={user.password} name ="password" onChange={handleChange}  className="m-4 rounded-md p-3"></input>
                        <div className="flex flex-col">
                            <button type="submit" onClick={Logi}  className="m-4 text-2xl text-white bg-slate-800 p-2 rounded-md hover:bg-zinc-700 hover:text-black">LOGIN</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;