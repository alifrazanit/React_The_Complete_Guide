import { useState } from "react";
import { NewProject } from "./components/NewProject";
import { NoProjectSelected } from "./components/NoProjectSelected";
import { SideBar } from "./components/SideBar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: null,
    projects: [],
  });

  const handleStartAddProject = () => {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  };

  const handleSaveProject = (data) => {
    setProjectState((prevData) => {
      const projectId = Math.random();
      const newProject = {
        ...data,
        id: projectId,
      };

      return {
        ...prevData,
        selectedProjectId: undefined,
        projects: [...prevData.projects, newProject],
      };
    });
  };

  const onSelectRow = (row) => {
    setProjectState((prevData) => {
      return {
        ...prevData,
        selectedProjectId: row.id
      }
    })
  }

  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleSaveProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else if(projectState.selectedProjectId !== null) {
    content = <NewProject onAdd={handleSaveProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar 
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}  
        onSelectRow={(row) => onSelectRow(row)}
      />
      {content}
    </main>
  );
}

export default App;
