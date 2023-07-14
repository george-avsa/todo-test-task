'use client';
import { useSelector } from "react-redux";
import { Task } from "./Task"

export function TaskList() {
    const todoList = useSelector(state => state.todo);
    const filter = useSelector(state => state.filter);

    function filterFunction(todo) {
        return (filter === 'all' 
            || (filter === 'finished' && todo.finished)
            || (filter === 'inProgress' && !todo.finished));
    }

    return (
        <div className="flex flex-col gap-3 pb-5">
            {todoList.filter(todo => filterFunction(todo)).map((todo) => (
                <Task key={todo.id} todo={todo}></Task>
            ))}
        </div>
    );
}