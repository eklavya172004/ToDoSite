import { createContext,useContext } from 'react';
 
export const ToDoContext = createContext({
    todos:[
        {
            id:1,
            todo:'ToDo msg',
            completed:false
        }
    ],
    addToDo: (todo) => {},
    updatedToDo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}      //completed means checked
});

export  const useTodo = () => {
    return useContext(ToDoContext);
}

export const TodoProvider = ToDoContext.Provider 