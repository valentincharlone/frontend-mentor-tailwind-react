import React from "react";

const Filter = ({ changeFilter, filter }) => {
    return (
        <section>
            <div className=" mt-8 mx-auto container flex justify-center gap-6 rounded-md bg-white p-4 dark:bg-gray-800 transition-all duration-1000">
                <button
                    className={` ${
                        filter === "all"
                            ? "text-blue-600 hover:text-gray-400"
                            : "text-gray-400 hover:text-blue-600"
                    }`}
                    onClick={() => changeFilter("all")}
                >
                    All
                </button>
                <button
                    className={` ${
                        filter === "active"
                            ? "text-blue-600 hover:text-gray-400"
                            : "text-gray-400 hover:text-blue-600"
                    }`}
                    onClick={() => changeFilter("active")}
                >
                    Active
                </button>
                <button
                    className={` ${
                        filter === "completed"
                            ? "text-blue-600 hover:text-gray-400"
                            : "text-gray-400 hover:text-blue-600"
                    }`}
                    onClick={() => changeFilter("completed")}
                >
                    Completed
                </button>
            </div>
        </section>
    );
};

export default Filter;
