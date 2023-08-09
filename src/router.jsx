import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import App from "./App";
import Register from "./Pages/Register";
import LogIn from "./Pages/LogIn";
import TeacherMain from "./Pages/Teacher/TeacherMain";
import TeacherHome from "./Pages/Teacher/TeacherHome";
import Temp from "./Pages/Temp";
import Classroom from "./Pages/Teacher/Classroom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: '/tc',
        element: <TeacherMain></TeacherMain>,
        children: [
            {
                path: '/tc',
                element: <TeacherHome></TeacherHome>
            },
            {
                path: '/tc/classroom',
                element: <Classroom></Classroom>
            }
        ]
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/temp',
        element: <Temp></Temp>
    },
    {
        path: '/login',
        element: <LogIn></LogIn>
    }
])