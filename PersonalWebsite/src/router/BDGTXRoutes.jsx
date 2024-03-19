// Pages
import { Home } from "../projects/bdgtx/pages/Home.jsx";
import { Stats } from "../projects/bdgtx/pages/Stats.jsx";
import { Goals } from "../projects/bdgtx/pages/Goals.jsx";
import { Blog } from "../projects/bdgtx/pages/Blog.jsx";

// BDGTX Routes
export const bdgtxRoutes = [
    {
        path: "/bdgtx/home",
        element:  <Home />,
    },
    {
        path: "/bdgtx/stats",
        element:  <Stats />,
    },
    {
        path: "/bdgtx/goals",
        element:  <Goals />,
    },
    {
        path: "/bdgtx/blog",
        element:  <Blog />,
    }
]