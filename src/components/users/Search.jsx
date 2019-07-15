import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../context/github/githubContext';

const Search = ({ clearUsers, showClear, setAlerts }) => {
	const githubContext = useContext(GithubContext);

	const [text, setText] = useState('');

	const handlerChange = e => {
		setText(e.target.value);
	};

	const handlerSubmit = e => {
		e.preventDefault();
		if (text === '') {
			setAlerts(' Please enter something', 'light');
		} else {
			githubContext.searchUser(text);
			setText('');
		}
	};

	return (
		<form onSubmit={handlerSubmit} className="form">
			<input
				type="text"
				name="text"
				placeholder="Search Users"
				value={text}
				onChange={handlerChange}
			/>
			<button
				className="btn btn-dark btn-block"
				style={{ marginBottom: '10px' }}
				type="submit"
			>
				Search
			</button>
			{showClear && (
				<button
					type="button"
					onClick={clearUsers}
					className="btn btn-light btn-block"
				>
					Clear
				</button>
			)}
		</form>
	);
};

Search.propTypes = {
	clearUsers: PropTypes.func.isRequired,
	showClear: PropTypes.bool.isRequired,
	setAlerts: PropTypes.func.isRequired
};

export default Search;
