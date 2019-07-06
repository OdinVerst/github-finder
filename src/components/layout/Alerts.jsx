import React from 'react';

const Alerts = ({ alerts, type }) => {
	return alerts && <div className={`${type}`}>{alerts}</div>;
};

export default Alerts;
