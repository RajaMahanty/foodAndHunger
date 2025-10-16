import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
    // Detect initial theme
    const getInitialTheme = () => {
        if (typeof window !== "undefined" && localStorage.getItem("theme")) {
            return localStorage.getItem("theme");
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    };

    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") root.classList.add("dark");
        else root.classList.remove("dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () =>
        setTheme((prev) => (prev === "light" ? "dark" : "light"));

    return (
        <nav className="flex items-center justify-between px-14 py-3 shadow-md  transition-all duration-300">
            {/* Logo */}
            <div className="flex items-center gap-3">
                <a href="/" className="flex justify-center items-center">
                    <img src={logo} alt="logo" className="h-10 w-10 rounded-full m-1.5 h-[55px] w-[66px]" />
                    <span className="font-semibold">
                    </span>
                </a>
            </div>

            {/* Nav Links */}
            <ul className="hidden md:flex items-center gap-8 font-medium">
                {["Home", "About", "Donors", "Recipients", "Volunteers"].map((item) => (
                    <li key={item}>
                        <a
                            href={`/${item.toLowerCase()}`}
                            className="hover:text-green-600 transition-colors"
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Right Section */}
            <div className="flex items-center gap-4">
                <button
                    aria-label="Toggle Theme"
                    onClick={toggleTheme}
                    className="rounded-full p-2  transition"
                >
                    {theme === "dark" ? (
                        <SunIcon className="w-6 h-6 text-yellow-400" />
                    ) : (
                        <MoonIcon className="w-6 h-6" />
                    )}
                </button>

                <div className="items-center gap-3 hidden">
                    <a
                        href="/auth/join_us"
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                    >
                        Join Us
                    </a>
                    <a
                        href="/auth/register"
                        className="px-4 py-2 border border-gray-700 dark:border-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-white dark:hover:text-gray-900 transition"
                    >
                        Register
                    </a>
                    <a
                        href="/auth/login"
                        className="px-4 py-2 border border-gray-700 dark:border-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-white dark:hover:text-gray-900 transition"
                    >
                        Login
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
