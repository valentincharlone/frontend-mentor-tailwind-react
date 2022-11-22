import React from "react";
import CossIcon from "./components/icons/CossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
    return (
        <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] 
          bg-contain bg-no-repeat bg-gray-300 min-h-screen">
            <header className="container mx-auto px-4 pt-8">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-bold uppercase tracking-[0.5em] text-white">
                        TODO
                    </h1>
                    <button>
                        <MoonIcon fill='#FFF' className='fill-red-500'/>
                    </button>
                </div>
                <form className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 mt-8">
                    <span className="rounded-full border-2 w-7 h-7 inline-block"></span>
                    <input type="text" className="w-full text-gray-500 outline-none" placeholder="create a something" />
                </form>
            </header>

            <main className="container mx-auto px-4 mt-8 ">

              <div className="bg-white rounded-md [&>article]:p-4">

                <article className="flex gap-4  border-b-gray-300 border-b">
                    <button className="flex-none rounded-full border-2 w-7 h-7 inline-block"></button>
                    <p className="text-gray-600 grow">Complete online Javascript curse</p>
                    <button className="flex-none">
                        <CossIcon />
                    </button>
                </article>
                <article className="flex gap-4  border-b-gray-300 border-b">
                    <button className="flex-none rounded-full border-2 w-7 h-7 inline-block"></button>
                    <p className="text-gray-600 grow">Complete online Javascript curse</p>
                    <button className="flex-none">
                        <CossIcon />
                    </button>
                </article>
                <article className="flex gap-4  border-b-gray-300 border-b">
                    <button className="flex-none rounded-full border-2 w-7 h-7 inline-block"></button>
                    <p className="text-gray-600 grow">Complete online Javascript curse</p>
                    <button className="flex-none">
                        <CossIcon />
                    </button>
                </article>

                <section className="py-4 px-4 flex justify-between">
                    <span className="text-gray-500">5 items left</span>
                    <button className="text-gray-500">Clear Completed</button>
                </section>
              </div>
            </main>

            <section className="container mx-auto px-4 mt-8">
                <div className="bg-white rounded-md p-4 flex justify-center gap-6">
                    <button className="hover:text-blue-600">All</button>
                    <button className="hover:text-blue-600">Active</button>
                    <button className="hover:text-blue-600">Completed</button>
                </div>
            </section>

            <p className="text-center mt-8">Drag abd drop...</p>
        </div>
    );
};

export default App;
