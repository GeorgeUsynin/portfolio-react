import React from "react";
import cls from './Project.module.css'


export const Project = (props) => {
    return (
        <div className={cls.project}>
            <div className={cls.imgContainer}>
                <a className={cls.links}>Click me</a>
            </div>
            <h3 className={cls.title}>{props.title}</h3>
            <span className={cls.description}>{props.description}</span>
        </div>
    )
}