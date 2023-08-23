import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchUsers, getUsers } from '../../store/usersReducers';
import Likes from '../likes/likes';
import CreateLikeButton from '../likes/createLike';
// import './Comment.css'; 

function Comment({ comment }) {

    const userId = comment.authorId;
    console.log(userId)
    const users = useSelector(getUsers);
    // const user = users[userId];
    // console.log(users[userId])
    // console.log(user)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchUsers())
    },[dispatch])
    // const user = useSelector(getUser(userId));
    // console.log(user)
    
  return (
    <div className="comment">
      {/* <img className="comment-author-avatar" src={comment.authorAvatar} alt={`${comment.author}'s Avatar`} /> */}
      <div className="comment-content">
        <div className="comment-author">
            {Object.values(users).map(user => (
                // console.log(user)
                // console.log(users[userId])
                // console.log(user.username)
            <Link key={user.id} to={`/profile/${userId}`}>{user.id === userId ? user.username : null}</Link>
        ))}
        </div>
        <span className="comment-text">{comment.commentBody}</span>
        <Likes type="Comment" typeId={comment.id} />
        <CreateLikeButton likeableType="Comment" likeableId={comment.id} />
      </div>
    </div>
  );
}

export default Comment;
