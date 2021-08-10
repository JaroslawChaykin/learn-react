import React from "react";
import styles from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>My posts
            <div>
                <textarea name="" id="" cols="30" rows="3"></textarea>
                <button>Add post</button>
            </div>
            <div className="posts">
                <Post message="hi, how are you?"/>
                <Post message="My first post"/>
            </div>
        </div>
    )
}

export default MyPosts