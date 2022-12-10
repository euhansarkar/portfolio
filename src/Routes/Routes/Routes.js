import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import ContactMe from "../../Pages/ContactMe/ContactMe";
import Home from "../../Pages/Home/Home/Home";
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
            }
        ]
    },
])