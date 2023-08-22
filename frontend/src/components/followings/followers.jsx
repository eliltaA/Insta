import { useDispatch,  useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchFollowings, getFollowings } from "../../store/followingReducer";
import './followings.css'

function Followers ({user}){
    const dispatch = useDispatch();
    const followings = useSelector(getFollowings);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      dispatch(fetchFollowings()); // Fetch followings data when the modal opens
    setIsModalOpen(true);
    };

    const closeModal = () => {
    setIsModalOpen(false);
    };

    let followersCount = 0
        Object.values(followings).forEach((following) => {
        if (user.id === following.followeeId) {
            followersCount += 1
        }
        })


    return (
      <div className="followings">
      <button onClick={openModal}>{followersCount}Followers</button>
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
                  return( 
                  <li key={following.id}>
                    <Link to={`/profile/${following.followerId}`} onClick={closeModal}>{following.follower}</Link>
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