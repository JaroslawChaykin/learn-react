import React from "react";
import styles from "./Post.module.css"

const Post = (props) => {
    return (
        <div>
            <img src="" alt=""/>
            <div className="text">{props.message}</div>
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}

export default Post