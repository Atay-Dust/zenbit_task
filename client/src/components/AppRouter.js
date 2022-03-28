import React from "react";
import { Route, Routes } from "react-router-dom"
import {adminRoutes, publicRoutes} from "../routes";

const AppRouter = () => {
    const isAdmin = true
    return(
        <Routes>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exect/>
            )}
            {isAdmin && adminRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exect/>
            )}
        </Routes>
    )
}

export default AppRouter;