import React from 'react';
import { Link } from 'react-router-dom';
const HourlyHeader = (props) => {
	const { weather } = props;

	return (
		<div className="header">
			<h1>
				<Link
					to="/"
					style={{ textDecoration: 'none', color: '#255df4' }}
				>
					&larr;
				</Link>
				Hourly View
			</h1>
			<p>{weather.date}</p>
		</div>
	);
};

export default HourlyHeader;
