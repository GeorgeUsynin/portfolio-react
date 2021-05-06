import React from "react";
import cls from './Project.module.css'


export const Project = (props) => {
    return (
        <div className={cls.project}>
            <div className={cls.icon}>
                <img src="xxx" alt="xxx"/>
                <button>Click me</button>
            </div>
            <h3 className={cls.title}>{props.title}</h3>
            <span className={cls.description}>{props.description}</span>
        </div>
    )
}