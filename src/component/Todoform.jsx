import { useState } from "react";
import { useTodo } from "../Context";

function TodoForm() {
    
    const [todo,settodo] = useState('');
    const {addToDo} = useTodo();

    const add = (e) => {
        e.preventDefault();

        if(!todo) return 

        addToDo({todo , completed:false}); //field ka naam aur value ka naam same hai toh todo:todo ki jagah todo likh skte hai
        settodo('');
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => settodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;