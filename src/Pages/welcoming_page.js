import React from 'react';
import backgroundImage from '../images/back.png';
import image1 from '../images/card1.png';
import image2 from '../images/card2.png'; 

function Welcome() {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh', 
  };

  const clickableContainerStyle = {
    flex: 1,
    textAlign: 'center',
    cursor: 'pointer',
    padding: '20px',
    backgroundColor: 'rgba(255, 255 , 255 ,.95)',
    margin: '25px',
    color: 'black',
    fontSize: '24px',
    fontWeight: '500',
    height: '450px',
    width: '360px',
    boxShadow: '0 1px 6px rgba(255, 255, 255)',
    borderRadius: '10px',
  };

  const containerStyle = {
    margin: '5px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center', 
  };

  const imageContainerStyle = {
    width: '100%', 
    height: '230px', 
    margin: '0 auto 10px',
  };

  const textStyles = {
    color: 'gray',
    fontWeight: '400',
    margin: '20px 0 10px',
  };

  const linkStyle = {
    textDecoration: 'none',
  };

  return (
    <div style={divStyle}>
      <div style={containerStyle}>
        <a href="/page1" style={linkStyle}>
          <div style={clickableContainerStyle}>
            <div style={imageContainerStyle}>
              <img
                src={image1}
                alt="Image 1"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
            Finding a Job
            <div style={textStyles}>
              Click Here
              <br />
              And
              <br />
              Sign up
            </div>
          </div>
        </a>
        <a href="/page2" style={linkStyle}>
          <div style={clickableContainerStyle}>
            <div style={imageContainerStyle}>
              <img
                src={image2}
                alt="Image 2"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
            Finding an Employee
            <div style={textStyles}>
              Click Here
              <br />
              And
              <br />
              Sign up
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Welcome;
