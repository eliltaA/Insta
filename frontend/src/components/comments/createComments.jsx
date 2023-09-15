import { useState } from "react";
import { useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "../../store/commentsReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSmile } from "@fortawesome/free-regular-svg-icons";
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import './createComment.css'

function CreateComment ({postId, inputRef}){
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user )
    const [comment, setComment] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        const commentDetail = {
            post_id: postId,
            author_id: currentUser.id,
            comment_body: comment
        }
        if(comment.trim() !== ""){
        dispatch(createComment(commentDetail))
        setComment('');
        }
    }

    return (
            <form className="create-comment" onSubmit={handleSubmit}>
        <textarea ref={inputRef} className="comment-input" placeholder="Add a comment..." value={comment} onChange={(e)=> setComment(e.target.value)} maxlength="85"/>
        <FontAwesomeIcon icon={faSmile} className="smiley-icon"/>
        <button className="comment-submit-button" type="submit">Post</button>
            </form>
    )
}
export default CreateComment;