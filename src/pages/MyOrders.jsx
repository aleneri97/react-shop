import React from 'react';
import '../styles/MyOrders.scss';
import icon_flechita from '../../public/assets/icons/flechita.svg';

export const MyOrders = () => {
	return (
		<div className='my-order'>
			<div className='my-order-container'>
				<h1 className='title'>My orders</h1>
				<div className='my-order-content'>
					<div className='order'>
						<p>
							<span>03.25.21</span>
							<span>6 articles</span>
						</p>
						<p>$560.00</p>
						<img src={icon_flechita} alt='arrow' />
					</div>
					<div className='order'>
						<p>
							<span>03.25.21</span>
							<span>6 articles</span>
						</p>
						<p>$560.00</p>
						<img src={icon_flechita} alt='arrow' />
					</div>
					<div className='order'>
						<p>
							<span>03.25.21</span>
							<span>6 articles</span>
						</p>
						<p>$560.00</p>
						<img src={icon_flechita} alt='arrow' />
					</div>
					<div className='order'>
						<p>
							<span>03.25.21</span>
							<span>6 articles</span>
						</p>
						<p>$560.00</p>
						<img src={icon_flechita} alt='arrow' />
					</div>
				</div>
			</div>
		</div>
	);
};
