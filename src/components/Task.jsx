'use client';
import { useSelector } from "react-redux";
import { Checkbox } from "./UI/Checkbox";
import { DeleteButton } from "./UI/deleteButton";

export function Task({
    children
}) {
    return (
        <div className="flex relative items-center w-full h-12 bg-white px-4 justify-between gap-4 shadow-shadow rounded overflow-hidden">
            <Checkbox id={children}></Checkbox>
            <p className="text-black grow truncate pr-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quidem minus facilis sed iure, animi, blanditiis possimus omnis quaerat hic, placeat quos doloribus obcaecati. Voluptatum nesciunt facilis magni voluptates enim optio tempora nam hic earum sequi neque debitis doloribus odio, quasi at unde, vel reprehenderit, dolor quisquam obcaecati. Tempore autem officia consequuntur! Aut ab architecto, cum molestias veritatis soluta explicabo eum, laboriosam adipisci voluptatum, impedit ea nostrum autem laudantium! Recusandae molestias optio debitis officiis quia quisquam assumenda, numquam magnam nesciunt? Molestiae voluptates voluptatum ipsa dicta quo totam? Laboriosam numquam distinctio nostrum aperiam magni dolorem quas cupiditate molestias, voluptate quidem hic!</p>
            <DeleteButton></DeleteButton>
        </div>
    );
}