import React from 'react';
import '../styles/Checkout.scss';
import icon_flechita from '../../public/assets/icons/flechita.svg';
import icon_close from '../../public/assets/icons/icon_close.png';

export const Checkout = () => {
	const img_bike = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

	return (
		<aside className='product-detail'>
			<div className='title-container'>
				<img src={icon_flechita} alt='arrow' />
				<p className='title'>My order</p>
			</div>
			<div className='my-order-content'>
				<div className='shopping-cart'>
					<figure>
						<img src={img_bike} alt='bike' />
					</figure>
					<p>Bike</p>
					<p>$30,00</p>
					<img src={icon_close} alt='close' />
				</div>
				<div className='shopping-cart'>
					<figure>
						<img src={img_bike} alt='bike' />
					</figure>
					<p>Bike</p>
					<p>$30,00</p>
					<img src={icon_close} alt='close' />
				</div>
				<div className='shopping-cart'>
					<figure>
						<img src={img_bike} alt='bike' />
					</figure>
					<p>Bike</p>
					<p>$30,00</p>
					<img src={icon_close} alt='close' />
				</div>
				<div className='order'>
					<p>
						<span>Total</span>
					</p>
					<p>$560.00</p>
				</div>
				<button className='primary-button'>Checkout</button>
			</div>
		</aside>
	);
};
