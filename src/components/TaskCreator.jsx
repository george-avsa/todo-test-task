'use client';

import { changeValue } from "@/store/form";
import { addTodo } from "@/store/todo";
import { useDispatch, useSelector } from "react-redux";

export function  TaskCreator() {
    const formValue = useSelector(state => state.form);
    const dispatch = useDispatch();

    function clickHandler() {
        if (formValue) {
            dispatch(addTodo(formValue))
            dispatch(changeValue(''))
        }
    }

    return (
        <form className="flex gap-3.5 w-full h-12" onSubmit={(e) => e.preventDefault()}>
            <input 
                type="text" 
                className={`grow h-full rounded border-2 border-slate-200 
                border-solid px-3 text-black focus:outline outline-1 outline-[#D6D6D6]`}
                placeholder="For expample: Learn Javascript"
                value={formValue}
                onChange={(e) => dispatch(changeValue(e.target.value))}
            />
            <button
                onClick={clickHandler} 
                className={`w-12 h-12 border-2 rounded bg-white border-slate-200 cursor-pointer
                border-solid bg-[url(../../public/creationIcon.svg)] bg-no-repeat bg-center`}
            ></button>
        </form>
    );
}