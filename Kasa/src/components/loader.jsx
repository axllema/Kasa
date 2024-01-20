import React from 'react';

const Loader = () => {
    const loadingText = ["K", "A", "S", "A"];

    return (
        <div className="loadingScreen">
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

export default Loader;
