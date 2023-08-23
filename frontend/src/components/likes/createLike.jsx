// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createLike, deleteLike, getLikes } from "../../store/likesReducer";
import './likeButton.css'

function CreateLikeButton({ likeableType, likeableId }) {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user);
    const allLikes = useSelector(getLikes) 
    // console.log(currentUser.id)
    const userLiked = Object.values(allLikes).filter ( like =>
        like.userId === currentUser.id &&
        like.username === currentUser.username &&
        like.likeableType === likeableType &&
        like.likeableId === likeableId
    );
    const hasLiked = userLiked.length > 0;
    console.log(userLiked)

    const handleLike = () => {
        if (hasLiked) {
            // console.log()
        dispatch(deleteLike(userLiked[0].id));
        } else {
            const like = {
                user_id: currentUser.id,
                username: currentUser.username,
                likeable_type: likeableType, 
                likeable_id: likeableId
            }
            console.log(like)
        dispatch(createLike(like));
        }
    };

    return (
        <button className={hasLiked ? "liked-button" : "like-button"} onClick={handleLike}>
            <svg className={hasLiked ? "liked-icon" : "like-icon"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 16.36 2 13.08 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 4.58-3.4 7.86-8.55 11.54L12 21.35z"/>
            </svg>
            {/* {hasLiked ? "Unlike" : "Like"} */}
            </button>
    );
}

export default CreateLikeButton;
