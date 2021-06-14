import React from "react";
import cls from './Title.module.css'


export const Title = (props) => {
    return (
        <div className={cls.title}>
            <h2>{props.titleH2} <span>{props.titleSpan}</span></h2>
        </div>
    )
}