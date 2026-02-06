import React, { useState, useRef } from "react";
import ProjectCreationButtons from "./ProjectCreationButtons";
import ProjectCreationForm from "./ProjectCreationForm";
import { v4 as uuidv4 } from 'uuid';

function ProjectCreation({ addProject, setCreatingProjectState }) {
    console.count("ProjectCreation render");

    const projectRef = useRef({
        id: uuidv4(),
        name: "",
        description: "",
        date: "",
    });

    const handleChange = (e) => {
        projectRef.current[e.target.name] = e.target.value;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, description, date } = projectRef.current;

        if (!name || !description || !date) {
            alert("Please fill in all fields");
            return;
        }

        addProject(projectRef.current);

        projectRef.current = {
            id: uuidv4(),
            name: "",
            description: "",
            date: "",
        };

        setCreatingProjectState(false);
    };


    const handleCancel = (e) => {
        e.preventDefault();
        projectRef.current = {
            id: uuidv4(),
            name: "",
            description: "",
            date: "",
        };
        setCreatingProjectState(false);
    };

    return (
        <div className="flex w-full min-h-screen md:w-3/4 md:min-h-full items-start justify-start
  md:items-center md:justify-center bg-black p-4">
            <div className="
        w-full max-w-lg
        bg-white text-black border-4 border-black rounded-xl
        p-6 md:p-8 mt-8 md:mt-0
      ">
                <ProjectCreationButtons handleSubmit={handleSubmit} handleCancel={handleCancel} />
                <ProjectCreationForm handleChange={handleChange} />
            </div>
        </div>
    );
}

export default ProjectCreation;