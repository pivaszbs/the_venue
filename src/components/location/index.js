import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8979.87457632736!2d48.74046585!3d55.7590469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415ead10e59136d3%3A0x4b2878a0acaeb103!2sInnopolis+University!5e0!3m2!1sen!2sru!4v1544359683673" 
                width="100%"
                height="500"
                frameBorder="0"
                allowFullScreen
                >
            </iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>

        
    );
};

export default Location;