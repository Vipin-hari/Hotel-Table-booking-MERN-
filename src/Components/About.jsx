import React from 'react';
import '../CSS/About.css';
const About = () => {
  return (
    <div>
      <h2>About Us</h2>
      <p>Welcome to Beef BBQ Center, where we serve the most delicious BBQ dishes in town!</p>
      <p>Our restaurant is known for its mouthwatering beef BBQ recipes that are cooked to perfection.</p>
      <p>At Beef BBQ Center, we strive to provide an exceptional dining experience for all our customers, with friendly service and cozy ambiance.</p>
      <p>Visit us today and indulge in the flavors of our delectable BBQ creations!</p>
      <div className="founder-image">
        <h1>Founder</h1>
        <img src="https://th.bing.com/th/id/OIP.wOvUCXHcsU9VHY_uUUMZWQHaJP?rs=1&pid=ImgDetMain" alt="Founder" />
        <h2 style={{marginBottom:'80px'}}>John Doe</h2>
      </div>
    </div>
  );
};

export default About;
