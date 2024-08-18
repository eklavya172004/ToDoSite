import { useRef, useState } from "react"

export default function Task(){

    const [task,setTask] = useState('');
    const inputTask = useRef();

    function AddedTask(){
            const Tasktext = inputTask.current.value;
            setTask(setTask => [...setTask,Tasktext]);  
            inputTask.current.value = '' ;    
    }

    function DeleteTask(index){
            setTask(setdelete => setdelete.filter((_,i) => i !==index ));
            console.log(index);
    }

    return(
        <section className="flex flex-col">
        <h2 className="text-3xl mt-5 font-semibold">Task</h2>

            <div className="flex items-center gap-4 text-center">
            <input type="text" className="bg-slate-200 outline-none w-96 mt-5 p-2 border border-b-green-700" ref={inputTask}/>

            <button type="button" className="mt-5" onClick={AddedTask} >Add Task</button>
            </div>

            <div className=" w-full mt-5 ">
                <ul>{task.length === 0 ? <p></p> : task.map((task,index) =>(
                     <li key={index} className="mb-2 flex justify-between bg-slate-200 p-2 text white w-[600px] "><p className="w-96 break-words"> {`${index + 1}.${task}`}</p> <button onClick={() => DeleteTask(index)}>Delete</button> </li> 
                      ) )}</ul>
            </div>
        </section>
    )
}