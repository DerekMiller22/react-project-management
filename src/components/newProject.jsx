import Input from "./input";

export default function NewProject() {
  return (
    <div>
      <menu>
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button>Save</button>
        </li>
      </menu>
      <div>
        <Input label="title" />
        <Input label="Description" textArea={true} />
        <Input label="Due Date" />
      </div>
    </div>
  );
}
