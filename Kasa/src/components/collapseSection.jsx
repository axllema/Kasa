// CollapseSection.jsx
import React from 'react';
import Collapse from './collapse';
import PropTypes from 'prop-types';

// takes title, children, and className as props
const CollapseSection = ({ title, children, containerClassName, buttonClassName }) => {
    // state to track whether the section is collapsed or not
    const [collapsed, setCollapsed] = React.useState(true);
    const [buttonClicked, setButtonClicked] = React.useState(false);

    return (
        <div className={`${containerClassName} ${buttonClicked ? 'clicked' : ''}`}>
            {/* button to toggle the collapse state onClick */}
            <button className={buttonClassName} onClick={() => {
                setCollapsed(!collapsed);
                setButtonClicked(!buttonClicked);
            }}>
                {/* ternary operator to display title or alternative text based on collapse state */}
                {collapsed ? `${title}` : `${title}`}
            </button>
            {/* collapse component to conditionally render children based on collapse state */}
            <Collapse isOpen={!collapsed}>
                {children}
            </Collapse>
        </div>
    );
};

// PropTypes to specify the expected types for each prop
CollapseSection.propTypes = {
    title: PropTypes.string.isRequired, 
    children: PropTypes.node.isRequired,
    // adding these lines so we can add separate CSS classes for button and container
    containerClassName: PropTypes.string,
    buttonClassName: PropTypes.string,
};

export default CollapseSection;
