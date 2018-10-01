import React from 'react';
import HourlyCard from './HourlyCard/HourlyCard';
import './HourlyCards.css';
import { Link } from 'react-router-dom';
const HourlyCards = (props) => {
	const { cardId } = props;
	const prev = cardId - 1;
	const next = cardId + 1;
	return (
		<div className="hourlyCards">
			{cardId !== 0 ? (
				<Link to={`/hourlyview/${prev}`} className="link">
					&larr; Prev day{' '}
				</Link>
			) : null}
			{/* Ovde sam ostavio samo statičke kartice da bi se videlo da su responsive,
			Nisam stigao da uradim prikaz kartica po danu, kontrole za sledeći i prethodni 
			dan rade, takođe i prikaz datuma u komponenti HourlyHeader
			*/}
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
