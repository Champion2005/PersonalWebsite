// Pages
import { Home } from "../projects/bdgtx/components/pages/Home.jsx";
import { Stats } from "../projects/bdgtx/components/pages/Stats.jsx";
import { Goals } from "../projects/bdgtx/components/pages/Goals.jsx";
import { Blog } from "../projects/bdgtx/components/pages/Blog.jsx";

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