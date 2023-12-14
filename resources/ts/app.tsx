import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, NavLink, useLocation, useNavigate, Router } from "react-router-dom";
import SlideRoutes from 'react-slide-routes';
import { Provider } from "react-redux"
import store from "./components/redux/store/store"
import Top from "./components/pages/Top"
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"
import Create from "./components/pages/Create"
import Detail from "./components/pages/Detail"
import Profile from "./components/pages/Profile"
import Edit from "./components/pages/Edit"
import Logout from "./components/pages/Logout"
import Header from "./components/Tags/Header"

const App = () => {

    return (
        <div id="main">
        <Provider store={store}>
            <BrowserRouter>
                <Header/>
                <SlideRoutes duration={500} animation={'slide'}>
                    <Route path="/" element={<Top/>} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/detail/:id" element={<Detail />} />
                    <Route path="/edit/:id" element={<Edit />} />
                    <Route path="/profile" element={<Profile />} />
                </SlideRoutes>
            </BrowserRouter>
        </Provider>
        </div>
    );
};

const container = document.getElementById("app") as HTMLInputElement;
const root = createRoot(container);
root.render(<App />);
