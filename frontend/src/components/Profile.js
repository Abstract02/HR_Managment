import React from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"
import {useEffect,useState} from "react"
import { useNavigate } from 'react-router-dom';

  function Profile() {
    let navigate = useNavigate();

    const { id } = useParams();
    const [user, setuser] = useState({
      id: 3199,
      name: "Amaresh Trivedi",
      email: "trivedi_amaresh@stracke.io",
      gender: "male",
      status: "active"
      })
    useEffect(() => {
      axios.get("https://gorest.co.in/public/v2/users?access-token=286dd3e0fca27a70bf293eabdf125e81571bf002570a32a894e7b9092421a390")
      .then(res => {
        
          const usr = res.data.filter((person)=> {
            
              return (person.id == Number(id))
          })
          setuser(usr[0])
      }).catch(err => console.log(err))
    }, [])

    const logout = () =>{
        navigate("/")
    }
    

    return (
      <>
        <div className="bg-gray-800 h-screen flex flex-col ">
          <h1 className='font-serif text-center text-5xl m-5 p-3 bg-zinc-500 rounded-lg '>PROFILE PAGE</h1>
          <div className='h-5/6 bg-zinc-400 m-5 rounded-lg flex'>
            <div className='w-1/3 flex flex-col'>
              <img className='p-20 rounded-full ' src='https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'></img>
              <div className='flex'>
                <strong className='m-auto text-3xl'>{user.name}</strong>
              </div>
            </div>
            <div className=' w-2/3 m-10 '>
              <div >
                <p className='font-serif text-4xl'>EMPLOYEE DETAILS</p>
                <hr />
                <div className='details flex-col m-5 '>
                  <div>
                    <h1 className='font-serif text-3xl m-2'>Full name</h1>
                    <p className='font-light m-2 text-lg bg-slate-300 w-max rounded-md pr-1 pl-1' > {user.name} </p>
                  </div>
                  <div className='flex justify-start'>
                    <div className='eid w-1/2'>
                      <h1 className='font-serif text-3xl m-2'>Id</h1>
                      <p className='font-light m-2 text-lg bg-slate-300 w-max rounded-md pr-1 pl-1' >{user.id} </p>
                    </div>
                    <div className='Email'>
                      <h1 className='font-serif text-3xl m-2'>Email</h1>
                      <p className='font-light m-2 text-lg bg-slate-300 w-max rounded-md pr-1 pl-1' > {user.email} </p>
                    </div>
                  </div>
                  <div className='flex justify-start'>
                    <div className='gender w-1/2'>
                      <h1 className='font-serif text-3xl m-2'>Gender</h1>
                      <p className='font-light m-2 text-lg bg-slate-300 w-max rounded-md pr-1 pl-1' > {user.gender} </p>
                    </div>
                    <div className='status'>
                      <h1 className='font-serif text-3xl m-2'>Status</h1>
                      <p className='font-light m-2 text-lg bg-slate-300 w-max rounded-md pr-1 pl-1' > {user.status} </p>
                    </div>
                  </div>
                    <div className='flex justify-end'>
                                    <button className='m-4 text-2xl text-white bg-slate-800 pr-2 pl-2 pb-1 rounded-lg mt-20 mr-64  hover:bg-zinc-700 hover:text-black' onClick={logout} >Logout</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

export default Profile