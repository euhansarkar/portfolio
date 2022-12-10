import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Blogs from "../../Pages/Blogs/Blogs";
import ContactMe from "../../Pages/ContactMe/ContactMe";
import Home from "../../Pages/Home/Home/Home";
import Projects from "../../Pages/Projects/Projects";
import Resume from "../../Pages/Resume/Resume";
import NotFound from "../../Pages/Shared/NotFound/NotFound";

export const router = createBrowserRouter([
    {
        path: `/`,
        element: <Main></Main>,
        children: [
            {
                path: `/`,
                element: <Home></Home>
            },
            {
                path:`/about`,
                element: <About></About>
            }, 
            {
                path: `/contactme`,
                element: <ContactMe></ContactMe>
            },
            
            {
                path: `*`,
                element: <NotFound></NotFound>
            },
            {
                path: `/projects`,
                element: <Projects></Projects>
            },
            {
                path: `/blogs`,
                element: <Blogs></Blogs>
            },
            {
                path: `/resume`,
                element: <Resume></Resume>
            }
        ]
    },
])