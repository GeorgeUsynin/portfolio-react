import clsContainer from '../../common/styles/Container.module.scss';
import cls from "./DistantWork.module.scss"
import {Title} from '../../common/components/title/Title';

function DistantWork() {
    return (
        <div className={cls.distantWorkBlock}>
            <div className={cls.back}></div>
            <div className={`${clsContainer.container} ${cls.distantWorkContainer}`}>
                <Title titleH2={"I can work on a"} titleSpan={"distance"}/>
                <a href="#contacts"><button className={cls.button}><span>Hire me</span></button></a>
            </div>
        </div>
    );
}

export default DistantWork;