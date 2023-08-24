import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProPic, fetchUser, getUser, updateUser } from '../../store/usersReducers';
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
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editedName, setEditedName ] = useState(currentUser.name);
  const [editedBio, setEditedBio ] = useState(currentUser.bio);
  // const [proPic, setProPic] = useState("")

  useEffect(() => {
    dispatch(fetchUser(userId)); 
  }, [dispatch, userId]);

//   const handleUploadProPic = (e) => {
//     const file = e.target.files[0];
//     const updatedUser = { ...user, profilePicture: file };
//     dispatch(updateUser(updatedUser));
//     setProPicModal(false);
// }
const handleUploadProPic = (e) => {
  e.preventDefault();
  const file = e.target.files[0];
  const updatedUser = { ...user, profilePicture: file };
  const formData = new FormData();

  for (const key in updatedUser) {
      formData.append(`user[${key}]`, updatedUser[key]);
  }
  dispatch(updateUser(formData, updatedUser.id));
  setProPicModal(false);
}

  const handleRemoveProPic = (e) => {
    e.preventDefault();
    dispatch(deleteProPic(currentUser.id));
  setProPicModal(false);
}

const handleEditClick = () => {
  setIsEditOpen(true);
};


const handleSaveChanges = (e) => {
  e.preventDefault();
  const editedUser = {
    name: editedName,
    bio: editedBio,
  }
  const formData = new FormData();

  for (const key in editedUser) {
      formData.append(`user[${key}]`, editedUser[key]);
  }
  dispatch(updateUser(formData, currentUser.id));
  setEditedName(user.name)
  setEditedBio(user.bio)
  setIsEditOpen(false);
};

const handleCancelEdit = () => {
  setIsEditOpen(false);
};


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
          {currentUser.id === user.id && ( // Render edit button only for the current user
              <button onClick={handleEditClick}>Edit Profile</button>
            )}
            {isEditOpen && (
        <div className="edit-profile-modal-container">
        <div className="edit-profile-form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={editedName}
              onChange={(e)=> setEditedName(e.target.value)}
            />
          </label>
          <label>
            Bio:
            <textarea
              name="bio"
              value={editedBio}
              onChange={(e)=> setEditedBio(e.target.value)}
            />
          </label>
          <button onClick={handleSaveChanges}>Save Changes</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
        </div>
      )}
          {user !== currentUser ? <FollowButton followeeUser={user} /> : null}
          {/* {currentUser.id === user.id && ( <FollowButton followeeUser={user} /> )} */}
          <Followers user={user}/>
          <Followings user={user}/>

          </div>
          <p className="name">{user.name}</p>
          <p className="name">{user.bio}</p>
        </div>
      </div>
      <div className="profile-tabs">
    
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
    {proPicModal && (
  <div className="pro-pic-modal">
    <h2>Change Profile Picture</h2>
    <input type="file" onChange={handleUploadProPic} />
    {user.profilePicture && ( 
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