import { csrfFetch } from "../utils/csrf";
import { receiveError } from "./sessionReducer";
import { RECEIVE_USER } from "./usersReducers";

export const RECEIVE_POSTS = "posts/RECEIVE_POSTS"
export const RECEIVE_POST = "posts/RECEIVE_POST"
export const REMOVE_POST = "posts/REMOVE_POST"
export const POST_ERROR = "posts/POST_ERROR"

export const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
})

export const receivePost = post => ({
    type: RECEIVE_POST,
    post
})

export const removePost = postId => ({
    type: REMOVE_POST,
    postId
})

export const postError = error => ({
    type: POST_ERROR,
    payload: error
})

export const getPosts = (state) => Object.values(state.posts);
export const getPost = (state, postId) => state.posts[postId];


export const fetchPosts = () => async dispatch => {
    const res = await csrfFetch('/api/posts');
    if (res.ok){
        const posts = await res.json();
        
        dispatch(receivePosts(posts))
        return posts
    }else{

    }
  }
  
  export const fetchTea = postId => async dispatch => {
    const res = await csrfFetch(`/api/posts/${postId}`)
    if (res.ok){
        const post = res.json();
        dispatch(receivePost(post))
        return post
    }
  }
  
  
export const createPost = post => async dispatch => {
    // debugger
    const res = await csrfFetch('/api/posts', {
        method: 'POST',
        body: post,
        // headers:{
        //     "Content-Type": "multipart/form-data"
        // }
    })
    // console.log("HIHIHIHIHIHI")
    if (res.ok) {
        const post = await res.json()
        dispatch(receivePost(post))
        return post
    }else {
        // const error = await res.json()
        // dispatch(receiveError(res.status))
    }
}

export const updatePost = postDetails => async dispatch => {
    const res = await csrfFetch(`/api/posts/${postDetails.id}`, {
        method: 'PUT',
        body: postDetails
    })
    if (res.ok) {
        const post = await res.json()
        dispatch(receivePost({post}))
        return post
    }else{
        // errors
    }
}

export const deletePost = (postId) => async dispatch => { 
    const res = await csrfFetch(`/api/posts/${postId}`, { 
        method: 'DELETE' 
    });

    if (res.ok) {
        dispatch(removePost(postId));
    } else {
        // const errors = await res.json();
        // dispatch(receivePostErrors(errors));
    }
}


const postsReducer = (state = {}, action) => {
    const nextState = { ...state };

    switch (action.type) {
        case RECEIVE_POSTS:
            // return { ...state, ...action.posts };
            return Object.assign(nextState, action.posts)       
        case RECEIVE_POST:
            nextState[action.post.id] = action.post;
            return nextState;
        case REMOVE_POST:
            delete nextState[action.postId];
            return nextState;
        case RECEIVE_USER: 
            return action.user.posts
        default:
            return state;
    }
}

export default postsReducer;