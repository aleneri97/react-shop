import React from 'react';

import icon_close from '../../public/assets/icons/icon_close.png';
import icon_addCart from '../../public/assets/icons/bt_add_to_cart.svg';

export const ProductDetail = () => {
  const img_bike = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
	return (
		<aside className='product-detail'>
			<div className='product-detail-close'>
				<img src={icon_close} alt='close' />
			</div>
			<img src={img_bike} alt='bike'/>
			<div className='product-info'>
				<p>$35,00</p>
				<p>Bike</p>
				<p>
					With its practical position, this bike also fulfills a
					decorative function, add your hall or workspace.
				</p>
				<button className='primary-button add-to-cart-button'>
					<img src={icon_addCart} alt='add to cart' />
					Add to cart
				</button>
			</div>
		</aside>
	);
};
