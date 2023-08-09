import React, { useState } from 'react';

const LogIn = () => {

    const [page, setPage] = useState(0)
    return (
        <div className='bg-gradient-to-r from-cyan-100 to-blue-100  min-w-screen min-h-screen'>
            <Header page={page}></Header>
            <div className='flex gap-5 py-10 px-44 text-slate-900 bg-blur-md rounded-lg'>
                <Sidebar page={page} setPage={setPage}></Sidebar>
                <Disp page={page} setPage={setPage}></Disp>
            </div>
        </div>
    );
};






const Header = ({ page }) => {
    return (
        <div className='bg-slate-100 px-20 py-5 text-gray-600'>
            <div className='flex items-center justify-between'>
                <h1 className='text-2xl font-bold'>Eduverse</h1>
                <small>Need help</small>
            </div>
            <hr className='my-5 border border-slate-400'></hr>
        </div>
    )
}



const Sidebar = ({ page, setPage }) => {
    return (
        <div className='w-4/12'>
            <h1 className='text-3xl font-bold'>Log In</h1>
            <small>"Online classrooms bring together minds from around the world, creating a global learning community." - Anonymous</small>
            <hr className='border-slate-400 border-1 m-5'></hr>
            <div className='flex my-5'>
                <div className='bg-slate-600 h-100 rounded-lg'>
                    <div className='rounded-lg bg-red-500 w-1' Style={`height:${4}%`}></div>
                </div>
            </div>
        </div>
    )
}


const Disp = ({ page, setPage }) => {
    return (
        <div className='w-8/12 mx-10 bg-slate-100 p-10 rounded-xl'>
            <UserProfile page={page} setPage={setPage}></UserProfile>
        </div>
    )
}





import { useForm } from 'react-hook-form';
import axios from 'axios';
const UserProfile = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginError, setloginError] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async(userData) => {
        setloginError('')
        console.log(userData);
        try {
            const response = await axios.post('http://localhost:5000/api/login', userData);
            console.log(response.data);
        } catch (error) {
            console.log("error",error.message);
        }
    }


    return (
        <div className={`flex flex-col`}>
            <h1 className='text-3xl font-bold'>User Profile</h1>
            <hr className='border-slate-400 border-1 my-5'></hr>

            <form onSubmit={handleSubmit(handleLogin)}>
                <div className='grid grid-cols-1 gap-10'>
                    <div className='form-control'>
                        <label>Email</label>
                        <input type='text' className="rounded-lg bg-transparent w-full"
                            placeholder='Email'
                            {...register("email", {
                                required: "Email is required",
                                pattern: { value: /(cse|eee|law)_\d{10}@lus\.ac\.bd/, message: 'only dept_id@lus.ac.bd allow.' }
                            })} />
                        {errors.email && <p role="alert"><span className="label-text-alt text-red-500">{errors.email.message}</span></p>}
                    </div>

                    <div className='form-control'>
                        <label>Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className="rounded-lg bg-transparent w-full"
                            placeholder='Password'
                            {...register("password", {
                                required: "Password is required",
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/,
                                    message: 'Password must be 8+ characters include uppercase, lowercase, digit, special.'
                                }
                            })}
                        />
                        <span className='cursor-pointer' onClick={togglePasswordVisibility}>{showPassword ? 'Hide' : 'Show'}</span>
                        {errors.password && <p role="alert"><span className="label-text-alt text-red-500">{errors.password.message}</span></p>}
                    </div>

                </div>
                <input type='submit' value='Login' className="btn btn-dark hover:bg-green-500 bg-green-400 px-14 py-2 text-white rounded-full my-5"></input>
                    {loginError && <p className='text-red-600'>{loginError}</p>}
            </form>
            {/* <button onClick={""} className={` hover:bg-green-500 bg-green-400 px-5 py-2 text-white rounded-full my-5`} >LogIn</button> */}
        </div>
    )
}


export default LogIn;