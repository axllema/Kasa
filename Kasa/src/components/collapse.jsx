/* import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Collapse = ({ isOpen, children }) => {
const [isCollapsed, setIsCollapsed] = useState(isOpen);

const toggleCollapse = () => {
setIsCollapsed(!isCollapsed);
};

return (
<div>
    <button onClick={toggleCollapse}>
    {isCollapsed ? 'Expand' : 'Collapse'}
    </button>
    {!isCollapsed && <div>{children}</div>}
</div>
);
};

Collapse.propTypes = {
isOpen: PropTypes.bool.isRequired,
children: PropTypes.node.isRequired,
};

export default Collapse;
*/