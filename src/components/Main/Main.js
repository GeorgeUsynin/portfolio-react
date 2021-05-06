import React from "react";
import cls from './Main.module.css'
import clsContainer from '../../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={cls.mainBlock}>
            <div className={clsContainer.container}>
                <div className={cls.greetingTextBlock}>
                    <span>Hi There</span>
                    <h1>I am George Usynin</h1>
                    <p>Frontend Developer.</p>
                </div>
                <div className={cls.photo}></div>
            </div>
        </div>
    )
}