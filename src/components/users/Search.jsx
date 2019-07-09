import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ clearUsers, showClear, setAlerts, searchUser }) => {
	const [text, setText] = useState('');

	const handlerChange = e => {
		setText(e.target.value);
	};

	const handlerSubmit = e => {
		e.preventDefault();
		if (text === '') {
			setAlerts(' Please enter something', 'light');
		} else {
			searchUser(text);
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
	searchUser: PropTypes.func.isRequired,
	clearUsers: PropTypes.func.isRequired,
	showClear: PropTypes.bool.isRequired,
	setAlerts: PropTypes.func.isRequired
};

export default Search;
