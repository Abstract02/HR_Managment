import React, { useState } from 'react';
import { navigate, useNavigate } from 'react-router-dom';

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
        if(user.email === "admin" && user.password === "admin")
        {
            navigate("/admin")
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