import React from "react";
import StartingMenu from "./StartingMenu";
import ProjectCreation from "./ProjectCreation";
import ProjectDetails from "./ProjectDetails";

function MainContainer({ removeProject, creatingProject, selectedProject, setCreatingProjectState, addProject }) {
    return (
        selectedProject ?
            <ProjectDetails removeProject={removeProject} selectedProject={selectedProject} /> :
            !creatingProject ?
                <StartingMenu setCreatingProjectState={setCreatingProjectState} /> :
                <ProjectCreation addProject={addProject} setCreatingProjectState={setCreatingProjectState} />
    );
}

export default MainContainer;