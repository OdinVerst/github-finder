import React from 'react';

const ReposItem = ({ repo }) => {
	return (
		<div className="card">
			<a href={repo.html_url}>{repo.name}</a>
		</div>
	);
};

export default ReposItem;
