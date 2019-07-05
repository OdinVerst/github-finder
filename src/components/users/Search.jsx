import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
	state = {
		text: ''
	};

	static propTypes = {
		searchUser: PropTypes.func.isRequired,
		clearUsers: PropTypes.func.isRequired,
		showClear: PropTypes.bool.isRequired
	};

	handlerChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handlerSubmit = e => {
		e.preventDefault();
		this.props.searchUser(this.state.text);
		this.setState({ text: '' });
	};

	render() {
		const { clearUsers, showClear } = this.props;

		return (
			<form onSubmit={this.handlerSubmit} className="form">
				<input
					type="text"
					name="text"
					placeholder="Search Users"
					value={this.state.text}
					onChange={this.handlerChange}
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
	}
}

export default Search;
