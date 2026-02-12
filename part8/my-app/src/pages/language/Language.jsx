import React from "react";
import {Outlet} from "react-router-dom"

function Language(){
     return(
          <div>     
               <h1>Language</h1>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

               <Outlet />
          </div>
     )
}

export default Language;

// In React Router, the <Outlet /> component is used to render the child routes of a parent route. It acts as a placeholder in the parent route's component where the content of the nested route will be displayed.

// Key Concepts of <Outlet />
// Nested Routes:

// When defining routes in React Router, you can have parent and child routes. The child routes are rendered within the parent route's component at the location where <Outlet /> is used.
// Dynamic Rendering:

// <Outlet /> ensures that the content displayed depends on the specific child route being accessed. It dynamically renders the appropriate child component based on the current URL.
// Shared Layout:

// The parent route can define a shared layout (like a header, footer, or sidebar), and <Outlet /> allows child routes to render their unique content within that layout.
// How It Works
// Route Definition:

// A parent route contains child routes.
// The parent route's element (component) includes <Outlet />.
// When Navigating:

// When the URL matches a child route, React Router renders the parent route's component along with the child route's component inside the <Outlet />.