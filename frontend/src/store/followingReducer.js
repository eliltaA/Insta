import { csrfFetch } from "../utils/csrf";

export const RECEIVE_FOLLOWINGS = "followings/RECEIVE_FOLLOWINGS"
export const RECEIVE_FOLLOWING = "followings/ RECEIVE_FOLLOWING"
export const REMOVE_FOLLOWING = "followings/REMOVE_FOLLOWING"

export const receiveFollowings = followings => ({
    type: RECEIVE_FOLLOWINGS,
    followings
})

export const receiveFollowing = following => ({
    type: RECEIVE_FOLLOWING,
    following
})

export const removeFollowing = followingId => ({
    type: REMOVE_FOLLOWING,
    followingId
})

export const getFollowings = (state) => state.followings;
export const getFollowing = (state, followingId) => state.followings[followingId];

export const fetchFollowings = () => async dispatch => {
    const res = await csrfFetch('/api/followings');
    if (res.ok){
        const followings = await res.json();
        // console.log(followings)
        dispatch(receiveFollowings(followings))
        return followings
    }
  }
  
  export const fetchFollowing = (followingId) => async dispatch => {
    const res = await csrfFetch(`/api/followings/${followingId}`);
    if (res.ok){
        const following = await res.json();
        dispatch(receiveFollowing(following))
        return following
    }
  }

  export const createFollowing = (following) => async dispatch => {
    const res = await csrfFetch('/api/followings', {
        method: 'POST',
        body: JSON.stringify(following),
    })
    if (res.ok){
        const following = await res.json();
        dispatch(receiveFollowing(following))
        return following
    }
  }

  export const deleteFollowing = (followingId) => async dispatch => {
    const res = await csrfFetch(`/api/followings/${followingId}`, {
        method: 'DELETE',
    });
    if (res.ok){
        dispatch(removeFollowing(followingId))
    }
  }

  const followingsReducer = (state = {}, action) => {
    const nextState = { ...state };

    switch (action.type) {
        case RECEIVE_FOLLOWINGS:
            return Object.assign(nextState, action.followings)       
        case RECEIVE_FOLLOWING:
            nextState[action.following.id] = action.following;
            return nextState;
        case REMOVE_FOLLOWING:
            delete nextState[action.followingId];
            return nextState;
        default:
            return state;
    }
}

export default followingsReducer;


