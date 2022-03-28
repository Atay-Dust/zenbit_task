import Admin from "./pages/Admin"
import Feedback from "./pages/Feedback";
import Home from "./pages/Home";


export const adminRoutes = [
    {
        path: '/admin',
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: '/',
        Component: Home
    },

    {
        path: '/feedback',
        Component: Feedback
    }


]