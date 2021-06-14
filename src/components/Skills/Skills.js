import React from "react";
import cls from './Skills.module.css'
import clsContainer from '../../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";
import {Title} from "../../common/components/title/Title";

export const Skills = () => {
    return (
        <div className={cls.skillsBlock}>
            <div className={`${clsContainer.container} ${cls.skillsContainer}`}>
                <Title titleH2={'My'} titleSpan={'skills'}/>
                <div className={cls.skills}>
                    <Skill title={'JavaScript'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolore ea facere facilis placeat qui tempore. Beatae dolores, eligendi, expedita laboriosam obcaecati perspiciatis reiciendis reprehenderit sapiente totam unde ut veritatis.'}/>
                    <Skill title={'HTML'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolore ea facere facilis placeat qui tempore. Beatae dolores, eligendi, expedita laboriosam obcaecati perspiciatis reiciendis reprehenderit sapiente totam unde ut veritatis.'}/>
                    <Skill title={'CSS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolore ea facere facilis placeat qui tempore. Beatae dolores, eligendi, expedita laboriosam obcaecati perspiciatis reiciendis reprehenderit sapiente totam unde ut veritatis.'}/>
                </div>
            </div>
        </div>
    )
}