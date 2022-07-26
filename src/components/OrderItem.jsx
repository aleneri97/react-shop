import React from 'react';
import '@styles/OrderItem.scss';
import icon_close from '@icons/icon_close.png';

export const OrderItem = () => {
	const img_bike = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
	return (
		<div className="OrderItem">
			<figure>
				<img src={img_bike} alt="bike" />
			</figure>
			<p>Bike</p>
			<p>$30,00</p>
			<img src={icon_close} alt="close" />
		</div>
	);
};
