'use client';
import { useSelector } from "react-redux";
import { FilterItem } from "./UI/FilterItem";

export function Filter() {
    const filter = useSelector(state => state.filter);
    return (
        <div className="flex gap-3">
            <FilterItem type='all' active={filter === 'all'}>All</FilterItem>
            <FilterItem type='inProgress' active={filter === 'inProgress'}>In progress</FilterItem>
            <FilterItem type='finished' active={filter === 'finished'}>Finished</FilterItem>
        </div>
    );
}