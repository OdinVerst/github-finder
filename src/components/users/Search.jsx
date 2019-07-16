import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alerts/alertContext';

const Search = () => {
	const githubContext = useContext(GithubContext);
	const alertContext = useContext(AlertContext);
	const { users, clearUsers } = githubContext;
	const { setAlert } = alertContext;

	const [text, setText] = useState('');

	const handlerChange = e => {
		setText(e.target.value);
	};

	const handlerSubmit = e => {
		e.preventDefault();
		if (text === '') {
			setAlert('Please enter something', 'light');
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
			{users.length > 0 && (
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

export default Search;
