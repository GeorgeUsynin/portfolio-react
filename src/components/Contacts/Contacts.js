import React from "react";
import cls from './Contacts.module.css'
import clsContainer from '../../common/styles/Container.module.css'
import {Title} from "../../common/components/title/Title";

export const Contacts = () => {
    return (
        <div className={cls.contactsBlock}>
            <div className={`${clsContainer.container} ${cls.contactsContainer}`}>
                <Title titleH2={'Get'} titleSpan={'in touch'}/>
                <form className={cls.form}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea defaultValue={'TEXTAREA'}>

                    </textarea>
                    <button type={'submit'}>Send</button>
                </form>
            </div>
        </div>
    )
}