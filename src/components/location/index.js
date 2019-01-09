import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe 
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12894.135324805455!2d-115.1686019!3d36.1048502!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xae472256c7c010bd!2sGrand+Garden+Arena!5e0!3m2!1sen!2sus!4v1547055634154"
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