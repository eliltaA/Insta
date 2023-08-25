import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from './store/darkModeReducer';
import './darkMode.css'

function DarkModeToggle() {
    const dispatch = useDispatch();
    const darkMode = useSelector(state => state.darkMode);
    
    const handleDarkModeToggle = () => {
        dispatch(toggleDarkMode());
        document.body.classList.toggle('dark-mode'); // Toggle the class on the body
    };

    return (
        <div className={`dark-mode-toggle ${darkMode ? 'dark' : 'light'}`} >
        <label>
            <input
            type="checkbox"
            checked={darkMode}
            onChange={handleDarkModeToggle}
            />
            Dark Mode
        </label>
        </div>
    );
}

export default DarkModeToggle;
