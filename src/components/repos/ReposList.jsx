import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ReposItem from './ReposItem';

const ReposList = props => {
	return (
		<Fragment>
			{props.repos.map(repo => (
				<ReposItem repo={repo} key={repo.id} />
			))}
		</Fragment>
	);
};
ReposList.propTypes = {
	repos: PropTypes.array.isRequired
};

export default ReposList;
