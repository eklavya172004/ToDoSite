import { forwardRef } from "react"
import Task from "./Task";

const TaskPage = forwardRef(function TaskPage({onShow,titleref,dateref,descriptionref,onAddView},ref){

    return(
        <div className={onAddView  ? 'm-10 overflow-hidden flex flex-col': 'hidden'} >
            <div className="w-full flex">
            <h2 className="flex  text-3xl font-semibold">
                { titleref && titleref.current ? titleref.current.value : '' }
                </h2>
            <button className=" border border-b-gray-600 font-semibold ml-[500px] p-3">Delete</button>
            </div>

            <div className="font-semibold text-gray-500">
                { dateref && dateref.current? dateref.current.value : '' }
                </div>

            <textarea name="" className=" w-[80%] mt-9 text-xl h-28 border-b-gray-800 border outline-none resize-none no-scrollbar " id="" disabled   value={ descriptionref && descriptionref.current ? descriptionref.current.value : '' }>
                </textarea>
            <hr className="w-full bg-slate-300 mt-5 h-[2px] " />
            <Task />
        </div>
    )
})
export default TaskPage;