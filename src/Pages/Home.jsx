import { FaChalkboardTeacher } from 'react-icons/fa'
import { AiFillClockCircle } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdGroup } from 'react-icons/md';


const Home = () => {
    return (
        <div className="">
            <Activities></Activities>
        </div>
    );
};


const Activities = () => {
    return (
        <div className="flex flex-col gap-5 bg-slate-50 text-slate-600 p-10 rounded-xl">
            <h1 className="font-bold text-2xl my-2">Next Activities</h1>
            <div className='bg-green-200 flex justify-between border px-3 py-4 rounded-xl'>
                <div className='flex gap-5'>
                    <div className='bg-green-700 inline-block p-3 rounded-lg'>
                        <FaChalkboardTeacher className='text-slate-50 w-5 h-5' />
                    </div>
                    <div className='flex flex-col justify-between'>
                        <div className='flex gap-5'>
                            <small>16 Nov 15:00</small>
                            <small className='flex items-center gap-2'>
                                <AiFillClockCircle />
                                1.5h</small>
                        </div>
                        <h1 className='font-bold'>Lesson with Teacher</h1>
                    </div>
                </div>

                <div className='flex items-center gap-5'>
                    <button className='bg-slate-50 hover:bg-slate-200 px-4 py-1'>Rechedule</button>
                    <button  className='bg-slate-50 hover:bg-slate-200 px-4 py-1'>To Calender</button>
                    <BsThreeDotsVertical/>
                </div>

            </div>


            <div className='bg-pink-200 flex justify-between border px-3 py-4 rounded-xl'>
                <div className='flex gap-5'>
                    <div className='bg-pink-700 inline-block p-3 rounded-lg'>
                        <MdGroup className='text-slate-50 w-5 h-5' />
                    </div>
                    <div className='flex flex-col justify-between'>
                        <div className='flex gap-5'>
                            <small>16 Nov 15:00</small>
                            <small className='flex items-center gap-2'>
                                <AiFillClockCircle />
                                1.5h</small>
                        </div>
                        <h1 className='font-bold'>speaking Club</h1>
                    </div>
                </div>

                <div className='flex items-center gap-5'>
                    <div className=' px-4 py-1 flex items-center'>
                        <img className='w-8 h-8 rounded-xl border-2 border-slate-50' src='https://i.imgur.com/asLPUCK.jpg' alt='not found' />
                        <img className='shadow-lg relative -left-3 w-9 h-9 rounded-xl border-2 border-slate-50 ' src='https://i.imgur.com/asLPUCK.jpg' alt='not found' />
                        <div className='shadow-xl relative flex items-center justify-center -left-6 w-10 h-10 rounded-xl border-2 bg-slate-50' >+8 </div>
                    </div>
                    <button  className='bg-slate-50 hover:bg-slate-200 px-4 py-1'>To Calender</button>
                    <BsThreeDotsVertical/>
                </div>

            </div>
        </div>
    )
}

export default Home;