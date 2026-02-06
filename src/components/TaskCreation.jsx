// TaskCreation.jsx
import { useState } from "react";

function TaskCreation({ addTask }) {
    const [newTask, setNewTask] = useState({
        text: "",
    });

    function onClickAddTask() {
        if (newTask.text.trim() === "") return;

        const task = {
            id: crypto.randomUUID(),
            text: newTask.text,
        };

        addTask(task);
        setNewTask({
            text: "",
        });
    }

    return (
        <div className="flex flex-col gap-3">
            <h2 className="text-lg font-bold tracking-tight">Tasks</h2>

            <div className="flex flex-col gap-2 sm:flex-row">
                <input
                    type="text"
                    onChange={(e) => setNewTask({ ...newTask, text: e.target.value })}
                    placeholder="Add a new task..."
                    value={newTask.text}
                    className="
            w-full rounded-md border-2 border-black
            bg-white px-4 py-2 text-black
            placeholder:text-gray-400
            transition-colors duration-200
            focus:bg-gray-100 focus:outline-none
          "
                />

                <button
                    onClick={onClickAddTask}
                    className="
            w-full rounded-md border-2 border-transparent
            bg-black px-4 py-2 text-white
            transition-colors duration-300
            hover:border-black hover:bg-white hover:text-black
            sm:w-auto
          "
                >
                    Add
                </button>
            </div>
        </div>
    );
}

export default TaskCreation;