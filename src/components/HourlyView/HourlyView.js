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
		const dateNow = new Date();
		const filtered = _.filter(weather, (day) => {
			let date = new Date(day.date);
			return isToday(date) || date >= dateNow;
		});

		return (
			<div className="hourlyView">
				<HourlyHeader />
				<HourlyCards cardId={id} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	weather: state.weather.weather
});

export default connect(mapStateToProps)(HourlyView);
