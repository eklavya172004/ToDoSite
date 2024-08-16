export default function AddProject({onVisible}){
    return(
        <div className={onVisible ? 'm-10 flex flex-col w-[50%] gap-2' : 'hidden'}>
                <div className="flex gap-2 ml-[500px]">
                <button type="button" className="bg-white ">Cancel</button>
                <button type="button" className="bg-black p-2 rounded-lg text-white w-24">Save</button>
                </div>
                <div>
            <h2 className="text-gray-400 font-bold text-2xl">Title</h2>
            <input type="text" placeholder="Name of task"  className="outline-none bg-stone-200 w-full p-2" />
                </div>

                <div>
            <h2 className="text-gray-400 font-bold text-2xl">Description</h2>

            {/* <textarea placeholder="enter the details " className="outline-none resize-none" className="bg-stone-200 w-full p-2" /> */}
                </div>
        </div>
    )
}