import noProjectImage from "../assets/no-projects.png";
import Button from "./button";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center 2-2/3">
      <img
        src={noProjectImage}
        alt="broken tasks"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No project selected
      </h2>
      <p className="text-stone-400 mb-4">select a project or start new one</p>
      <p className="mt-8">
        <Button label="Create New Project" onClick={onStartAddProject}></Button>
      </p>
    </div>
  );
}
