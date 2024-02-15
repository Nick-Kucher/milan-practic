import React from 'react';

function Sponsor({ name, website, image }) {
    return (
        <div className="sponsor">
            <a href={website} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={name} />
            </a>
        </div>
    );
}

export default Sponsor;
