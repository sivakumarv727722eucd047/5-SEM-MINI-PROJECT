import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserData = JSON.parse(
      localStorage.getItem("expensetracker-dev-user")
    );
    if (storedUserData) {
      setIsLoggedIn(true);
      setUsername(storedUserData.name);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("expensetracker-dev-user");
    setIsLoggedIn(false);
    setUsername("");
    navigate("/login"); // Redirect to login page
  };

  return (
    <Nav>
      <Logo>Lumin</Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/about">About</NavLink>
      </NavLinks>
      <Buttons>
        {isLoggedIn ? (
          <>
            <UsernameLink to="/profile">{username}</UsernameLink>
            <Button onClick={handleLogout} color="#dc3545">
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button to="/login" color="#FF7F50">
              Login
            </Button>
            <Button to="/register" color="#008080">
              Signup
            </Button>
          </>
        )}
      </Buttons>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent black background */
  color: white; /* Text color */
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000; /* Ensures the navbar stays on top of other content */
  backdrop-filter: blur(
    10px
  ); /* Optional: Adds a blur effect to the background */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5); /* Optional: Adds a shadow for better visibility */
`;

const Logo = styled.div`
  font-size: 1.9rem;
  font-weight: bold;
  color: white; /* Updated to white for contrast */
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white; /* Updated to white for contrast */
  font-size: 25px;
  &:hover {
    border-bottom: 2px solid white; /* Updated to white for contrast */
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled(Link)`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 20px;
  background-color: ${(props) => props.color};
  color: white;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none; /* Ensure the link looks like a button */
  text-align: center;
  &:hover {
    opacity: 0.8;
  }
`;

const UsernameLink = styled(Link)`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 20px;
  background-color: #ff7f50; /* You can change this to your desired color */
  color: white;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;
  text-align: center;
  &:hover {
    opacity: 0.8;
  }
`;
