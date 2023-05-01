import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main/Main";
import Home from "../components/page/Home/Home";
import Destination from "../components/page/Destination/Destination";
import Destinations from "../components/page/Destinations/Destinations";
import Hotels from "../components/page/Hotels/Hotels";
import BookNow from "../components/page/BookNow/BookNow";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/destinations',
                element: <Destinations></Destinations>
            },
            {
                path:'/destinations/:id',
                element: <Destination></Destination>,
                loader: ({params}) => fetch(`http://localhost:5000/destinations/${params.id}`)
            },
            {
                path: 'hotelsDestination/:id',
                element: <Hotels></Hotels>,
                loader: ({params}) => fetch(`http://localhost:5000/hotelsDestination/${params.id}`)

            },
            {
                path: 'hotelsDestination:id',
                element: <BookNow></BookNow>
                

            }
        ]
    }
])

export default router;