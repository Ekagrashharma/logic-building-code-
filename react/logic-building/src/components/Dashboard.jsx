import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";

const Dashboard = () => {

    const theme = useContext(ThemeContext);
    
    return (
    <div style={{ color: theme.color }}>
        <h2>Dashboard Theme</h2>
        <p>The current theme color is applied here.</p>
    </div>
    );
};

export default Dashboard;
