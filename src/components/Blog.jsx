import React from 'react';

const Blog = () => {
    return (
        <div className='my-container grid grid-cols-1 lg:grid-cols-2 gap-10 my-5 mb-5'>
            <div className='border border-gray-200 rounded-lg p-5'>
                <h1 className='font-semibold mb-2 text-lg'>When should you use context API?</h1>
                <p>We use context api when we have data that needs to be shared across multiple components, and if we passing data down through props would be impractical or inconvenient. Common scenarios include theming, user authentication, and language localization. However, Context API can add complexity to our code, so use it only when it makes sense for our specific use case.If we want to support multiple languages in our application, we can use Context API to pass the selected language and its translations down to child components.If we have an application that requires users to log in, we can use Context API to pass the authentication status and user data down to child components. </p>
            </div>
            <div className='border border-gray-200 rounded-lg p-5'>
                <h1 className='font-semibold mb-2 text-lg'>What is a custom hook?</h1>
                <p>In React, a custom Hook is a function that starts with the word “use” and may call other Hooks.It is a reusable function in React that allows us to encapsulate and reuse logic across multiple components.These are a way to extract component logic into reusable functions and share it between components without the need for duplication.In React, hooks are functions that allow us to use state and other React features in functional components. The built-in hooks such as useState and useEffect are essential for building React applications, but sometimes we need to write our own hooks to encapsulate custom logic.It can be used to abstract away complex logic.</p>
            </div>
            <div className='border border-gray-200 rounded-lg p-5'>
                <h1 className='font-semibold mb-2 text-lg'>What is useRef?</h1>
                <p>useRef is a hook in React that allows us to create a reference to a DOM element or any other value that needs to persist between render cycles without triggering a re-render.The hook returns a single object with a current property. This property can be used to store and retrieve the current value of the ref object.The useRef hook is typically used to store references to DOM nodes or other mutable values that need to persist between render cycles.When we pass a ref object to a child component using the ref prop, the child component can access the current value of the ref object using props.myRef.current.This  hook is a useful tool for accessing and manipulating DOM nodes in React. By storing a reference to a DOM node in a ref object, we can easily modify its properties, call its methods, or attach event listeners to it.</p>
            </div>
            <div className='border border-gray-200 rounded-lg p-5'>
                <h1 className='font-semibold mb-2 text-lg'>What is useMemo?</h1>
                <p>useMemo is a hook in React that memoizes a function or a value to improve the performance of a component by avoiding unnecessary re-computations.This useMemo hook takes two arguments: a function that returns the memoized value, and an array of dependencies that determine when the memoized value should be recomputed.Memoization can be useful in scenarios where we have a complex computation that takes a long time to execute, and we want to avoid re-executing it on every render cycle.Overall, the useMemo hook is a powerful tool for improving the performance of our React components by memoizing expensive computations or large datasets. By avoiding unnecessary re-computations, we can make our components more responsive and efficient.</p>
            </div>

        </div>
    );
};

export default Blog;