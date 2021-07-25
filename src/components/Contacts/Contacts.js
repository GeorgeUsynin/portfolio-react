import React, {useState} from 'react';
import cls from './Contacts.module.scss'
import clsContainer from '../../common/styles/Container.module.scss'
import {Title} from '../../common/components/title/Title';
import emailjs from 'emailjs-com';
import send from '../../assets/images/send.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faComments, faPaperPlane} from '@fortawesome/free-solid-svg-icons'

export const Contacts = () => {

    const [showSendEmail, setShowSendEmail] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_qkaky69', 'template_ckw36xr', e.target,
            'user_Lg9a4NsGvmPz3AlnCgXMt')
            .then((result) => {
                console.log(result.text);

            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        setShowSendEmail(true)
    }

    return (
        <div id={'contacts'} className={cls.contactsBlock}>
            <div className={`${clsContainer.container} ${cls.contactsContainer}`}>
                <Title titleH2={'Get'} titleSpan={'in touch'}/>
                {
                    !showSendEmail
                        ?
                        <form onSubmit={sendEmail} className={cls.form}>
                            <div className={cls.nameContainer}>
                                <FontAwesomeIcon icon={faUser} className={cls.icon}/>
                                <input placeholder={'YOUR NAME'} className={cls.name} type={'text'} name={'name'}/>
                            </div>
                            <div className={cls.emailContainer}>
                                <FontAwesomeIcon icon={faEnvelope} className={cls.icon}/>
                                <input placeholder={'YOUR EMAIL'} className={cls.email} type={'text'} name={'email'}/>
                            </div>
                            <div className={cls.messageContainer}>
                                <FontAwesomeIcon icon={faComments} className={cls.icon}/>
                                <textarea placeholder={'YOUR MESSAGE'} className={cls.message}
                                          name={'message'}></textarea>
                            </div>
                            <div className={cls.submitForm}>
                                <button type={'submit'} className={cls.sendButton}>
                                    <FontAwesomeIcon icon={faPaperPlane} className={cls.icon}/>
                                    <span>Send message</span>
                                </button>
                            </div>
                        </form>
                        :
                        <div className={cls.thank}>
                            <img src={send} alt=""/>
                            <p>Thanks !</p>
                            <p>Your message has been sent !</p>
                            <button
                                type="button"
                                className={cls.newMessage}
                                onClick={()=>setShowSendEmail(false)}
                            >
                                <FontAwesomeIcon icon={faEnvelope} className={cls.icon}/>
                                <span>New message</span>
                            </button>
                        </div>
                }
            </div>
        </div>
    )
}