
import { Outlet } from 'react-router-dom';
import LeftSideBar from './LeftSidebar';

const TeacherMain = () => {
    return (
        <div className=' flex gap-10 p-10 min-w-screen min-h-screen rounded-lg'>
            <div className='w-2/12'><LeftSideBar></LeftSideBar></div>
            <div className='w-8/12 bg-slate-50 rounded-xl p-10'><Outlet></Outlet></div>
        </div>
    );
};

export default TeacherMain;