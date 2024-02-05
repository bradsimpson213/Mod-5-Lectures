
- we handle our event by attributes on the html tag (onCLick, onChange, onSubmit)
- we do not want to invoke our handleClick in the onClick, we need an anonymous function to do it for us


```jsx
  const handleClick = (e) => {
    console.log("in handle click", e.target)
    alert("One day this will help us make a new post...")
  };

 <button onClick={ (e) => handleClick(e) }>New Post</button>
```


---


## React Router!

- its our front end navigation
- lets us decide what "page" to render
- the urls are not the same as your servers urls
- potentially the trickiest thing this week, but also the most important
- will need to install a new dependancy, react-router-dom


---

## Router Setup

- we need createBrowserRouter. which will accept an array of objects
- each object could have a path, element, or children
- we build a tree like structure with potential nested arrays of object
- react handles patterm matching and its pretty awesome (it wasn't always)
```jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom" 
const router = createBrowserRouter([
    {
        path: '/',
        element: <Landing />
    },
    {
        path: '/posts',
        element: <Feed />
    }
])
```


---

## Router Provider

- sets up where to render out "routes"
- typically found in our App component
- you can't use routing functioniality outside of it (like below, don't do it!)


```jsx

function App() {
  return (
    <>
        <Link to="/posts" ></Link>
        <RouterProvider router={ router } />
    </>
  )
}
```


---

## Navigation

- we use Link tags or NavBar tags depending on situation (is it a navbar? 😆)
- we do not want to use <a></a> tags as they will cause an entire page rerender
- NavBars add the "active" class to the link when clicked, allowing for some CSS goodness
- both imported from "react-router-dom"
- Links need to be in the context of our <RouterProvider />

```jsx
import { Link, NavLink } from 'react-router-dom'

return (
    <>
        <Link to="/">Home</Link>
        <NavLink to="/posts">Feed</NavLink>
    </>
)
 
```

---


## Outlet & Layout

- how we can make navigation components 
- helps us with the context issue from above, we need to have all routing functionality as a child of our <RouterProvider />
- <Outlet /> is imported from "react-router-dom" and is a placeholder for where the Router will render content
- <Layout /> is a convention for the component that handles wrapping other content



---



## Nested Routes

- sometimes our application might require multiple levels of routes
- we can set up children routes on a component
- may need an outlet depending on what you are trying to accomplish
- nested routes HW practice had a great example with Movies...


---

## For the rest of today..

### Art Museum Project
- Great long practice for today!  
- Ask questions if you get stuck!
- Start on your HW if you finsih early!
- I would prioritze having homeword completed over doing a bonus phase

