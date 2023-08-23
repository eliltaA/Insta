import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLikes } from "../../store/likesReducer";

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
        <button onClick={openModal}>{filteredLikes.length} Likes</button>
        {isModalOpen && (
        <div className="modal-overlay">
            <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
                X
                </button>
                <h3>Likes</h3>
                <ul>
                {filteredLikes.map(like => (
                    <li key={like.id}>{like.username}</li>
                ))}
            </ul>
            </div>
        </div>
        )}
    </div>
    );
}

export default Likes;
