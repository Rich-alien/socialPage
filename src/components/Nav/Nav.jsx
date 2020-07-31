import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
const Nav = () =>{
    return(
        <nav className={s.nav}>
            <div className={`${s.item} ${s.isActive}`}>
                <NavLink to="/profile" activeClassName={s.active} className={`${s.link} ${s.isActive}`}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active} className={s.link}>Messages</NavLink>
            </div>
            <div className={s.item}>
                 <NavLink to="/news" activeClassName={s.active} className={s.link}>News</NavLink>
            </div>
            <div className={s.item}>
                 <NavLink to="/music" activeClassName={s.active} className={s.link}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.active} className={s.link}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" activeClassName={s.active} className={s.link}>Users</NavLink>
            </div>

        </nav>
    )
}

export default Nav;