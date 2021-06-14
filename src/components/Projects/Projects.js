import React from "react";
import cls from './Projects.module.css'
import clsContainer from '../../common/styles/Container.module.css'
import {Project} from "./Project/Project";
import {Title} from "../../common/components/title/Title";
import socialNetwork from '../../assets/images/socialNetwork.jpg'
import todolist from '../../assets/images/todolist.jpg'

export const Projects = () => {

    const social = {
        backgroundImage: `url(${socialNetwork})`
    }

    const todoList = {
        backgroundImage: `url(${todolist})`
    }



    return (
        <div className={cls.projectsBlock}>
            <div className={`${clsContainer.container} ${cls.projectsContainer}`}>
                <Title titleH2={'My'} titleSpan={'projects'}/>

                {/*<div className={cls.title}>*/}
                {/*    <h2>My <span>Projects</span></h2>*/}
                {/*</div>*/}
                <div className={cls.projects}>
                    <Project title={'Social network'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                            style={social}
                    />
                    <Project title={'TodoList'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                            style={todoList}
                    />
                </div>
            </div>
        </div>
    )
}