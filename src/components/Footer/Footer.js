import React from 'react';
import cls from './Footer.module.scss'
import clsContainer from '../../common/styles/Container.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedinIn, faTelegram} from '@fortawesome/free-brands-svg-icons';


export const Footer = () => {
    return (
        <div className={cls.footerBlock}>
            <div className={`${clsContainer.container} ${cls.footerContainer}`}>
                <h4>George <span>Usynin</span></h4>
                <div className={cls.socialMedias}>
                    <div className={cls.iconContainer}>
                        <a title={'LinkedIn'} target={'_blank'}
                           href={'https://www.linkedin.com/in/george-usynin-703781202/'}>
                            <FontAwesomeIcon className={cls.icon} icon={faLinkedinIn}/>
                        </a>
                    </div>
                    <div className={cls.iconContainer}>
                        <a title={'GitHub'} target={'_blank'} href={'https://github.com/GeorgeUsynin'}>
                            <FontAwesomeIcon className={cls.icon} icon={faGithub}/>
                        </a>
                    </div>
                    <div className={cls.iconContainer}>
                        <a title={'Telegram'} target={'_blank'} href={'https://t.me/angiejo03'}>
                            <FontAwesomeIcon className={cls.icon} icon={faTelegram}/>
                        </a>
                    </div>
                </div>

                <h6>&copy; 2021 All Rights Reserved.</h6>
            </div>
        </div>
    )
}