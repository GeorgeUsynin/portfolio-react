import React from "react";
import cls from './Skill.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Skill = (props) => {
    return (
        <div className={cls.skill}>
            <div className={cls.iconContainer}>
                <FontAwesomeIcon className={cls.icon} size={"2x"} icon={props.icon}/>
            </div>
            <h3 className={cls.title}>{props.title}</h3>
            <p className={cls.description}>{props.description}</p>
        </div>
    )
}