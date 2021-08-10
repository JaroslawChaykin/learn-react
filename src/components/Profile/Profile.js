import React from "react";
import styles from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src="" alt=""/>
            </div>
            <div>
                ava - description
            </div>
            <div>
                new posts
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile