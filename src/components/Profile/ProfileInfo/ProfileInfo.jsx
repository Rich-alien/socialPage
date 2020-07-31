import React from "react";
import s from './ProfileInfo.module.css';
const ProfileInfo = () => {
    return (
        <div >
            <div>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                {/*<img im src="https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg" alt=""/>*/}
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo;