import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="bg-gray-100 text-gray-800">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">NEW QUESTIONS</p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-300">
                        <details className="py-6">
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What is the purpose of React Router?</summary>
                            <div className="px-4 pb-4">
                                <p> React Router is a library that enables navigation and routing within a React application. It allows you to define a set of routes that map to specific components of your application, rendering the appropriate component when the URL changes. The library provides components like BrowserRouter,
                                    Switch, Route, and Link to create and manage routes.
                                    It creates a dynamic and responsive user experience without causing a full page refresh. React Router also provides features such as nested routes, URL parameters, and query parameters to make building complex applications easier. React Router is a powerful tool for creating single-page applications in React.</p>
                            </div>
                        </details>
                        <details className="py-6">
                            <summary className="py-2 outline-none cursor-pointer focus:underline">How does context API works?</summary>
                            <div className="px-4 pb-4">
                                <p>Context API in React allows you to share data between components without the need to pass props through every level of the component tree. You create a context object, a provider component that wraps the child components, and child components that consume the data using the useContext() hook.
                                    The provider re-renders its child components whenever the shared data changes. This makes it easier to create a global state that can be accessed by any component within the component tree.</p>
                            </div>
                        </details>
                        <details className="py-6">
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What is useRef in React?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>useRef is a hook in React that provides a way to create and manage mutable references to elements or values that persist across renders. It returns a single mutable ref object that can be used to store any mutable value or element reference.
                                    useRef is commonly used to access the underlying DOM element of a React component or to persist data between renders without triggering a re-render.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;