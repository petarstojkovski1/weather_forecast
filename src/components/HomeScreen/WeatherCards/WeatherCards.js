import React, { Component } from 'react';
import WeatherCard from './WeatherCard/WeatherCard';
import Slider from 'react-slick';

class WeatherCards extends Component {
	render() {
		const settings = {
			infinite: false,
			speed: 500,
			slidesToShow: 5,
			slidesToScroll: 1,
			focusOnSelect: true,
			swipeToSlide: true,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 800,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						arrows: false
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						initialSlide: 1,
						arrows: false
					}
				},
				{
					breakpoint: 400,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						initialSlide: 1,
						centerMode: true,
						arrows: false
					}
				}
			]
		};

		const { weather } = this.props;
		const { tempType } = this.props;

		return (
			<div>
				<Slider {...settings}>
					{weather.map((data, key) => (
						<WeatherCard
							key={key}
							cardId={key}
							weather={data}
							tempType={tempType}
						/>
					))}
				</Slider>
			</div>
		);
	}
}

export default WeatherCards;
