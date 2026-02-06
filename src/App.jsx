import Sidebar from "./components/Sidebar";
import MainContainer from "./components/MainContainer";
import { useState } from "react";

function App() {
  const [creatingProject, setCreatingProject] = useState(false);
  const [managmentState, setManagmentState] = useState({
    projects: [],
    selectedProject: null,
  });

  function setSelectedProject(project) {
    setManagmentState({
      ...managmentState,
      selectedProject: project,
    });
  }

  const setCreatingProjectState = (value) => {
    setCreatingProject(value);
    value ? setManagmentState({
      ...managmentState,
      selectedProject: null,
    }) : null;
  };

  const addProject = (project) => {
    setManagmentState({
      ...managmentState,
      projects: [...managmentState.projects, project],
    });
  };

  const removeProject = (project) => {
    setManagmentState({
      ...managmentState,
      projects: managmentState.projects.filter((p) => p.id !== project.id),
      selectedProject: null,
    });
  };

  return (
    <main className="flex flex-col gap-8 md:gap-0 md:flex-row w-screen h-screen">
      <Sidebar
        setSelectedProject={setSelectedProject}
        projectList={managmentState.projects}
        setCreatingProjectState={setCreatingProjectState}
        creatingProject={creatingProject}
      />
      <MainContainer
        removeProject={removeProject}
        selectedProject={managmentState.selectedProject}
        addProject={addProject}
        setCreatingProjectState={setCreatingProjectState}
        creatingProject={creatingProject}
      />
    </main>
  );
}

export default App;
