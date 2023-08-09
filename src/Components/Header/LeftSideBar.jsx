import React, { useContext } from 'react';
import { AiTwotoneHome, AiFillSchedule, AiTwotoneStar, AiTwotoneVideoCamera } from 'react-icons/ai'
import { SiGoogleclassroom } from 'react-icons/si'
import { CgLoadbarDoc } from 'react-icons/cg'
import { FaGamepad } from 'react-icons/fa'
import { GiPublicSpeaker } from 'react-icons/gi'
import { Context } from '../../Context/EduContext';


const LeftSideBar = () => {

    const { leftRoute } = useContext(Context)


    return (
        <div className='flex  flex-col text-slate-600 gap-5'>
            <div className={`${ leftRoute==0 &&'bg-slate-50 ' } rounded-lg py-2 px-5 hover:bg-slate-200  cursor-pointer	 flex items-center gap-6 font-bold`}>
                <AiTwotoneHome className='w-7 h-7'/>
                <h2>Home</h2>
            </div>

            <div className={`${ leftRoute==1 &&'bg-slate-50 ' } rounded-lg py-2 px-5 hover:bg-slate-200  cursor-pointer	 flex items-center gap-6 font-bold`}>
                <SiGoogleclassroom className='w-7 h-7'/>
                <h2>Classroom</h2>
            </div>

            <div className={`${ leftRoute==2 &&'bg-slate-50 ' } rounded-lg py-2 px-5 hover:bg-slate-200  cursor-pointer	 flex items-center gap-6 font-bold`}>
                <AiFillSchedule className='w-7 h-7'/>
                <h2>Schedule</h2>
            </div>

            <div className={`${ leftRoute==3 &&'bg-slate-50 ' } rounded-lg py-2 px-5 hover:bg-slate-200  cursor-pointer	 flex items-center gap-6 font-bold`}>
                <CgLoadbarDoc className='w-7 h-7'/>
                <h2>Tests</h2>
            </div>

            <div className={`${ leftRoute==4 &&'bg-slate-50 ' } rounded-lg py-2 px-5 hover:bg-slate-200  cursor-pointer	 flex items-center gap-6 font-bold`}>
                <AiTwotoneStar className='w-7 h-7'/>
                <h2>Bonuses</h2>
            </div>

            <div className={`${ leftRoute==5 &&'bg-slate-50 ' } rounded-lg py-2 px-5 hover:bg-slate-200  cursor-pointer	 flex items-center gap-6 font-bold`}>
                <GiPublicSpeaker className='w-7 h-7'/>
                <h2>Speaking clubs</h2>
            </div>

            <div className={`${ leftRoute==6 &&'bg-slate-50 ' } rounded-lg py-2 px-5 hover:bg-slate-200  cursor-pointer	 flex items-center gap-6 font-bold`}>
                <AiTwotoneVideoCamera className='w-7 h-7'/>
                <h2>Video</h2>
            </div>

            <div className={`${ leftRoute==7 &&'bg-slate-50 ' } rounded-lg py-2 px-5 hover:bg-slate-200  cursor-pointer	 flex items-center gap-6 font-bold`}>
                <FaGamepad className='w-7 h-7'/>
                <h2>Games</h2>
            </div>
        </div>
    );
};

export default LeftSideBar;