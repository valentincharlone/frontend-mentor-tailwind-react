import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import React, { useEffect, useState } from "react";
import Actions from "./components/Actions";
import Create from "./components/Create";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/Lists";

const initialStateLists = JSON.parse(localStorage.getItem('tasks'))|| []

const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
}

const App = () => {

    const [lists, setLists] = useState(initialStateLists);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(lists))
    }, [lists])

    const createItem = (title) => {
        const newItem = {
            id: Date.now(),
            title,
            completed: false,
        };
        setLists([...lists, newItem]);
    };

    const deleteItem = (id) => {
        setLists(lists.filter((list) => list.id !== id));
    };

    const updateItem = (id) => {
        setLists(
            lists.map((list) =>
                list.id === id
                    ? {
                          ...list,
                          completed: !list.completed,
                      }
                    : list
            )
        );
    };

    const actionesItemsLeft = lists.filter((list) => !list.completed).length;

    const clearCompleted = () => {
        setLists(lists.filter((list) => !list.completed));
    };

    const [filter, setFilter] = useState("all");

    const changeFilter = (filter) => setFilter(filter);

    const filterLists = () => {
        switch (filter) {
            case "all":
                return lists;
            case "active":
                return lists.filter((list) => !list.completed);
            case "completed":
                return lists.filter((list) => list.completed);
            default:
                return lists;
        }
    };

    const handleDragEnd = (result) =>{
        const { destination, source } = result;
        if (!destination) return;
        if (source.index === destination.index && source.droppableId === destination.droppableId) return;

        setLists((prevTasks) =>
            reorder(prevTasks, source.index, destination.index)
        );
    }

    return (
        <div
            className="min-h-screen 
             bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat
             dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] transition-all duration-1000
             md:bg-[url('./assets/images/bg-desktop-light.jpg')]
             md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]
             "
        >
            <Header />

            <main className="container mx-auto mt-14 px-4 md:max-w-4xl ">
                <Create createItem={createItem} />

                <DragDropContext onDragEnd={handleDragEnd}>
                    <List
                        lists={filterLists()}
                        deleteItem={deleteItem}
                        updateItem={updateItem}
                    />
                </DragDropContext>

                <Actions
                    actionesItemsLeft={actionesItemsLeft}
                    clearCompleted={clearCompleted}
                />

                <Filter changeFilter={changeFilter} filter={filter} />
            </main>

            <Footer />
        </div>
    );
};

export default App;
