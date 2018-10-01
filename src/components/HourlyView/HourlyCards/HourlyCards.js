import React from 'react';
import HourlyCard from './HourlyCard/HourlyCard';
import './HourlyCards.css';
import _ from 'lodash';
import { Link } from 'react-router-dom';
const HourlyCards = (props) => {
	const { cardId } = props;
	const id = parseInt(cardId, 10);
	const prev = id - 1;
	const next = id + 1;
	return (
		<div className="hourlyCards">
			<Link to={`/hourlyview/${prev}`} className="link">
				&larr; Prev day{' '}
			</Link>
			<HourlyCard />
			<HourlyCard />
			<HourlyCard />
			<HourlyCard />
			<HourlyCard />
			<HourlyCard />
			<HourlyCard />
			<HourlyCard />
			<HourlyCard />
			<HourlyCard />
			<HourlyCard />
			<HourlyCard />
			<HourlyCard />
			<HourlyCard />
			<HourlyCard />
			<HourlyCard />
			<HourlyCard />
			<Link to={`/hourlyview/${next}`} className="link">
				Next day &rarr;
			</Link>
		</div>
	);
};

export default HourlyCards;
