import React, { useState } from "react";
import PropTypes from 'prop-types';
import arrowUp from '../assets/arrow_up.png';
import arrowDown from '../assets/arrow_up.png';
import '../scss/components/_collapse.scss'; 

const CollapseSection = ({ title, content, containerClassName }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className={`buttons-container`}>
            <div
                onClick={() => setToggle(!toggle)}
                className={`${containerClassName} ${toggle ? 'clicked' : ''}`}
            >
                {title}
                {toggle ? (
                    <img
                        className="arrowDown"
                        src={arrowDown}
                        alt="arrow down"
                    />
                ) : (
                    <img
                        className="arrowUp"
                        src={arrowUp}
                        alt="arrow up"
                    />
                )}
            </div>

            {/*   if equipments is an array, it will render each item in a separate paragraph. 
            if it's a string, it will still render it as a single paragraph. */}
            {toggle && (
                <div className={`${containerClassName}_content`}>
                    {Array.isArray(content) ? (
                        content.map((item, index) => <p key={index}>{item}</p>)
                    ) : (
                        <p>{content}</p>
                    )}
                </div>
            )}
        </div>
    );
};

CollapseSection.propTypes = {
    title: PropTypes.string.isRequired,
    containerClassName: PropTypes.string,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]).isRequired
};

export default CollapseSection;
