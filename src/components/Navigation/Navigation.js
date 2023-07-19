// within then  header, will be used to conditionally render the different sections of the portfolio
import React, {useState } from 'react';
import './navigation.css';

function Navigation ({ currentTab, handleTabChange }) {
    return (
        <nav>
            <ul>
                <li
                    className={currentTab === 'About' ? 'active' : ''}
                    onClick={() => handleTabChange('About')}
                >
                    About Me
                </li>
                <li
                    className={currentTab === 'Project' ? 'active' : ''}
                    onClick={() => handleTabChange('Project')}
                >
                    Projects
                </li>
                <li
                    className={currentTab === 'Contact' ? 'active' : ''}
                    onClick={() => handleTabChange('Contact')}
                >
                    Contact
                </li>
                {/* <li
                    className={currentTab === 'contact' ? 'active' : ''}
                    onClick={() => handleTabChange('contact')}
                >
                    Contact
                </li> */}
            </ul>
        </nav>
    );
}

export default Navigation;