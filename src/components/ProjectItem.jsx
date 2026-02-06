import React from "react";

function ProjectItem({ project, setSelectedProject }) {
    return (
        <li className="flex items-center justify-center w-[80%] h-10 bg-black text-white rounded-md font-bold
        px-4 py-2 border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-colors
        duration-300 cursor-pointer" onClick={() => setSelectedProject(project)}>
            {project.name}
        </li>
    );
}

export default ProjectItem;