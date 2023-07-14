'use client';
import { useSelector } from "react-redux";
import { Task } from "./Task"

export function TaskList() {
    const lel = useSelector(state => state.todo);

    return (
        <div className="flex flex-col gap-3">
            {lel.map(el => (
                <Task key={el.toString()}>{el}</Task>
            ))}
        </div>
    );
}