import React, { Component } from 'react';
import HourlyHeader from './HourlyHeader/HourlyHeader';
import HourlyCards from './HourlyCards/HourlyCards';
import { connect } from 'react-redux';
import _ from 'lodash';
import './HourlyView.css';
import { isToday } from '../../util/date';

class HourlyView extends Component {
	render() {
		const { weather, tempType } = this.props;

		const { id } = this.props.match.params;
		const cardId = parseInt(id, 10);
		const dateNow = new Date();
		const filtered = _.filter(weather, (day) => {
			let date = new Date(day.date);
			return isToday(date) || date >= dateNow;
		});

		let mapId = 0;
		const mappedWeather = _.map(filtered, (obj) => {
			obj.key = mapId;
			mapId++;
			return obj;
		});

		const hourDay = _.filter(mappedWeather, (day) => {
			return day.key === cardId;
		});

		return (
			<div className="hourlyView">
				<HourlyHeader weather={hourDay[0]} />
				<HourlyCards
					cardId={cardId}
					weather={hourDay[0]}
					tempType={tempType}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	weather: state.weather.weather,
	tempType: state.tempType.tempType
});

export default connect(mapStateToProps)(HourlyView);
