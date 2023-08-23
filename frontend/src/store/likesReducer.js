import { csrfFetch } from "../utils/csrf";


export const RECEIVE_LIKES = "likes/RECEIVE_LIKES";
export const RECEIVE_LIKE = "likes/RECEIVE_LIKE";
export const REMOVE_LIKE = "likes/REMOVE_LIKE";


    export const receiveLikes = likes => ({
    type: RECEIVE_LIKES,
    likes
    });

    export const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
    });

    export const removeLike = likeId => ({
    type: REMOVE_LIKE,
    likeId
    });

    export const getLikes = (state) => state.likes;

    export const fetchLikes = () => async dispatch => {
    const res = await csrfFetch('/api/likes');
    if (res.ok) {
        const likes = await res.json();
        dispatch(receiveLikes(likes));
        return likes;
    }
    }

    export const fetchLike = likeId => async dispatch => {
        const res = await csrfFetch(`/api/likes/${likeId}`);
        if (res.ok) {
        const like = await res.json();
        dispatch(receiveLike(like));
        return like;
        }
    }

    export const createLike = likeData => async dispatch => {
        const res = await csrfFetch('/api/likes', {
        method: 'POST',
        body: JSON.stringify(likeData)
        });
        if (res.ok) {
        const like = await res.json();
        dispatch(receiveLike(like));
        return like;
        }
    }
    
    export const deleteLike = likeId => async dispatch => {
        const res = await csrfFetch(`/api/likes/${likeId}`, {
        method: 'DELETE'
        });
        if (res.ok) {
        dispatch(removeLike(likeId));
        }
    }


    const likesReducer = (state = {}, action) => {
    const nextState = { ...state };

    switch (action.type) {
        case RECEIVE_LIKES:
        return Object.assign(nextState, action.likes);
        case RECEIVE_LIKE:
        nextState[action.like.id] = action.like;
        return nextState;
        case REMOVE_LIKE:
        delete nextState[action.likeId];
        return nextState;
        default:
        return state;
    }
    }

    export default likesReducer;
