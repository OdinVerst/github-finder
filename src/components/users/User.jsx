import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';

class User extends Component {
	componentDidMount() {
		this.props.getUser(this.props.match.params.login);
		this.props.getUserRepo(this.props.match.params.login);
	}
	render() {
		const {
			login,
			hireable,
			avatar_url,
			name,
			location,
			bio,
			html_url,
			company,
			blog,
			followers,
			following,
			public_gists,
			public_repos
		} = this.props.user;

		const { repos, loading } = this.props;

		if (loading) return <Spinner />;
		return (
			<Fragment>
				<Link to="/" className="btn btn-light">
					Back to Search
				</Link>
				Hireable:
				{hireable ? (
					<i className="fas fa-check text-success" />
				) : (
					<i className="fas fa-times-circle text-danger" />
				)}
				<div className="card grid-2">
					<div className="all-center">
						<img
							src={avatar_url}
							alt={`Avatar ${login}`}
							className="round-img"
							style={{
								width: '100px'
							}}
						/>
						<h1>{name}</h1>
						<p>Location: {location}</p>
					</div>
					<div>
						{bio && (
							<Fragment>
								<h3>BIO:</h3>
								<p>{bio}</p>
							</Fragment>
						)}
						<a href={html_url} className="btn btn-dark my-1">
							Visit Github Profile
						</a>
						<ul>
							{login && (
								<li>
									<strong>Login: </strong>
									{login}
								</li>
							)}
							{company && (
								<li>
									<strong>Company: </strong>
									{company}
								</li>
							)}
							{blog && (
								<li>
									<strong>Website: </strong>
									{blog}
								</li>
							)}
						</ul>
					</div>
				</div>
				<div className="card text-center">
					<div className="badge badge-primary">Followers: {followers}</div>
					<div className="badge badge-success">Following: {following}</div>
					<div className="badge badge-ligtht">Public repos: {public_repos}</div>
					<div className="badge badge-dark">Public gists: {public_gists}</div>
				</div>
				<Repos repos={repos} />
			</Fragment>
		);
	}
}

export default User;
