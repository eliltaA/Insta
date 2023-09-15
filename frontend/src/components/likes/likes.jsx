import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLikes } from "../../store/likesReducer";
import { Link } from "react-router-dom";
import "./likes.css";

function Likes({ type, typeId }) {
    const dispatch = useDispatch();
    const likes = useSelector(state => state.likes);

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        dispatch(fetchLikes());
    }, [dispatch]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    const filteredLikes = Object.values(likes).filter(like => {
        return like.likeableType === type && like.likeableId === typeId;
    });
    
    return (
        <div className="likes">
        <button className="likes-button" onClick={openModal}>{filteredLikes.length} Likes</button>
        {isModalOpen && (
        <div className="modal-overlay">
            <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
                X
                </button>
                <h3>Likes</h3>
                <ul className="likes-list">
                    {filteredLikes.map(like => (
                    <li className="like-item" key={like.id}>
                        <Link to={`/profile/${like.userId}`}>
                        <img
                            className="user-avatar"
                            src={
                            like.profilePicture === null
                                ? 'https://insta-hosting.s3.us-west-2.amazonaws.com/ProfilePicture.JPG'
                                : like.profilePicture
                            }
                            alt={`${like.username}'s Profile`}
                        />
                        <span className="like-username">{like.username}</span>
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
        )}
    </div>
    );
}

export default Likes;
