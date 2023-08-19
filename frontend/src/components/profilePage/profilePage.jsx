import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, getUser } from '../../store/usersReducers';
import "./profilePage.css"
import { getPosts } from '../../store/postsReducer';
import PostModal from './postModal';

function ProfilePage() {
  const { userId } = useParams(); 
  const dispatch = useDispatch();
  const user = useSelector(getUser(userId)); 
  const posts =  useSelector(getPosts);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);



  useEffect(() => {
    dispatch(fetchUser(userId)); 
  }, [dispatch, userId]);

  if (!user) {
    return <div>Loading...</div>; 
  }

  // const onClick

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <img src={user.avatarUrl} alt={`${user.username}'s Profile`} />
        </div>
        <div className="profile-info">
          <h2>{user.username}</h2>
          <div className="profile-stats">
            {/* Display follower/following counts and other user info */}
          </div>
          <p className="name">{user.name}</p>
          <p className="name">{user.bio}</p>
        </div>
      </div>
      <div className="profile-tabs">
        {/* Implement tabs for different content sections */}
      </div>
      <div className="profile-posts">
      {Object.values(posts).map(post => (
        <div className="user-post-item" key={post.id} onClick={(e)=>{
          setSelectedPost(post)
         setIsModalOpen(true)}}>
          <img className="user-post-image" src={post.photoUrl} alt="Post" />
        </div>
        ))}
      </div>
      {isModalOpen && (
      <PostModal
        post={selectedPost}
        onClose={() => setIsModalOpen(false)}
      />
    )}
      </div>
      );
    }
    
    export default ProfilePage;