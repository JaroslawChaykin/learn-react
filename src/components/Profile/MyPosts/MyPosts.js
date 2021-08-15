import React from "react";
import styles from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(  el => <Post message={el.message}/>)

    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
    }

    return (
        <div>My posts
            <div>
                <textarea ref={newPostElement} id="" cols="30" rows="3" />
                <button onClick={addPost}>Add post</button>
            </div>
            <div className="posts">
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts