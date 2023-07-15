'use client';
import { useSelector } from "react-redux";
import { Checkbox } from "./UI/Checkbox";
import { DeleteButton } from "./UI/deleteButton";

export function Task({
    todo
}) {
    return (
        <div className="flex relative items-center w-full h-12 bg-white dark:bg-[#252945] dark:shadow-none px-4 justify-between gap-4 shadow-shadow rounded overflow-hidden">
            <Checkbox id={todo.id} finished={todo.finished}></Checkbox>
            <p className="text-black dark:text-white grow truncate pr-8">{todo.text}</p>
            <DeleteButton id={todo.id}></DeleteButton>
        </div>
    );
}