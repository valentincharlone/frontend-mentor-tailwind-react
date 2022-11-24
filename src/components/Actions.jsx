import React from "react";

const Actions = ({ actionesItemsLeft, clearCompleted }) => {
    return (
        <section className="flex justify-between rounded-b-md bg-white py-4 px-4 dark:bg-gray-800  transition-all duration-1000 mx-auto container" >
            <span className="text-gray-500 dark:text-gray-300">
                {actionesItemsLeft} items left
            </span>
            <button className="text-gray-500 dark:text-gray-300" onClick={clearCompleted}>
                Clear Completed
            </button>
        </section>
    );
};

export default Actions;
