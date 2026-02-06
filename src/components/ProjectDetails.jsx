import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import selectedProjectImage from "../assets/project.png";
import Button from "./Button";
import TaskItem from "./TaskItem";
import TaskCreation from "./TaskCreation";

function ProjectDetails({ removeProject, selectedProject }) {

    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const removeTask = (task) => {
        setTasks(tasks.filter((t) => t.id !== task.id));
    };

    return (
        <div className="w-full bg-white">
            <div className="w-full max-w-3xl mx-auto p-4 md:p-8">
                <div className="md:border-0 border-black rounded-xl bg-white p-4 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3 flex items-center justify-center">
                            <img
                                src={selectedProjectImage}
                                alt="Selected Project Image"
                                className="w-[160px] h-[160px] md:w-[200px] md:h-[200px]
                       object-cover rounded-xl border-2 border-black"
                            />
                        </div >

                        {/* Right: text */}
                        < div className="md:w-2/3 flex flex-col gap-2" >
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                                <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                                    {selectedProject.name}
                                </h1>

                                <p className="text-sm md:text-base text-gray-600 sm:text-right">
                                    {selectedProject.date}
                                </p>
                            </div>

                            <p className="text-sm md:text-base text-gray-600 text-justify hyphens-auto">
                                {selectedProject.description}
                            </p>

                            {/* Delete */}
                            <div className="mt-4 flex justify-end">
                                <Button onClick={() => removeProject(selectedProject)}>
                                    Delete
                                </Button>
                            </div>
                        </div >
                    </div >

                    {/* Divider */}
                    < div className="my-6 border-t-2 border-black/20" />

                    {/* Bottom: Tasks */}
                    < div className="flex flex-col gap-3" >
                        <TaskCreation addTask={addTask} />
                        <ul className="mt-2 flex flex-col gap-2">
                            {tasks.map((task) => (
                                <TaskItem key={task.id} task={task} removeTask={removeTask} />
                            ))}
                        </ul>
                    </div >

                </div >
            </div >
        </div >
    );
}


export default ProjectDetails;