import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, getUser, updateUser } from '../../store/usersReducers';
import "./profilePage.css"
import { getPosts } from '../../store/postsReducer';
import PostModal from './postModal';
import FollowButton from '../followings/followButton';
import Followings from '../followings/followings';
import Followers from '../followings/followers';

function ProfilePage() {
  const { userId } = useParams(); 
  const dispatch = useDispatch();
  const user = useSelector(getUser(userId)); 
  const currentUser =  useSelector(state => state.session.user);
  const posts =  useSelector(getPosts);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [proPicModal, setProPicModal] = useState(false);
  // console.log(user)
  // const [photo, setPhoto] = useState("")

  useEffect(() => {
    dispatch(fetchUser(userId)); 
  }, [dispatch, userId]);

  const handleUploadProPic = (e) => {
    const file = e.target.files[0];
    // if (!file) return;
    const updatedUser = { ...user, profilePicture: file };
    console.log(updatedUser)
    dispatch(updateUser(updatedUser));
    setProPicModal(false);
}


  const handleRemoveProPic = () => {
    const updatedproPic = {
      // id: userId,
      username: user.username,
      email: user.email,
      name: user.name,
      bio: user.bio,
      profilePicture: null,
    };
  console.log(updatedproPic)
  dispatch(updateUser(updatedproPic));
  setProPicModal(false);
}

  if (!user) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar" onClick={() => currentUser.id === user.id && setProPicModal(true)}>
        {user.profilePicture === null ? <img src={process.env.PUBLIC_URL + "/profilePicture.jpg"} alt={`${user.username}'s Profile`} /> :
              <img src={user.profilePicture} alt={`${user.username}'s Profile`} />}
          {/* <img src={user.profilePictureUrl} alt={`${user.username}'s Profile`} /> */}
        </div>
        <div className="profile-info">
          <h2>{user.username}</h2>
          <div className="profile-stats">
          <p className="post-count">Posts: {Object.values(posts).length}</p>
          {user !== currentUser ? <FollowButton followeeUser={user} /> : null}
          {/* {user !== currentUser && ( <FollowButton followeeUser={user} /> )} */}
          <Followers user={user}/>
          <Followings user={user}/>
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
    {proPicModal && ( // Profile picture modal
  <div className="pro-pic-modal">
    <h2>Change Profile Picture</h2>
    <input type="file" onChange={handleUploadProPic} />
    {user.profilePicture && ( // Show option to remove if a profile picture exists
      <button onClick={handleRemoveProPic}>Remove Profile Picture</button>
    )}
    <button onClick={() => setProPicModal(false)}>Cancel</button>
  </div>
)}
      </div>
      );
    }
    
    export default ProfilePage;
    // <input className="create-post-file-input" type="file" placeholder="Drag photos and videos here" onChange={handleFile} required />