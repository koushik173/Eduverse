import React from 'react';

const RightSideBar = () => {
    return (
        <div className=' flex flex-col gap-10'>
            <Teacher></Teacher>
            <Homework></Homework>
            <Skills></Skills>
        </div>
    );
};






const Teacher = () => {
    return (
        <div className='flex flex-col items-center p-10 text-slate-600 font-bold bg-slate-50 rounded-xl'>
            <h1 className='py-5'>Your Teacher</h1>
            <img className='shadow-2xl rounded-2xl w-20 h-20' src='https://i.imgur.com/asLPUCK.jpg' alt='not found'></img>
            <small>Terry Bator</small>

            <button className='mt-5 mb-3 bg-slate-200 hover:bg-slate-300 w-full py-2'>Profile</button>
            <button className='mb-5 bg-slate-200 hover:bg-slate-300 w-full py-2'>Change</button>
        </div>
    )
}


const Homework = () => {
    return (
        <div className='shadow-2xl text-slate-50 flex flex-col font-bold gap-5 bg-blue-600 rounded-xl p-10'>
            <h1 className='text-center'>Homework</h1>
            <img src='https://i.imgur.com/foFHcIZ.png' alt='image not found'></img>
            <h1 className=''>Family Traditions</h1>
            <small className=''>13 pages, 65 min</small>
            <button className='rounded-xl bg-slate-50 hover:bg-slate-300 text-blue-600 py-2'>Start</button>
        </div>
    )
}


const Skills = () =>
{
    return (
        <div className=' bg-slate-50 text-slate-600 font-bold gap-5 flex flex-col rounded-xl p-10'>
            <h1 className='text-center py-2'>Skills</h1>
            <div className='w-full flex flex-col gap-2'>
                <h1>Speaking</h1>
                <div className='rounded-full w-full bg-slate-400'>
                    <div className='rounded-full h-1 bg-blue-600' Style={`width: 45%;`}></div>
                </div>
            </div>

            <div className='w-full flex flex-col gap-2'>
                <h1>Grammer</h1>
                <div className='rounded-full w-full bg-slate-400'>
                    <div className='rounded-full h-1 bg-red-600' Style={`width: 25%;`}></div>
                </div>
            </div>

            <div className='w-full flex flex-col gap-2'>
                <h1>Pronounciation</h1>
                <div className='rounded-full w-full bg-slate-400'>
                    <div className='rounded-full h-1 bg-green-600' Style={`width: 45%;`}></div>
                </div>
            </div>

            <div className='w-full flex flex-col gap-2'>
                <h1>Writing</h1>
                <div className='rounded-full w-full bg-slate-400'>
                    <div className='rounded-full h-1 bg-yellow-600' Style={`width: 75%;`}></div>
                </div>
            </div>

            <button className=' rounded-xl w-full bg-slate-200 py-2'>Explore all</button>
        </div>
    )
}

export default RightSideBar;