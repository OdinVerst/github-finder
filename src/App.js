import React, { Fragment, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alerts from './components/layout/Alerts';
import About from './components/pages/About';
import User from './components/users/User';

import GithubState from './components/context/github/GithubState';

const App = () => {
	const [alerts, setAlert] = useState(null);

	const showAlerts = (text, type) => {
		setAlert({ text, type });
		setTimeout(() => {
			setAlert(null);
		}, 3000);
	};

	return (
		<GithubState>
			<Router>
				<div className="App">
					<Navbar title="Github Finder" icon="fab fa-github" />
					<div className="container">
						<Alerts alerts={alerts} />
						<Switch>
							<Route
								exact
								path="/"
								render={props => (
									<Fragment>
										<Search setAlerts={showAlerts} />
										<Users />
									</Fragment>
								)}
							/>
							<Route exact path="/about" component={About} />
							<Route exact path="/user/:login" component={User} />
						</Switch>
					</div>
				</div>
			</Router>
		</GithubState>
	);
};

export default App;
