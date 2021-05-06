import React from "react";
import cls from './Header.module.css'
import {Nav} from "../Nav/Nav";

export const Header = () => {
    return (
        <div className={cls.header}>
            <div className={cls.container}>
                <Nav/>
            </div>
        </div>
    )
}