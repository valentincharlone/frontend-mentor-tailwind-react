import React from "react";
import CheckIcon from "./icons/CheckIcon";
import CossIcon from "./icons/CossIcon";

const Item = ({ list, deleteItem , updateItem }) => {
    return (
        <>
            <article className="flex gap-4  border-b border-b-gray-500 ">
                <button
                    className={`h-7 w-7 flex-none rounded-full border-2 ${
                        list.completed
                            ? "flex items-center justify-center  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                            : "inline-block"
                    }`}
                    onClick={() => updateItem(list.id)}
                >
                    {list.completed && <CheckIcon />}
                </button>
                <p
                    className={`grow text-gray-600 dark:text-gray-300  ${
                        list.completed && "line-through "
                    }`}
                >
                    {list.title}
                </p>
                <button className="flex-none" onClick={() => deleteItem(list.id)}>
                    <CossIcon />
                </button>
            </article>
        </>
    );
};

export default Item;
