import React from "react";
import n from "./projectComponent.module.css";
import {render} from "react-dom";
import SkillComponent from "./skillComponent/skillComponent";

const ProjectComponent = (props) => {
    return(
        <div className={n.project}>
            <h3>{props.name}</h3>
            <p className={n.description}>{props.description}</p>
            <div className={n.footerTitle}>
                <div className={n.skills}>
                    {props.Content}

                </div>
                <div className={n.manCount}>{props.manCount}</div>
            </div>
        </div>
   /* <div className={n.project}>
        <h3>Разработка динамической карты погоды на 3D-модели Земли</h3>
        <p className={n.description}>В данном проекте нужно связать нашу БД с заготовленной 3D-моделю Земли,
            чтобы отображать на ней облачность, температуру и осадки.</p>
        <div className={n.footerTitle}>
            <div className={n.skills}>
                <span className={n.PostreSQL}>PostreSQL</span>
                <span className={n.Python}>Python</span>
                <span className={n.AutodeskMaya2020}>Autodesk Maya 2020</span>
            </div>
            <div className={n.manCount}>4 / 5</div>
        </div>
    </div>*/
    );
}

export default ProjectComponent ;