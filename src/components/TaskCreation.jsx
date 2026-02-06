// TaskCreation.jsx
import { useState, useRef } from "react";

function TaskCreation({ addTask }) {
    const [newTask, setNewTask] = useState({
        text: "",
    });
    const inputRef = useRef(null);


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

        inputRef.current?.focus();
    }

    return (
        <div className="flex flex-col gap-3">
            <h2 className="text-lg font-bold tracking-tight">Tasks</h2>

            <div className="flex flex-col gap-2 sm:flex-row">
                <input
                    ref={inputRef}
                    type="text"
                    onChange={(e) => setNewTask({ ...newTask, text: e.target.value })}
                    placeholder="Add a new task..."
                    value={newTask.text}
                    className="
    w-full rounded-md
    border-2 border-black
    bg-white px-4 py-2 text-black
    placeholder:text-gray-400

    transition-shadow duration-300
    focus:outline-none focus:bg-gray-100

    hover:shadow-[0_0_8px_2px_rgba(0,0,0,0.35)]
    focus:shadow-[0_0_12px_3px_rgba(0,0,0,0.45)]
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