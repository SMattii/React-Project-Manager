import React from "react";

function TaskItem({ task, removeTask }) {
    return (
        <li className="border-2 border-black rounded-md px-4 py-2 hover:bg-black hover:text-white transition-colors duration-300">
            <span className="flex gap-20 items-center justify-between">
                {task.text}
                <button onClick={() => removeTask(task)}>
                    Remove
                </button>
            </span>
        </li>
    );
}

export default TaskItem;