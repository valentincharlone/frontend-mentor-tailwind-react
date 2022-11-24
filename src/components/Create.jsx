import React, { useState } from "react";

const Create = ({ createItem }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim()) {
            console.log("campos vacios");
            return setTitle("");
        }

        createItem(title);
        setTitle("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center gap-4 overflow-hidden 
            rounded-md  bg-white py-4 px-4 dark:bg-slate-800
            transition-all duration-1000 mx-auto container" 
        >
            <span className="inline-block h-7 w-7 rounded-full border-2"></span>
            <input
                type="text"
                className="w-full text-gray-500 outline-none dark:bg-slate-800 dark:text-gray-200 transition-all duration-1000"
                placeholder="Create a task . . ."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};

export default Create;
