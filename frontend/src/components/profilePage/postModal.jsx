import React from 'react';
import { useRef, useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import './postModal.css'; // Import your styling if needed
import { deletePost, updatePost } from '../../store/postsReducer';
import { useSelector } from 'react-redux';
import CreateComment from '../comments/createComments';
import Comment from '../comments/comment';
import { fetchComments, getComments } from '../../store/commentsReducer';
import EditDeleteComment from '../comments/editDeleteComment';

function PostModal({ post, onClose }) {
    const modalRef = useRef(null);
    const dispatch = useDispatch();
    const comments = useSelector(getComments);
    // const postId = post.id
    const currentUser =  useSelector(state => state.session.user);
    const [editedCaption, setEditedCaption] = useState(post.caption)
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);

    useEffect(() => {
      dispatch(fetchComments())
    },[dispatch])
  

    const closeModal = e => {
        if (modalRef.current === e.target) {
          onClose();
        }
      };

    const handleDelete = async e => {
        e.preventDefault();
        const deleted = await dispatch(deletePost(post.id));
         if (deleted) setDeleteModalOpen(false) 
    };

    const handleEdit = async e => {
        e.preventDefault();
        const newPost = {
            id: post.id,
            caption: editedCaption,
            photo: post.photoUrl,
            author_id: post.author_id
        }
        const edited = await dispatch(updatePost(newPost));
        setEditedCaption(post.caption)
        if (edited) onClose();
    };
      
        return (
          <div className="post-modal-container" onClick={closeModal} ref={modalRef}>
            <div className="post-modal-content">
              <img className="post-modal-image" src={post.photoUrl} alt="Post" />
              <div className="comments-section">
              {Object.values(comments).filter(comment => comment.postId === post.id).map(comment => (
                <>
                  <Comment key={comment.id} comment={comment} />
                  <EditDeleteComment key={4} comment={comment}/>
                </>
                ))}
              </div>
              <div className='comment'>
                <CreateComment postId={post.id}/>
              </div>
              <div className="post-modal-details">
                {post.authorId !== currentUser.id ? null : (
                  <div className="post-modal-options">
                    <button className="delete-button" onClick={() => setDeleteModalOpen(true)}>Delete</button>
                    <button className="edit-button" onClick={() => setEditModalOpen(true)}>Edit</button>
                  </div>
                )}
                <div className="post-modal-caption">
                  <span className="caption-username">{post.username}</span>
                  {post.authorId === currentUser.id ? (
                    <>
                      <input className="edit-caption-input" type="text" value={editedCaption} onChange={e => setEditedCaption(e.target.value)} />
                    </>
                  ) : (
                    <span className="caption-text">{post.caption}</span>
                  )}
                </div>
              </div>
            </div>
            
            {/* Delete Confirmation Modal */}
            {deleteModalOpen && (
              <div className="confirmation-modal">
                <p>Are you sure you want to delete this post?</p>
                <button onClick={handleDelete}>Confirm Delete</button>
                <button onClick={() => setDeleteModalOpen(false)}>Cancel</button>
              </div>
            )}
      
            {/* Edit Confirmation Modal */}
            {editModalOpen && (
              <div className="confirmation-modal">
                <input className="edit-caption-input" type="text" value={editedCaption} onChange={e => setEditedCaption(e.target.value)} />
                <button className="edit-button" onClick={handleEdit}>Confirm Edit</button>
                <button onClick={() => setEditModalOpen(false)}>Cancel</button>
              </div>
            )}
          </div>
        );
      }
      
      export default PostModal;
    


