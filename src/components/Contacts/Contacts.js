import React from "react";
import cls from './Contacts.module.css'
import clsContainer from '../../common/styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={cls.contactsBlock}>
            <div className={`${clsContainer.container} ${cls.contactsContainer}`}>
                <h2 className={cls.title}>Contacts</h2>
                <form className={cls.form}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea defaultValue={'TEXTAREA'}>

                    </textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}