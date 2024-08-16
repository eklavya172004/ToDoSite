// import image from './assets/no-projects.png'
// import { FaPlus } from "react-icons/fa";
import image from '../assets/no-projects.png'

export default function Create({onVisible}){
   
 return(
        
        <div className={onVisible? 'hidden' : 'flex flex-col gap-5  justify-center items-center ' }>
            <img src={image} alt="createimage" width={100} height={100} className="mr-7" />
            <h2 className='font-semibold text-3xl text-zinc-300'>No projects selected yet</h2>
            <p className='text-lg text-gray-500 font-bold'>Select a new project or get started with new</p>
            {/* <button className="p-10 ">Create new Project<FaPlus /></button> */}
            <button type="button" className="flex text-lg font-medium justify-center items-center text-stone-300 rounded-2xl w-52 p-2 bg-stone-700" disabled> <p> Create new project </p></button>
        </div>
    )
}