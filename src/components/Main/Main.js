import React from "react";
import cls from './Main.module.scss'
import clsContainer from '../../common/styles/Container.module.scss'

export const Main = () => {
    return (
        <div id={"main"} className={cls.mainBlock}>
            <div className={`${clsContainer.container} ${cls.relative}`}>
                <div className={cls.back}></div>
                <div className={cls.photo}></div>
                <div className={cls.greetingTextBlock}>
                    <h3 className={"animate__animated animate__fadeInDown"}>Hi There</h3>
                    <h1 className={"animate__animated animate__fadeInRight"}><span>I am </span>George Usynin</h1>
                    <h2 className={"animate__animated animate__fadeInUp"}>Frontend React Developer</h2>
                </div>

            </div>
        </div>
    )
}