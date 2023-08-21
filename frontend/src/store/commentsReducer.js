import { csrfFetch } from "../utils/csrf";

export const RECEIVE_COMMENTS = "comments/RECEIVE_COMMENTS"
export const RECEIVE_COMMENT = "comments/RECEIVE_COMMENT"
export const REMOVE_COMMENT = "comments/REMOVE_COMMENT"

export const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
})

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})

export const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
})

export const getComments = (state) => state.comments;
export const getComment = (state, commentId) => state.comments[commentId];

export const fetchComments = () => async dispatch => {
    const res = await csrfFetch(`/api/comments`)
    if (res.ok){
        const comments = await res.json();
        dispatch(receiveComments(comments))
        return comments
    }
}

export const fetchComment = (commentId) => async dispatch => {
    const res = await csrfFetch(`/api/comments/${commentId}`)
    if (res.ok){
        const comment = await res.json();
        dispatch(receiveComment(comment))
        return comment
    }
}

export const createComment = (comment) => async dispatch => {
    const res = await csrfFetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify(comment)
    })
    if (res.ok){
        const comment = await res.json();
        dispatch(receiveComment(comment))
        return comment
    }
}

export const updateComment = (comment) => async dispatch => {
    const res = await csrfFetch(`/api/comments/${comment.id}`, {
        method: 'PUT',
        body: JSON.stringify(comment)
    })
    if (res.ok){
        const comment = await res.json();
        dispatch(receiveComment(comment))
        return comment
    }
}

export const deleteComment = (commentId) => async dispatch => {
    const res = await csrfFetch(`/api/comments/${commentId}`, {
        method: 'DELETE'
    })
    if (res.ok){
        dispatch(removeComment(commentId))
    }
}

const commentsReducer = (state = {}, action) => {
    const nextState = { ...state };

    switch (action.type) {
        case RECEIVE_COMMENTS:
            return Object.assign(nextState, action.comments)       
        case RECEIVE_COMMENT:
            nextState[action.comment.id] = action.comment;
            return nextState;
        case REMOVE_COMMENT:
            delete nextState[action.commentId];
            return nextState;
        default:
            return state;
    }
}

export default commentsReducer;