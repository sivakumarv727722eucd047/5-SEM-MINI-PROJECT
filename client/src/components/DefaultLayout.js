import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../resources/default-layout.css';
import { Button } from 'antd';

function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem('expensetracker-dev-user'));
  const navigate = useNavigate();

  return (
    <div className='layout d-flex'>
      <div className="sidebar">
        <div className="logo">
          <h2>
            <Link to="/" className="text-decoration-none text-dark">
              Lumin
            </Link>
          </h2>
        </div>
        <hr></hr>
        <div className="user-info">
          <h3>Welcome,</h3>
          <h1 className="username">
            <Link to="/profile" className="text-decoration-none text-dark">
              {user.name}
            </Link>
          </h1>
        </div>
        <div className="logout-button">
          <Button
            type="primary"
            danger
            onClick={() => {
              localStorage.removeItem("expensetracker-dev-user");
              navigate("/");
            }}
          >
            Logout
          </Button>
        </div>
      </div>
      <div className='content flex-grow-1 scroll scroll4'>
        {props.children}
      </div>
     
    </div>
  );
}

export default DefaultLayout;
