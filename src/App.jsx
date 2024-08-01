import Sidebar from "./components/sidebar";
import NewProject from "./components/newProject";
import NoProjectSelected from "./components/noProjectSelected";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      <NewProject />
      {/* <NoProjectSelected /> */}
    </main>
  );
}

export default App;
