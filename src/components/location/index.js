import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe 
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13413.105011910326!2d-73.99338605514662!3d40.75891492063915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1543727942951" 
        width="100%" 
        height="500px" 
        frameBorder="0" 
        allowFullScreen>
      </iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;