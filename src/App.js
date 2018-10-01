import React, { Component } from 'react';
import HomeScreen from './components/HomeScreen/HomeScreen';
import Navigation from './components/Navigation/Navigation';
import HourlyView from './components/HourlyView/HourlyView';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="App">
						<Navigation />
						<Switch>
							<Route exact path="/" component={HomeScreen} />
							<Route
								exact
								path="/hourlyview/:id"
								component={HourlyView}
							/>
						</Switch>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
