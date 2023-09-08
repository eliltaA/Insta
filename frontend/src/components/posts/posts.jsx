import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchPosts, getPosts } from '../../store/postsReducer';
import PostModal from '../profilePage/postModal';
import Likes from '../likes/likes';
import CreateLikeButton from '../likes/createLike';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons'
import "./posts.css"
import { fetchComments, getComments } from '../../store/commentsReducer';
import CreateComment from '../comments/createComments';

function Posts () {
  const dispatch = useDispatch();
  const posts =  useSelector(getPosts);
  const [selectedPost, setSelectedPost] = useState(null);
  const comments = useSelector(getComments)
  // console.log(posts.comments)

  useEffect(() => {
    dispatch(fetchPosts())
    dispatch(fetchComments())
  },[dispatch])

  const handlePostClick = (e, post) => {
    if (!e.target.classList.contains("likes-no") && !e.target.closest(".likes-no")){
      setSelectedPost(post)
    }
  }
  
  return (
    <div className="posts-container">
      {Object.values(posts).map(post => (
        <div className="post-item" key={post.id} onClick={(e)=> handlePostClick(e, post)}>
          <div className="user-info">
            {post.profilePicture === null ? <img className="user-avatar" src='https://insta-hosting.s3.us-west-2.amazonaws.com/ProfilePicture.JPG' alt={`${post.username}'s Profile`} /> :
              <img className="user-avatar" src={post.profilePicture} alt={`${post.username}'s Profile`} />}
            <Link className="username" to={`/profile/${post.authorId}`}>{post.username}</Link>
          </div>
          <img className="post-image" src={post.photoUrl} alt="Post" />
          <div className='like-comment-icons'>
          <CreateLikeButton likeableType="Post" likeableId={post.id} />
          <span className='comment-icon'><FontAwesomeIcon icon={faComment} size="lg" /></span>
          </div>
          <div className='likes-no'><Likes type="Post" typeId={post.id} /></div>
          {post.caption && (
          <div className='name-caption'>
          <Link to={`/profile/${post.userId}`}>{post.username}</Link>
          <span className="post-caption">{post.caption}</span>
          </div>)}
          <div className='comments-count'>View all {Object.values(comments).filter(comment => comment.postId === post.id).length} comments</div>
          <CreateComment/>
          </div>
      ))}
      {selectedPost && (
        <PostModal
        post={selectedPost}
        onClose={(e)=> setSelectedPost(null)}
        />
      )}
    </div>
  );
      
}

export default Posts;