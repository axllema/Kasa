import React from 'react';
import PropTypes from 'prop-types';
import '../scss/style.scss';

const Loader = ({ visible }) => {
    const loadingText = ["K", "A", "S", "A"];

    return (
        <div className={`loadingScreen ${visible ? 'visible' : ''}`}>
            <h3 className="loadingScreen__text">
                {loadingText.map((val, index) => (
                    <span key={index} className="loadingScreen__text__span">
                        {val}
                    </span>
                ))}
            </h3>
        </div>
    );
};

Loader.propTypes = {
    visible: PropTypes.bool.isRequired,
};

export default Loader;
