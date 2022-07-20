import React, { useState } from 'react';
import axios from "axios";
import Login from './Login';
import { useNavigate } from 'react-router-dom';

function Admin() {
    let navigate = useNavigate();
    const [user, setuser] = useState({
        id: null,
        name: "",
        email: "",
        gender: "",
        status: ""
    })

    const handleChange = (e) => {

        const { name, value } = e.target;
        if(name === "id"){
            setuser({
                ...user,
                [name]: Number(value)
            })  
        }
        else{
        setuser({
            ...user,
            [name]: value
        })}
    }

    const save = () => {
        axios.post("https://gorest.co.in/public/v2/users?access-token=286dd3e0fca27a70bf293eabdf125e81571bf002570a32a894e7b9092421a390", user)
            .then((res) => {
                if(res.status === 201)
                {
                    alert("User created Sucessfully")
                    navigate("/")
                }
            })
    }
    return (

        <>
            <div className="bg-gray-800 h-screen flex flex-col ">
                <h1 className='font-serif text-center text-5xl m-5 p-5 bg-zinc-500 rounded-lg '>Admin Pannel</h1>
                <div className='h-5/6 bg-zinc-400 m-5 rounded-lg flex '>
                    <div className='w-1/3 flex flex-col'>
                        <img className='p-20 rounded-full ' src='https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'></img>
                        <div className='flex'>
                            <button className='border-2 rounded-md border-red-900 m-auto p-1' >+Add Profile Photo</button>
                        </div>
                    </div>
                    <div className=' w-2/3 m-10 '>
                        <div >
                            <p className='font-serif text-4xl'>ADD EMPLOYEE </p>
                            <hr />
                            <div className='details flex-col m-5 '>
                                <div>
                                    <h1 className='font-serif text-3xl m-2'>Full name</h1>
                                    <input className='font-normal m-2 text-sm bg-slate-300 w-max rounded-md pr-1 pl-1' name="name" onChange={handleChange} value={user.name} />
                                </div>
                                <div className='flex justify-start'>
                                    <div className='eid w-1/2'>
                                        <h1 className='font-serif text-3xl m-2'>Id</h1>
                                        <input className='font-normal m-2 text-sm bg-slate-300 w-max rounded-md pr-1 pl-1' name="id" onChange={handleChange} value={user.id} />
                                    </div>
                                    <div className='Email'>
                                        <h1 className='font-serif text-3xl m-2'>Email</h1>
                                        <input className='font-normal m-2 text-sm bg-slate-300 w-max rounded-md pr-1 pl-1' name="email" onChange={handleChange} value={user.email} />
                                    </div>
                                </div>
                                <div className='flex justify-start'>
                                    <div className='gender w-1/2'>
                                        <h1 className='font-serif text-3xl m-2'>Gender</h1>
                                        <input className='font-normal m-2 text-sm bg-slate-300 w-max rounded-md pr-1 pl-1' name="gender" onChange={handleChange} value={user.gender} />
                                    </div>
                                    <div className='status'>
                                        <h1 className='font-serif text-3xl m-2'>Status</h1>
                                        <input className='font-normal m-2 text-sm bg-slate-300 w-max rounded-md pr-1 pl-1' name="status" onChange={handleChange} value={user.status} />
                                    </div>
                                </div>
                                <div className='flex justify-end'>
                                    <button className='m-4 text-2xl text-white bg-slate-800 pr-2 pl-2 pb-1 rounded-lg mt-20 mr-64  hover:bg-zinc-700 hover:text-black' onClick={save}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin