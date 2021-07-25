import React from 'react';
import cls from './Skills.module.scss'
import clsContainer from '../../common/styles/Container.module.scss'
import {Skill} from './Skill/Skill';
import {Title} from '../../common/components/title/Title';
import {faCss3, faHtml5, faJs, faReact} from '@fortawesome/free-brands-svg-icons';
import {faServer, faTasks} from '@fortawesome/free-solid-svg-icons';

export const Skills = () => {
    return (
        <div id={'skills'} className={cls.skillsBlock}>
            <div className={`${clsContainer.container} ${cls.skillsContainer}`}>
                <Title titleH2={'My'} titleSpan={'skills'}/>
                <div className={cls.skills}>
                    <Skill title={'React/Redux'}
                           description={'UI & BLL'}
                           icon={faReact}/>
                    <Skill title={'JS/TS'}
                           description={'JavaScript & TypeScript'}
                           icon={faJs}/>
                    <Skill title={'CSS'}
                           description={'Modern responsive layout'}
                           icon={faCss3}/>
                    <Skill title={'HTML'}
                           description={'High-quality page structure'}
                           icon={faHtml5}/>
                    <Skill title={'Unit testing'}
                           description={'Writing tests for the application'}
                           icon={faTasks}/>
                    <Skill title={'Axios'}
                           description={'Interaction with the server'}
                           icon={faServer}/>
                </div>
            </div>
        </div>
    )
}