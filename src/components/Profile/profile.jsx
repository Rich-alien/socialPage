import React from "react";
import s from './profile.module.css';
// import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
// import {updateNewPostText} from "../../state";

const Profile = () => {
    return (
        <div className={s.container}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile;