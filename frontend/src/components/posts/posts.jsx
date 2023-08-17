import { useEffect } from 'react';
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

  return (
    <div className="posts-container">
      {posts.map(post => (
        <div className="post-item" key={post.id}>
          <img className="post-image" src={post.photoUrl} alt="Post" />
          <h3 className="post-caption">{post.caption}</h3>
          <PostItem post={post} />
        </div>
      ))}
    </div>
  );

//   return (
//     <div className="posts-container">
//       {posts.map(post => (
//         <div className="post-item" key={post.id}>
//           <h3 className="post-caption">{post.caption}</h3>
//           <img className="post-image" src={post.photoUrl} alt="Post" />
//           <PostItem post={post} />
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <>
//     {posts.map(post =>( 
//          <div key={post.id}>
//         <h3>{post.caption}</h3>
//         <img src={post.photoUrl}/>
//         <PostItem post={post}/>
//         </div>
//     ))}
//     </>
//   )
}

export default Posts;