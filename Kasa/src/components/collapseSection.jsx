import React from 'react';
import Collapse from './collapse';
import arrowDown from '../assets/arrow_forward.png';
import arrowUp from '../assets/arrow_back.png';
import PropTypes from 'prop-types';

// takes title, children, and className as props
const CollapseSection = ({ title, children, containerClassName, buttonClassName }) => {
    // state to track whether the section is collapsed or not
    const [collapsed, setCollapsed] = React.useState(true);
    const [buttonClicked, setButtonClicked] = React.useState(false);

    return (
            <div className={`${containerClassName} ${collapsed ? '' : 'clicked'}`}>
         {/* button to toggle the collapse state onClick */}
                <button className={buttonClassName} onClick={() => setCollapsed(!collapsed)}>
                    {title}
                    <img src={collapsed ? arrowDown : arrowUp} alt="Arrow" />
                </button>
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

