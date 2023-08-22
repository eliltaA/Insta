import { useDispatch,  useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchFollowings, getFollowings } from "../../store/followingReducer";
import './followings.css'

function Followings ({user}){
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

      let followingsCount = 0
      Object.values(followings).forEach((following) => {
        if (user.id === following.followerId) {
          followingsCount += 1
        }
      })


    return (
      <div className="followings">
      <button onClick={openModal}>{followingsCount}Followings</button>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              X
            </button>
            <h3>Followings</h3>
            <ul>
              {Object.values(followings).map((following) => {
                if (user.id === following.followerId) {
                  return (
                    <li key={following.id}>
                      <Link to={`/profile/${following.followeeId}`} onClick={closeModal}>{following.followee}</Link>
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
export default Followings;
    //   <>
    //   <div className="followings">
    //     <button onClick={openModal}>Followings</button>
    //     <div className="modal-overlay">
    //       <div className="modal-content">
    //       <h2>Followings</h2>
    //       <ul>
    //       {Object.values(followings).map((following) => {
    //             if (user.id === following.followerId) {
    //               return (
    //                 <li key={following.id}>{following.followee}</li>
    //               );
    //             }
    //             return null;
    //           })}
    //       </ul>
    //       <button onClick={closeModal}>Close</button>
    //       </div>
    //     </div>
    //   </div>
    //   </>

    // return (
    //     <div>
    //       <h2>Followings</h2>
    //       <ul>
    //         {Object.values(followings).map((following) => {
    //         //   const followerId = following.followerId;
    //         //   const followeeId = following.followeeId;
    //           return (
    //             <>
    //             <li key={following.id}>
    //               Follower: {following.follower}, Followee: {following.followee}
    //             </li>
    //             </>
    //           );
    //         })}
    //       </ul>
    //     </div>
    //   );
    
    

