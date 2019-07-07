import React, { Fragment, Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import Alerts from './components/layout/Alerts';
import About from './components/pages/About';

class App extends Component {
	state = {
		users: [],
		loading: false,
		alerts: null
	};

	searchUser = async text => {
		this.setState({ loading: true });
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${
				process.env.REACT_APP_GITHUB_CLIENT_ID
			}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		this.setState({ users: res.data.items, loading: false });
	};

	clearUsers = () => {
		this.setState({ users: [], loading: false });
	};

	setAlerts = (text, type) => {
		this.setState({ alerts: { text, type } });
		setTimeout(() => {
			this.setState({ alerts: null });
		}, 3000);
	};

	render() {
		const { users, loading } = this.state;

		return (
			<Router>
				<div className="App">
					<Navbar title="Github Finder" icon="fab fa-github" />
					<div className="container">
						<Alerts alerts={this.state.alerts} />
						<Switch>
							<Route
								exact
								path="/"
								render={props => (
									<Fragment>
										<Search
											searchUser={this.searchUser}
											clearUsers={this.clearUsers}
											setAlerts={this.setAlerts}
											showClear={users.length > 0 ? true : false}
										/>
										<Users loading={loading} users={users} />
									</Fragment>
								)}
							/>
							<Route path="/about" component={About} />
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
