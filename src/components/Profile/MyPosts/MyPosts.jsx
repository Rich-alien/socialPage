import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = (props) => {
    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    };
    let postsElements =
        props.posts.map(e => <Post message={e.msg} likesCount={e.likesCount}/>);

    return (

        <div className={s.postsBlock}>
            <h3 className={s.HeaderText}>My posts</h3>
            <div className={s.addComment}>
                <textarea
                    onChange={onPostChange}
                    ref={newPostElement}
                    value={props.newPostText}/>

                <button onClick={onAddPost}>Add</button>
            </div>
            <div className={s.post}>

                {
                    postsElements
                }
            </div>
        </div>
    )
}
export default MyPosts;