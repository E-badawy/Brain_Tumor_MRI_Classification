import { Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Footer from "./components/footer";

import Home from "./pages/Home";
import Predict from "./pages/Predict";
import Model from "./pages/Model";
import About from "./pages/About";

export default function App() {

    return (

        <div className="min-h-screen flex flex-col">

            <Navbar />

            <main className="flex-1">

                <Routes>

                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/predict"
                        element={<Predict />}
                    />

                    <Route
                        path="/model"
                        element={<Model />}
                    />

                    <Route
                        path="/about"
                        element={<About />}
                    />

                </Routes>

            </main>

            <Footer />

        </div>

    );

}
