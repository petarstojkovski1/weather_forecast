import React from 'react';
import { Link } from 'react-router-dom';
const HourlyHeader = (props) => {
	return (
		<div className="header">
			<h1>
				<Link to="/" style={{ textDecoration: 'none' }}>
					&larr;
				</Link>
				Hourly View
			</h1>
			<p>Belgrade, Serbia {props.time}</p>
		</div>
	);
};

export default HourlyHeader;
