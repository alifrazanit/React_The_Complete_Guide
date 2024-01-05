import { useRef, forwardRef } from "react";
import { Input } from "./Input";
import { Modal } from './Modal';

export const NewProject = ({ onAdd }) => {
  const title = useRef();
  const desc = useRef();
  const duedate = useRef();
  const modalRef = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDesc = desc.current.value;
    const enteredDuedate = duedate.current.value;

    if (
      String(enteredTitle).trim() === "" ||
      String(enteredDesc).trim() === "" ||
      enteredDuedate.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDesc,
      duedate: enteredDuedate,
    });
  };

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Okay">
        <h1>Invalid Input</h1>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 text-stone-800 text-stone-50 hover:text-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" />
          <Input ref={desc} label="Description" textarea />
          <Input ref={duedate} label="Due Date" type="date" />
        </div>
      </div>
    </>
  );
};
