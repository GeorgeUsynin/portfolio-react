import React from "react";
import cls from './Project.module.css'


export const Project = (props) => {
    return (
        <div className={cls.project}>
            <div className={cls.imgContainer} style={props.style}>
                <a className={cls.links}>View</a>
            </div>
            <div className={cls.projectInfo}>
                <h3 className={cls.projectTitle}>{props.title}</h3>
                <p className={cls.description}>{props.description}</p>
            </div>
        </div>
    )
}