'use client';
import { useDispatch } from 'react-redux';
import './uiStyles.css';
import { removeTodo } from '@/store/todo';

export function DeleteButton({id}) {
    const dispatch = useDispatch();
    
    return (
        <div className="deleteButton" onClick={() => dispatch(removeTodo(id))}></div>
    );
}