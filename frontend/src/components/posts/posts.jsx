import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchPosts, getPosts } from '../../store/postsReducer';
import PostModal from '../profilePage/postModal';
import Likes from '../likes/likes';
import CreateLikeButton from '../likes/createLike';
import "./posts.css"

function Posts () {
  const dispatch = useDispatch();
  const posts =  useSelector(getPosts);
  const [selectedPost, setSelectedPost] = useState(null);
//   console.log(posts)

  useEffect(() => {
    dispatch(fetchPosts())
  },[dispatch])

  return (
    <div className="posts-container">
      {Object.values(posts).map(post => (
        <div className="post-item" key={post.id} onClick={(e)=> setSelectedPost(post)}>
          <div className="user-info">
            {/* <img className="user-avatar" src={737566.png} alt={`${post.username}'s Avatar`} /> */}
            <Link to={`/profile/${post.authorId}`}>{post.username}</Link>
            {/* <p className="username">{post.username}</p> */}
          </div>
          <img className="post-image" src={post.photoUrl} alt="Post" />
          <h3 className="post-caption">{post.caption}</h3>
          <Likes type="Post" typeId={post.id} />
          <CreateLikeButton likeableType="Post" likeableId={post.id} />
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