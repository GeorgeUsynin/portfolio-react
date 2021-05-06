import React from "react";
import cls from './Projects.module.css'
import clsContainer from '../../common/styles/Container.module.css'
import {Project} from "./Project/Project";

export const Projects = () => {
    return (
        <div className={cls.projectsBlock}>
            <div className={`${clsContainer.container} ${cls.projectsContainer}`}>
                <h2 className={cls.title}>Projects</h2>
                <div className={cls.projects}>
                    <Project title={'Social network'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Project title={'TodoList'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                </div>
            </div>
        </div>
    )
}