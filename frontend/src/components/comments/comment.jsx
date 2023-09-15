import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchCommenter, getUser } from '../../store/usersReducers';
import Likes from '../likes/likes';
import CreateLikeButton from '../likes/createLike';
import EditDeleteComment from '../comments/editDeleteComment';
import './comment.css'; 

function Comment({ comment, closepostModal }) {

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
              <span>{author.username}</span>
            </Link>
          )}
        <span className="comment-text">{comment.commentBody}</span>
        <span className="small-like-button" ><CreateLikeButton likeableType="Comment" likeableId={comment.id} /></span>
        </div>
        <div className='c-likes'>
        <Likes type="Comment" typeId={comment.id} closepostModal={closepostModal}/>
        <EditDeleteComment comment={comment}/>
        </div>
    </div>
  );
}

export default Comment;
