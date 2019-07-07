import React from 'react';
import PropTypes from 'prop-types';

const Alerts = ({ alerts }) => {
	return (
		alerts !== null && (
			<div className={`alert alert-${alerts.type}`}>
				<i className="fas fa-info-circle" />
				{alerts.text}
			</div>
		)
	);
};

Alerts.propTypes = {
	alert: PropTypes.shape({
		type: PropTypes.string,
		text: PropTypes.string
	})
};

export default Alerts;
