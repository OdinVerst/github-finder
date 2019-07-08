import React, { Component } from 'react';

class User extends Component {
	componentDidMount() {
		this.props.getUser(this.props.match.params.login);
	}
	render() {
		return <div>{this.props.user.login}</div>;
	}
}

export default User;
