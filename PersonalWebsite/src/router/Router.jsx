import {
    createBrowserRouter,
} from "react-router-dom";

import App from "../App.jsx";
import { H404 } from "../404/404.jsx";

import { blackjackRoutes } from "./BlackjackRoutes.jsx";

import { bdgtxRoutes } from "./BDGTXRoutes.jsx";
import { BDGTXApp, BDGTXError } from "../projects/bdgtx/BDGTXApp.jsx";

const Handle404 = () => {
    // get current url in browser
    const path = window.location.href;
    console.log(path);
    if (path.includes("bdgtx/")) {
        return (
            <BDGTXError />
        )
    }
    else {
        return (
            <H404 />
        )
    }
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Handle404 />,
    },
    {
        path: "/bdgtx",
        element: <BDGTXApp />,
    },
    ...bdgtxRoutes,
    ...blackjackRoutes,
]);