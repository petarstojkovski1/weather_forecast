import React, { Component } from 'react';
import WeatherHeader from './WeatherHeader/WeatherHeader';
import WeatherCards from './WeatherCards/WeatherCards';
import _ from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWeather } from '../../actions/weatherActions';
import './HomeScreen.css';
import Spinner from '../Spinner/Spinner';
import { isToday } from '../../util/date';

class HomeScreen extends Component {
	componentWillMount() {
		this.props.getWeather();
	}
	renderSpinner = () => {
		return <Spinner />;
	};

	render() {
		const { weather, tempType } = this.props;
		if (!weather || !weather.length) {
			return this.renderSpinner();
		}

		const dateNow = new Date();
		const filtered = _.filter(weather, (day) => {
			let date = new Date(day.date);
			return isToday(date) || date >= dateNow;
		});

		return (
			<div className="homeScreen">
				<WeatherHeader />
				<WeatherCards weather={filtered} tempType={tempType} />
			</div>
		);
	}
}

HomeScreen.propTypes = {
	weather: PropTypes.array.isRequired,
	getWeather: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	weather: state.weather.weather,
	tempType: state.tempType.tempType
});

export default connect(
	mapStateToProps,
	{ getWeather }
)(HomeScreen);
