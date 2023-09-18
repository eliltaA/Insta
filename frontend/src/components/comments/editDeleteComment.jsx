import { useState } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { deleteComment, updateComment } from '../../store/commentsReducer';
import "./ED.css"
function EditDeleteComment ({comment}){
        const dispatch = useDispatch();
        const currentUser =  useSelector(state => state.session.user);
        const [isEditing, setIsEditing] = useState(false);
        const [editedText, setEditedText] = useState(comment.commentBody);
    
        const handleEdit = (e) => {
            e.preventDefault();
            setIsEditing(true);
        };
    
        const handleSave = (e) => {
            e.preventDefault();
            const commentDetail = {
                id: comment.id,
            post_id: comment.postId,
            author_id: currentUser.id,
            comment_body: editedText
        }
        dispatch(updateComment(commentDetail))
        .then(() => {
            // Once the update is successful, reset the text and exit edit mode
            setEditedText(commentDetail.comment_body);
            setIsEditing(false);
        });
        };

        const handleCancel = (e) => {
            e.preventDefault();
            // Reset the text and exit edit mode
            setEditedText(comment.commentBody);
            setIsEditing(false);
        };
    
        const handleDelete = (e) => {
            e.preventDefault();
            dispatch(deleteComment(comment.id));
        };
        if (!comment) return null;
        return (
            <div className="comment">
                <div className="comment-content">
                    {/* <div className="comment-author">
                        {/* Display username */}
                    {/* </div> */} 
                    {isEditing ? (
                        <textarea
                            type="text"
                            value={editedText}
                            onChange={(e) => setEditedText(e.target.value)}
                            maxLength="85"
                        />
                    ) : (
                        <span className="comment-text">{comment.comment_body}</span>
                    )}
                    {comment.authorId === currentUser.id && !isEditing && (
                        <div className='comment-actions'>
                        <a href="#" onClick={handleEdit}>Edit</a>
                        <a href="#" onClick={handleDelete}>Delete</a>
                        </div>
                    )}
                    {isEditing && (
                    <div className='comment-actions'>
                        <button onClick={handleSave}>Save</button>
                        <button onClick={handleCancel}>Cancel</button>
                    </div>
                    )}
                </div>
            </div>
        );
    
}
export default EditDeleteComment 