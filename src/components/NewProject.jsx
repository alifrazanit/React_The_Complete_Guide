import { useRef } from "react";
import { Input } from "./Input";


export const NewProject = ({onStartAddProject}) => {
    const title = useRef();
    const desc = useRef();
    const duedate = useRef();


    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="text-stone-800 hover:text-stone-950">Cancel</button></li>
                <li><button className="px-6 py-2 text-stone-800 text-stone-50 hover:text-stone-950">Save</button></li>
            </menu>
            <div>
                <Input ref={title} label="Title"/>
                <Input ref={desc} label="Description" textarea/>
                <Input ref={duedate} label="Due Date"/>
            </div>
        </div>
    )
}