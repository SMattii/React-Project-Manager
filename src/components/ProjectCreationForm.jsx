import Input from "./Input";
import React from "react";

function ProjectCreationForm({ handleChange }) {
    return (
        <div className="flex flex-col gap-4 mt-4">
            <Input name="name" label="Project Name" placeholder="Enter project name" type="text" onChange={handleChange} />
            <Input name="description" label="Project Description" placeholder="Enter project description" type="text" onChange={handleChange} />
            <Input name="date" label="Project Date" placeholder="Enter project date" type="date" onChange={handleChange} />
        </div>
    );
}

export default ProjectCreationForm;