

import { useContext } from 'react';
import { AiTwotoneHome, AiFillSchedule, AiTwotoneStar, AiTwotoneVideoCamera } from 'react-icons/ai'
import { SiGoogleclassroom } from 'react-icons/si'
import { CgLoadbarDoc } from 'react-icons/cg'
import { FaGamepad } from 'react-icons/fa'
import { GiPublicSpeaker } from 'react-icons/gi'
import { Context } from '../../Context/EduContext';
import { Link } from 'react-router-dom';


const LeftSideBar = () => {

    const { tcLeftRoute, setTcLeftRoute } = useContext(Context)


    return (
        <div>


            <div className='flex gap-3 text-slate-600 flex-col items-center'>
                <img className='rounded-xl   w-28 h-28' src='https://i.imgur.com/asLPUCK.jpg'></img>
                <div className='flex flex-col items-center'>
                    <h1 className='font-bold'>Prokash Paul</h1>
                    <small>Lecturer</small>
                </div>
            </div>

            <hr className='border-1 mt-5 mx-5 mb-10 border-slate-400'></hr>


            <div className='flex  flex-col text-slate-600 gap-5'>
                <Link to={'/tc/'}><div className={`${tcLeftRoute == 0 && 'bg-slate-50 '} rounded-lg py-2 px-5 hover:bg-slate-200  cursor-pointer	 flex items-center gap-6 font-bold`}>
                    <AiTwotoneHome className='w-7 h-7' />
                    <h2>Home</h2>
                </div>
                </Link>

                <Link to={'/tc/classroom/'}><div className={`${tcLeftRoute == 1 && 'bg-slate-50 '} rounded-lg py-2 px-5 hover:bg-slate-200  cursor-pointer	 flex items-center gap-6 font-bold`}>
                    <SiGoogleclassroom className='w-7 h-7' />
                    <h2>Classroom</h2>
                </div>
                </Link>


            </div>
        </div>
    );
};

export default LeftSideBar;