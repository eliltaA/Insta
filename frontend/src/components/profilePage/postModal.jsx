import React from 'react';
import { useRef, useState, useEffect} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from 'react-redux';
import './postModal.css'; // Import your styling if needed
import { deletePost, getPost, updatePost } from '../../store/postsReducer';
import { useSelector } from 'react-redux';
import CreateComment from '../comments/createComments';
import Comment from '../comments/comment';
import Likes from '../likes/likes';
import { fetchComments, getComments } from '../../store/commentsReducer';
import { fetchPost } from '../../store/postsReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faComment } from '@fortawesome/free-solid-svg-icons';
import CreateLikeButton from '../likes/createLike';
import { getLikes } from '../../store/likesReducer';

function PostModal({ post, onClose }) {
    const modalRef = useRef(null);
    const dispatch = useDispatch();
    const comments = useSelector(getComments);
    const commentInputRef = useRef(null);
    const currentUser =  useSelector(state => state.session.user);
    const [editedCaption, setEditedCaption] = useState(post.caption)
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [optionsVisible, setOptionsVisible] = useState(false);
    const [postUpdated, setPostUpdated] = useState(false);
  // console.log(post, "test")
    useEffect(() => {
      dispatch(fetchComments())
      dispatch(fetchPost(post.id))
    },[dispatch])
  

    const closeModal = e => {
        if (modalRef.current === e.target) {
          onClose();
        }
      };

    const handleDelete = async e => {
        e.preventDefault();
        const deleted = await dispatch(deletePost(post.id));
        setDeleteModalOpen(false) 
    };

    const handleEdit = (e) => {
        e.preventDefault();
        const newPost = {
            id: post.id,
            caption: editedCaption,
            photo: post.photoUrl,
            author_id: post.author_id
        }
        dispatch(updatePost(newPost))
        .then(() => {
          dispatch(fetchPost(post.id));
          setEditedCaption(newPost.caption);
          setEditModalOpen(false);
        });
      };

    const handleCommentIconClick = () => {
  // Function to focus on the comment input field
      if (commentInputRef.current) {
        commentInputRef.current.focus();
      }
    };
      
      return (
        <div className="post-modal-container" onClick={closeModal} ref={modalRef}>
            <div className="post-modal-content">
              <img className="post-modal-image" src={post.photoUrl} alt="Post" />
              <div className='post-cont'>
              <div className="post-modal-caption">
                <Link key={post.authorId} to={`/profile/${post.authorId}`}>
                        <img
                            className="user-avatar"
                            src={
                            post.profilePicture === null
                                ? 'https://insta-hosting.s3.us-west-2.amazonaws.com/ProfilePicture.JPG'
                                : post.profilePicture
                            }
                            alt={`${post.username}'s Profile`}
                        />
                        <span className="post-username">{post.username}</span>
                        </Link>
                        <div class="container">
              <span className="caption-text">{post.caption}</span>
              {post.authorId === currentUser.id && (
              <span className="ellipsis-icon" onClick={() => setOptionsVisible(!optionsVisible)}>
                <FontAwesomeIcon icon={faEllipsisH} size="lg" />
                {optionsVisible && (
                  <div className="options">
                    <button className="delete-button" onClick={() => setDeleteModalOpen(true)}>Delete</button>
                    <button className="edit-button" onClick={() => setEditModalOpen(true)}>Edit</button>
                  </div>
                )}
              </span>
            )}
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
                      <input className="edit-caption-input" type="text" value={editedCaption} onChange={e => setEditedCaption(e.target.value)} maxlength="85"/>
                      <button className="edit-button" onClick={handleEdit}>Confirm Edit</button>
                      <button onClick={() => setEditModalOpen(false)}>Cancel</button>
                    </div>
                  )}
              </div>
              <div className="comments-section">
              {Object.values(comments).filter(comment => comment.postId === post.id).map(comment => (
                <React.Fragment key={comment.id}>
                  <Comment comment={comment} />
                </React.Fragment>
                ))}
              </div>
              <div className='create'>
                <div className='like-and-comment'>
                <CreateLikeButton likeableType="Post" likeableId={post.id}/> 
                <span className="comment-icon" onClick={handleCommentIconClick}>
                    <FontAwesomeIcon icon={faComment} size="lg" />
                </span>
                </div>
                <Likes type="Post" typeId={post.id} />
                <CreateComment postId={post.id} inputRef={commentInputRef} />
              </div>
              </div>
            </div>
          </div>
        );
      }
      export default PostModal;
      
      
      
      
      {/* <div className="post-modal-details">
      {post.authorId !== currentUser.id ? null : (
        <div className="post-modal-options">
        <button className="delete-button" onClick={() => setDeleteModalOpen(true)}>Delete</button>
        <button className="edit-button" onClick={() => setEditModalOpen(true)}>Edit</button>
        </div>
        )}
      </div> */}
      {/* {post.authorId === currentUser.id ? (
        <>
          <input className="edit-caption-input" type="text" value={editedCaption} onChange={e => setEditedCaption(e.target.value)} />
        </>
      ) : ( */}
        {/* )} */}