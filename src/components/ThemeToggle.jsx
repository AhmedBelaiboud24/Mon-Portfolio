import React, { useEffect, useState } from 'react';
import Switch from '@mui/material/Switch';
import { LightMode, DarkMode } from '@mui/icons-material'; 

const ThemeToggle = () => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        setChecked(savedTheme === 'light'); 
    }, []);

    const handleChange = (event) => {
        const newTheme = event.target.checked ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        setChecked(event.target.checked);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <DarkMode style={{ marginRight: '8px' }} /> {}
            <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <LightMode style={{ marginLeft: '8px' }} /> {}
        </div>
    );
};

export default ThemeToggle;