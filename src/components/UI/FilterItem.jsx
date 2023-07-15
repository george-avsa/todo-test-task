'use client';

import { changeSelector } from "@/store/filter";
import { useDispatch } from "react-redux";

export function FilterItem({children, active, type}) {
    const dispatch = useDispatch();
    return (
        <div onClick={() => dispatch(changeSelector(type))} className="h-10 px-7 sm:px-4 bg-gray-100 dark:bg-[#252945] dark:text-white text-black rounded flex items-center gap-1 cursor-pointer">
            {active && <div className="w-2 h-2 rounded-full bg-black dark:bg-white"></div>}
            {children}
        </div>
    );
}