import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/sessionReducer';

function LogoutButton() {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const logoutButtonStyle = {
    padding: '10px',
    backgroundColor: '#3897f0',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer'
  };

  const logoutButtonHoverStyle = {
    backgroundColor: '#3578e5'
  };

  return (
    <div className="logout" >
    <button style={{...logoutButtonStyle, ...logoutButtonHoverStyle}} onClick={handleLogout}>Log Out</button>
    </div>
  );
}

export default LogoutButton;