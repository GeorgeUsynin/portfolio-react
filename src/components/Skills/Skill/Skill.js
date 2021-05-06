import React from "react";
import cls from './Skill.module.css'


export const Skill = (props) => {
    return (
        <div className={cls.skill}>
            <div className={cls.icon}></div>
            <h3 className={cls.title}>{props.title}</h3>
            <span className={cls.description}>{props.description}</span>
        </div>
    )
}