import {
    createHashRouter,
} from "react-router-dom";

// Pages
import App from './App.jsx'
import BlackjackApp from "./projects/blackjack/BlackjackApp.jsx";
import BDGTXApp from "./projects/bdgtx/BDGTXApp.jsx";

export const router = createHashRouter([
    {
        path: "/",
        element: <App />,
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