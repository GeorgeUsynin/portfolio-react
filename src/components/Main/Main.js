import React from "react";
import cls from './Main.module.scss'
import clsContainer from '../../common/styles/Container.module.scss'
import axios from 'axios';


export const getFile = (url, fileName) => {
    // запросить файл
    axios.get(url, {responseType: 'blob'}) // !!! responseType: 'blob'
        .then(({data}) => {
            const blob = new Blob([data], {type : 'application/pdf'});
            console.log(blob)

            // создать ссылку на файл
            const downloadUrl = window.URL.createObjectURL(blob);

            // создать тег "ссылка" на наш файл
            const link = document.createElement('a');
            link.href = downloadUrl;

            // добавить атрибуты нашему тегу: загрузочный, имя файла
            link.setAttribute('download', fileName);

            // добавить тег в документ
            document.body.appendChild(link);

            // нажать на ссылку
            link.click();

            // удалить тег из документа
            link.remove();
        });
};

export const Main = () => {

    const onClickSave = () => {
        getFile("https://usaupload.com/Gjp/CV.pdf", "CV")
    }

    return (
        <div id={"main"} className={cls.mainBlock}>
            <div className={`${clsContainer.container} ${cls.relative}`}>
                <div className={cls.back}></div>
                <div className={cls.photo}></div>
                <div className={cls.greetingTextBlock}>
                    <h3 className={"animate__animated animate__fadeInDown"}>Hi There</h3>
                    <h1 className={"animate__animated animate__fadeInRight"}><span>I am </span>George Usynin</h1>
                    <h2 className={"animate__animated animate__fadeInUp"}>Frontend React Developer</h2>
                </div>
            </div>
        </div>
    )
}
