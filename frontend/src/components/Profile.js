import React from 'react'

function Profile() {
  return (
    <>
      <div className="bg-gray-800 h-screen flex flex-col ">
        <h1 className='font-serif text-5xl m-5 p-3 bg-zinc-400 rounded-lg '>PROFILE PAGE</h1>
        <div className='h-5/6 bg-slate-400 m-5 rounded-lg flex'>
          <div className='w-1/3 flex flex-col'>
            <img className='p-20 rounded-full ' src='https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'></img>
            <div className='flex'>
              <strong className='m-auto text-3xl'>Abhishek Singh</strong>
            </div>
          </div>
          <div className=' w-2/3 m-10 '>
            <div >
              <p className='font-serif text-4xl'>EMPLOYEE DETAILS</p>
              <hr />
              <div className='details flex-col m-5 '>
                <div>
              <h1 className='font-serif text-3xl m-2'>Full name</h1>
              <p className='font-light m-2 text-lg bg-slate-300 w-max rounded-md pr-1 pl-1' > Abhishek Kumar Singh </p>
              </div>
              <div className='flex justify-start'>
                <div className='eid w-1/2'>
              <h1 className='font-serif text-3xl m-2'>Id</h1>
              <p className='font-light m-2 text-lg bg-slate-300 w-max rounded-md pr-1 pl-1' > 1234 </p>
                </div>
                <div className='Email'>
              <h1 className='font-serif text-3xl m-2'>Email</h1>
              <p className='font-light m-2 text-lg bg-slate-300 w-max rounded-md pr-1 pl-1' > abhishek@gmail.com </p>
                </div>
              </div>
              <div className='flex justify-start'>
                <div className='gender w-1/2'>
              <h1 className='font-serif text-3xl m-2'>Gender</h1>
              <p className='font-light m-2 text-lg bg-slate-300 w-max rounded-md pr-1 pl-1' > Male </p>
                </div>
                <div className='status'>
              <h1 className='font-serif text-3xl m-2'>Status</h1>
              <p className='font-light m-2 text-lg bg-slate-300 w-max rounded-md pr-1 pl-1' > Active </p>
                </div>
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