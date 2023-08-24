import { csrfFetch } from "../utils/csrf";

export const RECEIVE_USER = "users/RECEIVE_USER";
export const RECEIVE_USERS = "users/RECEIVE_USERS";
export const REMOVE_USER = "users/REMOVE_USER";

export const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
})

export const receiveUser = (user) => {
    // debugger
    return {type: RECEIVE_USER,
    user: user}
}

export const removeUser = (userId) => ({
    type: REMOVE_USER,
    userId
})

export const getUsers = (state) => state.users;
export const getUser = (userId) => (state) => state.users[userId];


export const fetchUsers = () => async dispatch => {
    const res = await csrfFetch('/api/users')
    if (res.ok) {
        const users = await res.json();
        dispatch(receiveUsers(users))
        return users
    }
}

export const fetchUser = (userId) => async dispatch => {
    const res = await csrfFetch(`/api/users/${userId}`);
    if(res.ok) {
        const user = await res.json();
        dispatch(receiveUser(user))
        return user
    }
}

export const updateUser = (user, userId) => async dispatch => {
    // const formData = new FormData();

    // for (const key in user) {
    //     formData.append(`user[${key}]`, user[key]);
    // }
    const res = await csrfFetch(`/api/users/${userId}`, {
        method: 'PATCH',
        body: user
        // formData
    });
    if (res.ok) {
        const user = await res.json();
        dispatch(receiveUser(user));
        return user;
    }
}

export const deleteUser = (userId) => async dispatch => {
    const res = await csrfFetch(`/api/users/${userId}`, {
        method: 'DELETE'
    });

    if (res.ok) {
        dispatch(removeUser(userId));
    } 
}

export const deleteProPic = (userId) => async dispatch => {
    const res = await csrfFetch(`/api/users/${userId}/pro_pic/delete`, {
        method: 'PATCH'
    });

    if (res.ok) {
        const data = await res.json();
        dispatch(receiveUser(data));
    } 
}

const usersReducer = (state = {}, action) => {
    const nextState = { ...state };

    switch (action.type) {
        case RECEIVE_USERS:
            return { ...state, ...action.users };
            // return Object.assign(nextState, action.users)  
        case RECEIVE_USER:
            nextState[action.user.user.id] = action.user.user;
            // console.log(action.user.user.id)
            return nextState;
        case REMOVE_USER:
            delete nextState[action.userId];
            return nextState;
        default:
            return state;
    }  
}

export default usersReducer;
