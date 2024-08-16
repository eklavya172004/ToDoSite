import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Create from "./Create";
import AddProject from "./AddProject";
export default function Landing(){

    const [isVisible , setHidden] = useState(false);

    function handleShow(){
        setHidden(true);
    }

    return(
        <section className={ isVisible ? 'bg-white flex' : "bg-white flex gap-72 w-full"}>
              <div className="bg-black w-96 mt-10 rounded-e-2xl h-screen ">
                    <h2 className="text-white p-10 text-4xl font-bold ">Your Projects</h2>
                    {/* <input type="text" placeholder=" /> */}
                    <div className="flex justify-start pl-10">
                    <button type="button" onClick={handleShow} className="text-gray-400 bg-zinc-700 p-3 rounded-lg font-medium text-lg flex justify-center items-center gap-2 hover:bg-zinc-600 transition-colors"><FaPlus /> Add Project</button>
                    </div>
              </div>
                <Create onVisible={isVisible}/>
                <AddProject onVisible={isVisible} />
        </section>
    )
}