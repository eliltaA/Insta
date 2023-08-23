// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createLike, deleteLike, getLikes } from "../../store/likesReducer";

function CreateLikeButton({ likeableType, likeableId }) {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user);
    const allLikes = useSelector(getLikes) 
    // console.log(currentUser.id)
    const userLiked =Object.values(allLikes).filter ( like =>
        like.userId === currentUser.id &&
        like.username === currentUser.username &&
        like.likeableType === likeableType &&
        like.likeableId === likeableId
    );

    const hasLiked = userLiked.length > 0;

    const handleLike = () => {
        if (hasLiked) {
            // console.log()
        dispatch(deleteLike(userLiked.id));
        } else {
            const like = {
                user_id: currentUser.id,
                username: currentUser.username,
                likeable_type: likeableType, 
                likeable_id: likeableId
            }
        dispatch(createLike(like));
        }
    };

    return (
        <button onClick={handleLike}>
        {hasLiked ? "Unlike" : "Like"}
        </button>
    );
}

export default CreateLikeButton;
