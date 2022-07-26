import React from 'react';
import '@styles/ProductItem.scss';
import icon_addCart from '@icons/bt_add_to_cart.svg';

export const ProductItem = () => {
	const img_bike = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
	return (
		<div className="ProductItem">
			<img src={img_bike} alt="" />
			<div className="product-info">
				<div>
					<p>$120,00</p>
					<p>Bike</p>
				</div>
				<figure>
					<img src={icon_addCart} alt="" />
				</figure>
			</div>
		</div>
	);
};
