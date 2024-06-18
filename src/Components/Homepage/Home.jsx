import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import "./Homepage.scss";
import Hommie from "../../assets/hommie.png";

function Home() {
  const navigate = useNavigate(); 

  const handleGetStarted = () => {
    navigate('/signup'); 
  };

  return (
    <div className="home">
      <div className="home-image">
        <img src={Hommie} alt="" />
      </div>
      <div className="Home-Container">
        <div className="home-heading">
          <h2>Welcome to</h2>
          <h2>Connect <button className='me'>Me</button></h2>
          <p>A social media platform where you can connect with people around the world.</p>
          <p>Sign up or login to get started</p>
        </div>
        <div className="get-started">
          <button onClick={handleGetStarted}>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
