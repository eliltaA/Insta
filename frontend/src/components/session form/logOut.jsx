import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../store/usersReducer';

function LogoutButton() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <button onClick={handleLogout}>Log Out</button>
  );
}

export default LogoutButton;