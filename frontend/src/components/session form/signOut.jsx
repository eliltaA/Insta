import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../store/usersReducer';
import { useHistory } from 'react-router-dom';

function LogoutButton() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    history.push('/signin');
  };

  return (
    <button onClick={handleLogout}>Log Out</button>
  );
}

export default LogoutButton;