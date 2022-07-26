import React from 'react';
import '../styles/Order.scss';
import icon_flechita from '../../public/assets/icons/flechita.svg';

export const Order = () => {
	return (
		<div className="Order">
			<p>
				<span>03.25.21</span>
				<span>6 articles</span>
			</p>
			<p>$560.00</p>
			<img src={icon_flechita} alt="arrow" />
		</div>
	);
};