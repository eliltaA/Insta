import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect} from 'react';
import { createFollowing, deleteFollowing, getFollowings, fetchFollowings } from '../../store/followingReducer';

function FollowButton ({ followeeUser }) {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user);
    const followings = useSelector(getFollowings)
   
    useEffect(() => {
        dispatch(fetchFollowings())
    }, [dispatch]);

    const isFollowing = Object.values(followings).some(follow =>
        follow.followerId === currentUser.id && follow.followeeId === followeeUser.id
    );

    // let followersLi = []
    // let followingsLi = []

    const handleFollow = (e) => {
        e.preventDefault();
        const following = {
            follower_id: currentUser.id,
            followee_id: followeeUser.id,
            follower: currentUser.username,
            followee: followeeUser.username
        }
        const follow = dispatch(createFollowing(following))
        // followersLi << currentUser.username
        // followingsLi << followeeUser.username
    }

    const handleUnfollow = (e) => {
        e.preventDefault();
        const idToDelete = Object.values(followings).find(follow => 
            follow.followerId === currentUser.id && follow.followeeId === followeeUser.id
        );
    
        const unfollow = dispatch(deleteFollowing(idToDelete.id));
    }

    const button = isFollowing ? (
        <button onClick={handleUnfollow}>Unfollow</button>
    ) : (
        <button onClick={handleFollow}>Follow</button>
    );

    return (
        <div className="follow-button">
            {button}
        </div>
    );
    
}
export default FollowButton