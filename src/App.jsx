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
    console.log("hifjiewdnjs vnmfjvfnnjvnjrvmnjre rjvmdnjr j");
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  }

  let content;

  if (projectsState.selectedProject === null) {
    content = <NewProject />;
  } else if (projectsState.selectedProject === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
