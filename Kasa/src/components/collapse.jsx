import React from 'react';
import PropTypes from 'prop-types';

const Collapse = ({ isOpen, children }) => {
    return isOpen ? <div>{children}</div> : null;
};

Collapse.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};

export default Collapse;