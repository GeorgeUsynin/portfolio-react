import React from "react";
import cls from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={cls.nav}>
            <a href="">Home page</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contacts</a>
        </div>
    )
}