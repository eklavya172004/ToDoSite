import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Create from "./Create";
import AddProject from "./AddProject";
// import TaskPage from "./TaskPage";npom run 

export default function Landing(){

    // const [Taskshow,SetTaskShow] = useState(false);
    const [isVisible , setHidden] = useState(false);
    const [taskView,setHideTask] = useState(false);
    const [isVisibleLandingPage,setLandingPage] = useState(false);
    const [titleName,setTitleName] = useState('');
    const [clickCount,setCount] = useState(0);

    function handleShow(){
        setHidden(true);
        // setLandingPage(true);
    }

    function handleLandingPage(){
        setCount( prevCount => {

        const count = prevCount + 1;

        if(count === 1){
        setLandingPage(true);    
        setHideTask(false);
    }
    else {
        setHideTask(false);
        setLandingPage(true);
    }
        })
    }

    function handleTitle(titlename){
        setTitleName(setTitlename => [...setTitlename,titlename] );    
    }

    return(
        <section className={ isVisible ? ' bg-white flex' : "bg-white flex  w-full justify-between"}>
              <div className="flex  flex-col bg-black w-96 mt-10 rounded-e-2xl h-screen ">
                    <h2 className="text-white p-10 text-4xl font-bold ">Your Projects</h2>
                    {/* <input type="text" placeholder=" /> */}
                    <div className="flex justify-start  pl-10">
                    <button type="button" onClick={() =>  {handleShow(),handleLandingPage()}}     className="text-gray-400 bg-zinc-700 p-3 rounded-lg font-medium text-lg flex justify-center items-center gap-2 hover:bg-zinc-600 transition-colors"><FaPlus /> Add Project</button>
                    </div>

                    <p className="text-white text-xl p-5 rounded-2xl m-5">{titleName.length === 0? '' : titleName.map((task,index) => <li key={index}>{task}</li> ) }</p>
              </div>
                <Create onVisible={isVisible}/>
                <AddProject onVisible={isVisibleLandingPage } setOnvisible={setHidden} onSet={handleTitle} setLandingPage={setLandingPage} onTask={taskView} setHideTask={setHideTask} />
        </section>
    )
}