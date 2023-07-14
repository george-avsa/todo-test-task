'use client';
import { useSelector } from "react-redux";
import { Task } from "./Task"

export function TaskList() {
    const todoList = useSelector(state => state.todo);

    return (
        <div className="flex flex-col gap-3">
            {todoList.map((todo) => (
                <Task key={todo.id} todo={todo}></Task>
            ))}
        </div>
    );
}