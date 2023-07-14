import { Task } from "./Task"

export function TaskList() {
    return (
        <div className="flex flex-col gap-3">
            {[1, 3].map(el => (
                <Task key={el.toString()}>{el}</Task>
            ))}
        </div>
    );
}