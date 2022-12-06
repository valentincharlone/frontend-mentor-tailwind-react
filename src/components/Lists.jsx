import { Draggable, Droppable } from "@hello-pangea/dnd";
import React from "react";

import Item from "./Item";

const List = ({ lists, deleteItem, updateItem }) => {
    return (
        <Droppable droppableId="tasks">
            {
                (droppable) => (

                    <div 
                        ref={droppable.innerRef} 
                        {...droppable.droppableProps} 
                        className="mt-8 mx-auto container rounded-t-md overflow-hidden bg-white 
                        [&>article]:p-4 dark:bg-gray-800 transition-all duration-1000"
                    >
                        {lists.map((list, index) => (
                            <Draggable key={list.id} index={index} draggableId={`${list.id}`}>
                                {
                                    (draggable) => (
                                        <Item
                                            key={list.id}
                                            list={list}
                                            deleteItem={deleteItem}
                                            updateItem={updateItem}
                                            ref={draggable.innerRef}
                                            {...draggable.dragHandleProps}
                                            {...draggable.draggableProps}
                                        />
                                    )
                                }
                            </Draggable>
                        ))}

                        {droppable.placeholder}
                    </div>
                )
            }
        </Droppable>
    );
};

export default List;
