import React from 'react';
import {
	WEATHER_TYPE_IMAGES,
	WEATHER_TYPE_LABELS
} from '../../../../util/enum';
import './HourlyCard.css';

const HourlyCard = (props) => {
	return (
		<div className="hourlyCard">
			<p className="hourlyCard__hour">9 PM</p>
			<img
				className="hourlyCard__img"
				src="/images/clear_sky.png"
				// src={
				//     WEATHER_TYPE_IMAGES[
				//         weather.hourly.PM['2'].description_flag
				//     ]
				// }
				// alt={
				//     WEATHER_TYPE_LABELS[
				//         weather.hourly.PM['2'].description_flag
				//     ]
				// }
			/>
			<p>
				{/* {WEATHER_TYPE_LABELS[weather.hourly.PM['2'].description_flag]} */}
			</p>
			<p className="hourlyCard__temp">28&deg;</p>
			<p>7 km/h</p>
		</div>
	);
};

export default HourlyCard;
