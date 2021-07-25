import React, {useRef} from 'react';
import cls from './Project.module.scss'


export const Project = (props) => {

    const imageRef = useRef(null)

    return (
        <div className={cls.project}>
            <div className={cls.imgContainer} style={props.style}
                 onClick={() => imageRef && imageRef.current && imageRef.current.click()}
            >
                <a className={cls.links} href={props.link} ref={imageRef} target={'_blank'}>Show</a>
            </div>
            <div className={cls.projectInfo}>
                <h3 className={cls.projectTitle}>{props.title}</h3>
                <p className={cls.description}>{props.description}</p>
                <p className={cls.description}>{props.pageDescription}</p>
                {props.showTestData && <p className={cls.description}>Test account data:<br/>
                    <span style={{color: ' #ffb400'}}>Email:</span> free@samuraijs.com<br/>
                    <span style={{color: ' #ffb400'}}>Password:</span> free</p>}
            </div>
        </div>
    )
}