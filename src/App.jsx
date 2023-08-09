
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Header/Navbar'
import LeftSideBar from './Components/Header/LeftSideBar'
import RightSideBar from './Components/Header/RightSideBar'


function App() {
	console.log("Hare Krishna ")


	return (
		<div className='p-10 min-w-screen min-h-screen rounded-lg'>
			<Navbar></Navbar>
			<div className='flex py-5 gap-5'>
				<div className='w-2/12'><LeftSideBar></LeftSideBar></div>
				<div className='w-8/12'><Outlet></Outlet></div>
				<div className='w-2/12'><RightSideBar></RightSideBar></div>
			</div>
		</div>
	)
}

export default App
