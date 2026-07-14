import { NavLink } from "react-router-dom";
import { FaBrain } from "react-icons/fa6";

export default function Navbar() {

    const navClass = ({ isActive }) =>
        isActive
            ? "text-blue-600 font-semibold"
            : "text-gray-600 hover:text-blue-600 transition";

    return (

        <nav className="sticky top-0 z-50 bg-white shadow-md">

            <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

                <NavLink
                    to="/"
                    className="flex items-center gap-3"
                >

                    <FaBrain
                        size={32}
                        className="text-blue-700"
                    />

                    <div>

                        <h1 className="text-xl font-bold text-slate-800">

                            Brain MRI AI

                        </h1>

                        <p className="text-xs text-gray-500">

                            Deep Learning Medical Imaging

                        </p>

                    </div>

                </NavLink>

                <div className="flex gap-8 text-lg">

                    <NavLink
                        to="/"
                        className={navClass}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/predict"
                        className={navClass}
                    >
                        Predict
                    </NavLink>

                    <NavLink
                        to="/model"
                        className={navClass}
                    >
                        Model
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={navClass}
                    >
                        About
                    </NavLink>

                </div>

            </div>

        </nav>

    );

}