import { useState } from "react";

import Sidebar from "./components/sidebar";
import NewProject from "./components/newProject";
import NoProjectSelected from "./components/noProjectSelected";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevState,
        selectedProject: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  let content;

  if (projectsState.selectedProject === null) {
    content = <NewProject onAddProject={handleAddProject} />;
  } else if (projectsState.selectedProject === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;
