import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Detail from "../screens/Detail";
import ErrorPage from "../screens/ErrorPage";
import Home from "../screens/Home";
import Library from "../screens/Library";
import Playlist from "../screens/Playlist";
import Search from "../screens/Search";
import Wishlist from "../screens/Wishlist";

const Router = createBrowserRouter([

    {
        element:(
            <>
            {/* on appelle l'élément qu'on affichera sur toute nos vues  */}


            <App/>

        
            </>

),
//On appelle la vue 
errorElement: <ErrorPage />,
//On déclare ensuite toute les vues avec leurs route
children: [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },

    {
        path: "/Search",
        element: <Search />,
        
    },

    {
        path: "/Library",
        element: <Library />,
    
    },

    {
        path: "/add-playlist",
        element: <Playlist />,
    },

    {
        path: "/Wishlist",
        element: <Wishlist />,
    },

    {
        path: "/Detail",
        element: <Detail />,
    }
]
    }

])

export default Router;