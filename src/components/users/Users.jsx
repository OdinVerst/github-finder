import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
	state = {
		users: [
			{
				id: 'id1',
				login: 'octocat',
				avatar_url: 'https://avatars0.githubusercontent.com/u/583231?s=460&v=4',
				html_url: 'https://github.com/octocat'
			},
			{
				id: 'id2',
				login: 'octocat2',
				avatar_url: 'https://avatars0.githubusercontent.com/u/583231?s=460&v=4',
				html_url: 'https://github.com/octocat'
			},
			{
				id: 'id3',
				login: 'octocat3',
				avatar_url: 'https://avatars0.githubusercontent.com/u/583231?s=460&v=4',
				html_url: 'https://github.com/octocat'
			}
		]
	};
	render() {
		return (
			<div style={userStyle}>
				{this.state.users.map(user => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	}
}

const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem'
};

export default Users;
