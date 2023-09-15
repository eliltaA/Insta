import { useDispatch,  useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchFollowings, getFollowings, deleteFollowing } from "../../store/followingReducer";
import FollowButton from "./followButton";
import './followings.css'

function Followers ({user}){
    const dispatch = useDispatch();
    const followings = useSelector(getFollowings);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const currentUser =  useSelector(state => state.session.user);

    const openModal = () => {
      dispatch(fetchFollowings()); 
    setIsModalOpen(true);
    };

    const closeModal = () => {
    setIsModalOpen(false);
    };

    const handleRemoveFollower = (followingId) => {
      dispatch(deleteFollowing(followingId)); 
      // Optionally, you can also update your local state to re-render the follower list.
    };

    let followersCount = 0
        Object.values(followings).forEach((following) => {
        if (user.id === following.followeeId) {
            followersCount += 1
        }
        })


    return (
      <div className="followings">
      <p onClick={openModal}>{followersCount} Followers</p>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              X
            </button>
            <h3>Followers</h3>
            <ul>
              {Object.values(followings).map((following) => {
                if (user.id === following.followeeId) {
                  const followeeUser = {id: following.followerId, username: following.follower}
                  return( 
                  <li key={following.id}>
                    {following.followerProPic === null ? <img className="user-avatar" src={'https://insta-hosting.s3.us-west-2.amazonaws.com/ProfilePicture.JPG'} alt={`${following.follower}'s Profile`} /> :
                      <img className="user-avatar" src={following.followerProPic} alt={`${following.follower}'s Profile`} />}
                    {/* <img className="user-avatar" src={following.followerProPic} alt={`${following.follower}'s Profile`} /> */}
                    <Link to={`/profile/${following.followerId}`} onClick={closeModal} className="f-name">{following.follower}</Link>
                    {following.followerId !== currentUser.id && (
                    <p><FollowButton followeeUser={followeeUser} /></p>
                    )}
                    {user.id === currentUser.id && (
                    <p onClick={() => handleRemoveFollower(following.id)}>Remove</p>)}
                  </li>
                  );
                }
                return null; 
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
export default Followers;