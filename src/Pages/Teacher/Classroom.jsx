import React, { useContext, useState } from 'react';
import { Context } from '../../Context/EduContext';

const Classroom = () => {

    const { tcLeftRoute, setTcLeftRoute } = useContext(Context);
    const [insrtScrn, setInsrtScrn] = useState(false)
    setTcLeftRoute(1);

    return (
        <div className='select-none relative flex flex-col gap-10 bg-slate-50 text-slate-600 p-10 rounded-xl'>
            Hare Krishna from classroom
            <div className='grid grid-cols-3 gap-5'>
                <Class></Class>
                <Class></Class>
                <Insert insrtScrn={insrtScrn} setInsrtScrn={setInsrtScrn}></Insert>
            </div>
            <Form insrtScrn={insrtScrn} setInsrtScrn={setInsrtScrn}></Form>
        </div>
    );
};




const Class = () => {
    return (
        <div className='select-none bg-slate-500 text-slate-50 rounded-xl border'>
            <img className='rounded-xl h-40 w-full' src='https://img.freepik.com/free-vector/chalkboard-with-math-elements_1411-88.jpg?w=900&t=st=1691342843~exp=1691343443~hmac=dc93e2ddbd9d018bdc50a2fbd6a15f26b2ec1e8743982433f46f28cf1486140b'></img>
            <div className='-translate-y-5 text-center flex flex-col items-center justify-center'>
                <h1 className='font-bold bg-slate-400 rounded-full p-2 text-center inline -translated-y-10'>Computer Science</h1>
                <small className=''>course code: 5555</small>
                <small className=''>course credit: 5</small>
            </div>
            <hr className='border-1'></hr>
            <div className='px-2 float-right'><small>10 people</small></div>
        </div>
    );
}


const Insert = ({ insrtScrn, setInsrtScrn }) => {
    return (
        <div onClick={() => window.my_modal_1.showModal()} className='cursor-pointer flex flex-col justify-center gap-5 items-center select-none h-full bg-slate-500 text-slate-50 rounded-xl border'>
            <h1 className='text-4xl font-bold border w-20 h-20 text-centerf flex items-center justify-center rounded-full'>+</h1>
            <h1>Create Classroom</h1>
        </div>
    )
}


const Form = ({ insrtScrn, setInsrtScrn }) => {

    const [img, setImg] = useState('')

    const set = (event) => {
        const src = event.target.files[0];
        const url = URL.createObjectURL(src)
        setImg(url)
        alert(url)
    }

    const btnEvnt = (event) =>
    {
        const form = event.target.form
        const title = form.title.value
        const code = form.code.value
        const value = {title, code}
        console.log("HK value is: ", value)

        fetch('http://localhost:5000/users/',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log("Hare Krishna from:  client ", data)
        })

    }


    return (
        // <div onMouseDown={()=>setInsrtScrn(!insrtScrn)}  className={`${!insrtScrn && "invisible"} flex items-center justify-center bg-slate-400 h-screen w-screen fixed left-0 top-0 bg-opacity-50`}>
        //     <div   className='z-40 cursor-pointer rounded-xl p-5 bg-slate-50'>
        //         <div>
        //             {/* <input className='px-5 py-3' placeholder='Your Name'></input> */}
        //             <input className='px-5 py-2 rounded-xl' placeholder='Course Name'></input>
        //         </div>
        //     </div>
        // </div>






        <div>
            {/* Open the modal using ID.showModal() method */}
            <dialog id="my_modal_1" className="modal bg-slate-50 bg-opacity-40">
                <form method="dialog" className="modal-box bg-slate-50">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <div className="py-4 grid grid-cols-2 gap-5">

                        <div className="form-control">
                            <label className="label">
                                {/* <span className="label-text">Your Email</span> */}
                            </label>
                            <label className="input-group input-group-vertical">
                                <span className='bg-slate-300'>Course Title: </span>
                                <input name = 'title' type="text" placeholder="Course Title" className=" bg-slate-100 input input-bordered" />
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                {/* <span className="label-text">Your Email</span> */}
                            </label>
                            <label className="input-group input-group-vertical">
                                <span className='bg-slate-300'>Course Code: </span>
                                <input name = 'code' type="text" placeholder="Course Code" className=" bg-slate-100 input input-bordered" />
                            </label>
                        </div>


                        <div className="form-control">
                            <label className="label">
                                {/* <span className="label-text">Your Email</span> */}
                            </label>
                            <label className="input-group input-group-vertical">
                                <span className='bg-slate-300'>Email</span>
                                <input type="text" placeholder="info@site.com" className=" bg-slate-100 input input-bordered" />
                            </label>
                        </div>



                        <div className="form-control">
                            <label className="label">
                                {/* <span className="label-text">Your Email</span> */}
                            </label>
                            <label className="input-group input-group-vertical">
                                <span className='bg-slate-300'>Email</span>
                                <input type="text" placeholder="info@site.com" className=" bg-slate-100 input input-bordered" />
                            </label>
                        </div>


                        <div className="form-control">
                            <label className="label">
                                {/* <span className="label-text">Your Email</span> */}
                            </label>
                            <label className="input-group input-group-vertical">
                                <span className='bg-slate-300'>Banner</span>
                                <input name = 'file' onChange={set} type="file" placeholder="photo" accept="image/png, image/gif, image/jpeg" className=" bg-slate-100 input input-bordered" />
                            </label>
                        </div>



                        <div className="form-control">
                            <img className='w-full h-full' src={`${img || 'https://as2.ftcdn.net/v2/jpg/04/75/81/33/1000_F_475813394_0WixuXzrBayNkMfPTeJ3YkJPTN8uzRqg.jpg'}`}></img>

                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className="modal-action m-0 flex items-center justify-center">
                            <button className="btn bg-slate-50 text-slate-700 hover:bg-slate-400">Close</button>
                        </div>
                        <button onClick={btnEvnt}  className="btn bg-slate-50 text-slate-700 hover:bg-slate-400">Submit</button>

                    </div>
                </form>
            </dialog>
        </div>
    )
}

export default Classroom;




// bishujana swami maharaj kirtan ?