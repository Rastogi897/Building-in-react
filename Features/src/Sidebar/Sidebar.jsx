import React, { useState } from "react";
import "./Sidebar.css"; // we'll create this next

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button className={`toggle-btn ${isOpen ? "hide" : ""}`} onClick={toggleSidebar}>
                {isOpen ? "Close" : "Open"} Sidebar
            </button>

            <div className={`sidebar ${isOpen ? "open" : ""}`}>
                <button className="close-btn" onClick={toggleSidebar}>×</button>
                <h2>Sidebar Menu</h2>
                <ul>
                    <li>Home</li>
                    <li>Profile</li>
                    <li>Settings</li>
                    <li>Logout</li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
