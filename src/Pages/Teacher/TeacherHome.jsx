import { useContext } from "react";
import { Context } from "../../Context/EduContext";


const TeacherHome = () => {

  const {tcLeftRoute, setTcLeftRoute} = useContext(Context);
    setTcLeftRoute(0)


  return (
    <div className="flex flex-col gap-5 bg-slate-50 text-slate-600 p-10 rounded-xl">
      Hare Krishna
    </div>
  );
};

export default TeacherHome;