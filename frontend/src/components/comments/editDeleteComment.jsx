import { useState } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { deleteComment, updateComment } from '../../store/commentsReducer';

function EditDeleteComment ({comment}){
        const dispatch = useDispatch();
        const currentUser =  useSelector(state => state.session.user);
        const [isEditing, setIsEditing] = useState(false);
        const [editedText, setEditedText] = useState(comment.comment_body);
    
        const handleEdit = () => {
            setIsEditing(true);
        };
    
        const handleSave = () => {
            dispatch(updateComment(comment.id));
            setEditedText(comment.comment_body);
            setIsEditing(false);
        };
    
        const handleDelete = () => {
            dispatch(deleteComment(comment.id));
        };
    
        return (
            <div className="comment">
                <div className="comment-content">
                    <div className="comment-author">
                        {/* Display username */}
                    </div>
                    {isEditing ? (
                        <input
                            type="text"
                            value={editedText}
                            onChange={(e) => setEditedText(e.target.value)}
                        />
                    ) : (
                        <span className="comment-text">{comment.comment_body}</span>
                    )}
                    {comment.author_id === currentUser.id && (
                        <>
                            <button onClick={handleEdit}>Edit</button>
                            <button onClick={handleDelete}>Delete</button>
                        </>
                    )}
                    {isEditing && (
                        <button onClick={handleSave}>Save</button>
                    )}
                </div>
            </div>
        );
    
}
export default EditDeleteComment