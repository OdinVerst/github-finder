import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ReposItem from './ReposItem';

const Repos = props => {
	console.log(props);
	return (
		<Fragment>
			{props.repos.map(repo => (
				<ReposItem repo={repo} key={repo.id} />
			))}
		</Fragment>
	);
};
Repos.propTypes = {
	repos: PropTypes.object.isRequired
};

export default Repos;
