import React from "react";
import cls from './Footer.module.css'
import clsContainer from '../../common/styles/Container.module.css'

export const Footer = () => {
    return (
        <div className={cls.footerBlock}>
            <div className={`${clsContainer.container} ${cls.footerContainer}`}>
                <h4>George Usynin</h4>
                <div className={cls.socialMedias}>
                    <a href="">Facebook</a>
                    <a href="">Twitter</a>
                    <a href="">Instagram</a>
                    <a href="">Linkedin</a>
                </div>
                <h6>&copy; 2021 All Rights Reserved.</h6>
            </div>
        </div>
    )
}