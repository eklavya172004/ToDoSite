import { useRef, useState } from "react"
import TaskPage from "./TaskPage";

export default function AddProject({onVisible,onSet,setOnvisible,setLandingPage,onTask,setHideTask}){

    const titleName = useRef();
    const date = useRef();
    const description = useRef();

    const [taskShow,SetTaskShow] = useState(false);

    function handleset(){
            const titlename = titleName.current.value;
            const description2 = description.current.value;
            const date2 = date.current.value;
            console.log(titlename);
            console.log(description2);
            console.log(date2);

            onSet(titlename);
            SetTaskShow(true);
            setOnvisible(true);
            setLandingPage(false);   
            setHideTask(true); 
    }

    return(
        <>
        <div className={onVisible ? 'm-10 flex flex-col w-[50%] gap-2' : 'hidden' }  >
                <div className="flex gap-2 ml-[500px]">
                <button type="button" className="bg-white ">Cancel</button>
                <button type="button" className="bg-black p-2 rounded-lg text-white w-24" onClick={handleset} >Save</button>
                </div>
                <div>
            <h2 className="text-gray-400 font-bold text-2xl">Title</h2>
            <input type="text" placeholder="Name of task"  className="outline-none bg-stone-200 w-full p-2" ref={titleName} />
                </div>

                <div>
            <h2 className="text-gray-400 font-bold text-2xl">Description</h2>

            <textarea name="" id="textarea" placeholder="Enter details of task" className="outline-none resize-none text-gray-500 text-lg bg-stone-200 w-full p-2 font-semibold h-24 scroll-m-0 no-scrollbar " ref={description} ></textarea>
            {/* <textarea placeholder="enter the details " className="outline-none resize-none" className="bg-stone-200 w-full p-2" /> */}
                </div>

             <h2 className="text-gray-400 font-bold text-2xl">Date</h2>
             <input type="date" name="date" id="date" className="border-2 border-b-gray-900 outline-none" ref={date} /> 

            
        </div>
        <div className="">
            <TaskPage  onShow={taskShow} titleref={titleName} dateref={date} descriptionref={description} onAddView={onTask} />
        </div>
        </>

    )
}