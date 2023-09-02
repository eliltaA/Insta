import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchCommenter, getUser } from '../../store/usersReducers';
import Likes from '../likes/likes';
import CreateLikeButton from '../likes/createLike';
// import './Comment.css'; 

function Comment({ comment }) {

    const userId = comment.authorId;
    const author = useSelector(getUser(userId));
    const dispatch = useDispatch();
    
    useEffect(()=>{
      dispatch(fetchCommenter(userId))
    },[dispatch])
    // const author = users[userId];

  return (
    <div className="comment">
      <div className="comment-content">
      {author && (
            <Link key={author.id} to={`/profile/${userId}`}>
              {author.profilePicture === null ? <img className="user-avatar" src={'https://insta-hosting.s3.us-west-2.amazonaws.com/ProfilePicture.JPG'} alt={`${author.username}'s Profile`} /> :
              <img className="user-avatar" src={author.profilePicture} alt={`${author.username}'s Profile`} />}
              {/* <img src={author.profilePicture} alt={`${author.username}'s Profile`} /> */}
              <span>{author.username}</span>
            </Link>
          )}
        {/* <div className="comment-author">
            {Object.values(users).map(user =>(
            <Link key={user.id} to={`/profile/${userId}`}>{user.id === userId ? user.username : null}</Link>
            ))}
        </div> */}
        <span className="comment-text">{comment.commentBody}</span>
        <Likes type="Comment" typeId={comment.id} />
        <CreateLikeButton likeableType="Comment" likeableId={comment.id} />
      </div>
    </div>
  );
}

export default Comment;
