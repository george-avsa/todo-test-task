'use client';

import { toggleTheme } from "@/store/theme";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export function ThemeToggler() {
    const dispatch = useDispatch();

    // изменение темы
    // тема в tailwind задается в теге html в классе, однако тег html используется в layout и 
    // рендерится на сервере, поэтому переключение темы реализовано через useRef.
    const html = useRef(null);
    const theme = useSelector(state => state.theme);
    useEffect(() => {
        html.current = document.querySelector('html');
    }, [])
    useEffect(() => {
        if (html.current) {
            html.current.setAttribute('class', theme)
        }
    }, [html, theme])

    return (
        <div 
            className={`flex items-center justify-center w-10 h-10 fixed z-20 left-3 bottom-3 p-2 
            rounded bg-white dark:bg-[#1E2139] shadow cursor-pointer bg-no-repeat 
            bg-[url(../../public/sun.svg)] dark:bg-[url(../../public/moon.svg)] bg-center`}
            onClick={() => dispatch(toggleTheme())}
        >
        </div>
    );
}