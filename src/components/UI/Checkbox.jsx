'use client';

import './uiStyles.css';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '@/store/todo';

export function Checkbox({
    id,
    finished
}) {
    const dispatch = useDispatch();

    function toggleStatus() {
        dispatch(toggleTodo(id))
    }

    return (
        <div>
            <input 
                type="checkbox" 
                className="checkbox" 
                id={`taskCheckbox${id}`} 
                name={`taskCheckbox${id}`} 
                value="yes"
                style={{opacity: "0"}}
                checked={finished}
                onChange={toggleStatus}
            />
            <label htmlFor={`taskCheckbox${id}`}></label>
        </div>
    );   
}