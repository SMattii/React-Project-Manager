import React from "react";
import Button from "./Button";
import ProjectItem from "./ProjectItem";

function Sidebar({ projectList, setCreatingProjectState, setSelectedProject }) {
    return (
        <div className="
        flex flex-col items-center
        justify-center
        mt-12 md:mt-0
        md:w-1/4 bg-white text-black
        gap-6 md:gap-8 border-r-0 md:border-r-8 border-black"
        >
            <h1 className="text-4xl font-bold">Your Projects</h1>
            <Button onClick={() => setCreatingProjectState(true)}>+ Add Project</Button>
            <ul className="flex flex-col items-center gap-4 w-full">
                {projectList.map((project) => (
                    <ProjectItem key={project.id} project={project} setSelectedProject={setSelectedProject} />
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;