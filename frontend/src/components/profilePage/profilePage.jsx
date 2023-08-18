import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, getUser } from '../../store/usersReducers';
import "./profilePage.css"
import { getPosts } from '../../store/postsReducer';

function ProfilePage() {
  const { userId } = useParams(); 
  const dispatch = useDispatch();
  const user = useSelector(getUser(userId)); 
  const posts =  useSelector(getPosts);

  useEffect(() => {
    dispatch(fetchUser(userId)); 
  }, [dispatch, userId]);

  if (!user) {
    return <div>Loading...</div>; // Show loading message while fetching user
  }

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
      {posts.map(post => (
        <div className="post-item" key={post.id}>
          <img className="post-image" src={post.photoUrl} alt="Post" />
          {/* <h3 className="post-caption">{post.caption}</h3> */}
        </div>
        ))}
      </div>
      </div>
      );
    }
    // {/* Display user's posts using grid layout */}

export default ProfilePage;
