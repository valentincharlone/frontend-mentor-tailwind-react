import React from "react";

import Item from "./Item";

const List = ({ lists, deleteItem, updateItem }) => {
    return (
        <div className="mt-8 mx-auto container rounded-t-md overflow-hidden bg-white [&>article]:p-4 dark:bg-gray-800 transition-all duration-1000">
            {lists.map((list) => (
                <Item
                    key={list.id}
                    list={list}
                    deleteItem={deleteItem}
                    updateItem={updateItem}
                />
            ))}
        </div>
    );
};

export default List;
