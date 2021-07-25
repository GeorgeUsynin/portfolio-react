import React from 'react';
import cls from './Projects.module.scss'
import clsContainer from '../../common/styles/Container.module.scss'
import {Project} from './Project/Project';
import {Title} from '../../common/components/title/Title';
import socialNetwork from '../../assets/images/socialNetwork.jpg'
import todolist from '../../assets/images/todolist.jpg'
import githubGreen from '../../assets/images/github.jpg'
import cardsPacks from '../../assets/images/cards.jpg'
import clemo from '../../assets/images/clemo.jpg'

export const Projects = () => {

    const social = {
        backgroundImage: `url(${socialNetwork})`
    }

    const todoList = {
        backgroundImage: `url(${todolist})`
    }

    const github = {
        backgroundImage: `url(${githubGreen})`
    }

    const cards = {
        backgroundImage: `url(${cardsPacks})`,
    }

    const clemoArch = {
        backgroundImage: `url(${clemo})`,
    }


    return (
        <div className={cls.projectsBlock} id={'projects'}>
            <div className={`${clsContainer.container} ${cls.projectsContainer}`}>
                <Title titleH2={'My'} titleSpan={'projects'}/>
                <div className={cls.projects}>
                    <Project title={'Cards'}
                             description={'An application that allows you to create decks with cards that you can learn from. Registration of a new user, password recovery, profile editing are available in the application. The selection of questions is implemented using a smart random algorithm.'}
                             style={cards}
                             link={'https://georgeusynin.github.io/cards-react-redux/'}
                    />
                    <Project title={'Architecture website'}
                             description={'The template of the website of the architectural bureau with HTML5 and CSS technologies. Fully responsive'}
                             style={clemoArch}
                             link={'https://georgeusynin.github.io/clemo-architecture-website/public/'}
                    />
                    <Project title={'GitHub Search'}
                             description={'In this application, you can search for users of the GitHub service and their repositories. Fully responsive'}
                             style={github}
                             link={'https://georgeusynin.github.io/search-GitHub-users-react-redux-app/'}
                    />
                    <Project title={'Social network'}
                             description={'It\'s like Facebook or VK'}
                             style={social}
                             link={'https://georgeusynin.github.io/social-network-react-redux/'}
                             showTestData={true}
                    />
                    <Project title={'TodoList'}
                             description={'It helps you remember all'}
                             style={todoList}
                             link={'https://georgeusynin.github.io/todolist-redux-react/'}
                             showTestData={true}
                    />
                </div>
            </div>
        </div>
    )
}