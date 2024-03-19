import {
    createBrowserRouter,
} from "react-router-dom";

// Pages
import App from './App.jsx'
import BlackjackApp from "./projects/blackjack-teacher/BlackjackApp.jsx";
import BDGTXApp from "./projects/bdgtx/bdgtxApp.jsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: null,
    },
    {
        path: "/blackjack",
        element: <BlackjackApp />,
    },
    {
        path: "/bdgtx",
        element: <BDGTXApp />,
    },
]);