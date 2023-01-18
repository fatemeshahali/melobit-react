import React from 'react';
import Logo from '../../assets/icon/logo.svg';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar_logo">
                <img src={Logo} alt="" />
            </div>
            <div className="sidebar_menu">
                <div className="sidebar_menu_item">
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >
                        Home
                    </NavLink>
                </div>
                <div className="sidebar_menu_item">
                    <NavLink
                        to="search"
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >
                        Search
                    </NavLink>
                </div>
                <div className="sidebar_menu_item disabled">
                    <a>
                        Playlist
                    </a>
                </div>
                <div className="sidebar_menu_item disabled">
                    <a>
                        Favorit
                    </a>
                </div>
                <div className="sidebar_menu_item disabled">
                    <a>
                        History
                    </a>
                </div>
            </div>
        </div>
    )
}
