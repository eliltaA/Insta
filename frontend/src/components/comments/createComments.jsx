import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "../../store/commentsReducer";

function CreateComment ({postId}){
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
        <div className="create-comment">
            <form onSubmit={handleSubmit}>
        <textarea className="comment-input" placeholder="Add a comment..." value={comment} onChange={(e)=> setComment(e.target.value)}/>
        <button className="comment-submit-button" type="submit">Post</button>
            </form>
        </div>
    )
}
export default CreateComment;