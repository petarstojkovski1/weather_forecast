import React, { Component } from 'react';
import './WeatherCard.css';
import { Link } from 'react-router-dom';
import { toValidTemp } from '../../../../util/temp';

import {
	WEATHER_TYPE_IMAGES,
	WEATHER_TYPE_LABELS
} from '../../../../util/enum';

class WeatherCard extends Component {
	render() {
		const { tempType, cardId, weather } = this.props;
		const tempMin = toValidTemp(weather.morning_temperature, tempType);
		const tempMax = toValidTemp(weather.temperature, tempType);

		return (
			<div className="wCard">
				<p className="wCard__date">{weather.date}</p>
				<p />
				<img
					className="wCard__img"
					src={
						WEATHER_TYPE_IMAGES[
							weather.hourly.PM['2'].description_flag
						]
					}
					alt={
						WEATHER_TYPE_LABELS[
							weather.hourly.PM['2'].description_flag
						]
					}
				/>
				<p className="wCard__temp">
					<span className="wCard__temp--big">
						{tempMax}
						{tempType !== 'K' ? <span>&deg;</span> : null}
					</span>
					<span className="wCard__temp--small">
						/ {tempMin}
						{tempType !== 'K' ? <span>&deg;</span> : null}
					</span>
				</p>
				<p className="wCard__desc">
					{
						WEATHER_TYPE_LABELS[
							weather.hourly.PM['2'].description_flag
						]
					}
				</p>

				<p className="wCard__feel">
					Real feel:
					{weather.real_feel}
				</p>
				<Link to={`/hourlyview/${cardId}`}>SEE HOURLY &rarr;</Link>
			</div>
		);
	}
}

export default WeatherCard;
