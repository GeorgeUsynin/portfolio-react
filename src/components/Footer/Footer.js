import React from "react";
import cls from './Footer.module.css'
import clsContainer from '../../common/styles/Container.module.css'

export const Footer = () => {
    return (
        <div className={cls.footerBlock}>
            <div className={`${clsContainer.container} ${cls.footerContainer}`}>
                <h4>George Usynin</h4>
                <div className={cls.socialMedias}>
                    <a href=""></a>
                    <a href=""></a>
                    <a href=""></a>
                    <a href=""></a>
                </div>
                <h6>&copy; 2021 All Rights Reserved.</h6>
            </div>
        </div>
    )
}