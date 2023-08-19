import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchPosts, getPosts } from '../../store/postsReducer';
import PostItem from './postItem';
import "./posts.css"
function Posts () {
  const dispatch = useDispatch();
  const posts =  useSelector(getPosts);
//   console.log(posts)

  useEffect(() => {
    dispatch(fetchPosts())
  },[dispatch])

  // const onClick = () => {

  // }

  return (
    <div className="posts-container">
      {Object.values(posts).map(post => (
        <div className="post-item" key={post.id}>
          <div className="user-info">
            {/* <img className="user-avatar" src={737566.png} alt={`${post.username}'s Avatar`} /> */}
            <Link to={`/profile/${post.authorId}`}>{post.username}</Link>
            {/* <p className="username">{post.username}</p> */}
          </div>
          <img className="post-image" src={post.photoUrl} alt="Post" />
          <h3 className="post-caption">{post.caption}</h3>
          <PostItem post={post} />
        </div>
      ))}
    </div>
  );
}

export default Posts;