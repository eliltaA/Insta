import { csrfFetch } from "../utils/csrf"

export const RECEIVE_POSTS = "Posts/RECEIVE_POSTS"
export const RECEIVE_POST = "Posts/RECEIVE_POST"
export const REMOVE_POST = "Posts/REMOVE_POST"

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


export const getPosts = (state) => Object.values(state.posts);
export const getPost = (state, postId) => state.posts[postId];


export const fetchPosts = () => async dispatch => {
    const res = await csrfFetch('/api/posts');
    if (res.ok){
        const posts = await res.json();
        
        dispatch(receivePosts(posts))
        return posts
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
  
  
export const createPost = postDetails => async dispatch => {
    const res = await csrfFetch('/api/posts', {
        method: 'POST',
        body: postDetails
    })
    if (res.ok) {
        const post = await res.json()
        dispatch(receivePost(post))
        return post
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
        default:
            return state;
    }
}

export default postsReducer;