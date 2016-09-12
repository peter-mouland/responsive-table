import React from 'react';

import './table.scss';


export default ({ className, data, ...props }) => (
    <table className={`answer ${className}`} { ...props }>
    </table>
);
