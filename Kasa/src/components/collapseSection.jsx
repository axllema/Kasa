import React from 'react';
import Collapse from './collapse';
import PropTypes from 'prop-types';

const CollapseSection = ({ title, children }) => {
    const [collapsed, setCollapsed] = React.useState(true);

    return (
        <div>
            <button onClick={() => setCollapsed(!collapsed)}>
                {collapsed ? `${title}` : `${title}`}
            </button>
            <Collapse isOpen={!collapsed}>
                {children}
            </Collapse>
        </div>
    );
};

// Spécifier les types des propriétés avec PropTypes
CollapseSection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default CollapseSection;
