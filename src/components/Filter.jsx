'use client';
import { FilterItem } from "./UI/FilterItem";

export function Filter() {
    return (
        <div className="flex gap-3">
            <FilterItem active>All</FilterItem>
            <FilterItem>In progress</FilterItem>
            <FilterItem>Finished</FilterItem>
        </div>
    );
}