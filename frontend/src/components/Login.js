function Login() {
    
    /* const handleChange = (e) => {

        const { name, value } = e.target;
        setuser({
            ...user,
            [name]: value
        })
    } */

    return (
        <>
            <div className="bg-gray-800 h-screen flex justify-around ">
                <div className="m-auto  w-3/12  rounded-lg ">
                    <h1 className="p-5 text-5xl font-serif bg-zinc-700 flex justify-center">Login</h1>
                    <div className="bg-zinc-400 flex flex-col">
                        <input type="text" placeholder="Enter your Email" name="email"  className="m-4 rounded-md p-3"></input>
                        <input type="text" placeholder="Enter your password" name="password"  className="m-4 rounded-md p-3"></input>
                        <div className="flex flex-col">
                            <button type="submit"  className="m-4 text-2xl text-white bg-slate-800 p-2 rounded-md hover:bg-zinc-700 hover:text-black">LOGIN</button>
                           

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;