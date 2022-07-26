import React from 'react';
import '../styles/ProductList.scss';
import icon_addCart from '../../public/assets/icons/bt_add_to_cart.svg'

export const ProductList = () => {
    const img_bike = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
	return (
		<section className='main-container'>
			<div className='cards-container'>
				<div className='product-card'>
					<img src={img_bike} alt />
					<div className='product-info'>
						<div>
							<p>$120,00</p>
							<p>Bike</p>
						</div>
						<figure>
							<img src={icon_addCart} alt />
						</figure>
					</div>
				</div>
				<div className='product-card'>
					<img src={img_bike} alt />
					<div className='product-info'>
						<div>
							<p>$120,00</p>
							<p>Bike</p>
						</div>
						<figure>
							<img src={icon_addCart} alt />
						</figure>
					</div>
				</div>
				<div className='product-card'>
					<img src={img_bike} alt />
					<div className='product-info'>
						<div>
							<p>$120,00</p>
							<p>Bike</p>
						</div>
						<figure>
							<img src={icon_addCart} alt />
						</figure>
					</div>
				</div>
				<div className='product-card'>
					<img src={img_bike} alt />
					<div className='product-info'>
						<div>
							<p>$120,00</p>
							<p>Bike</p>
						</div>
						<figure>
							<img src={icon_addCart} alt />
						</figure>
					</div>
				</div>
				<div className='product-card'>
					<img src={img_bike} alt />
					<div className='product-info'>
						<div>
							<p>$120,00</p>
							<p>Bike</p>
						</div>
						<figure>
							<img src={icon_addCart} alt />
						</figure>
					</div>
				</div>
				<div className='product-card'>
					<img src={img_bike} alt />
					<div className='product-info'>
						<div>
							<p>$120,00</p>
							<p>Bike</p>
						</div>
						<figure>
							<img src={icon_addCart} alt />
						</figure>
					</div>
				</div>
				<div className='product-card'>
					<img src={img_bike} alt />
					<div className='product-info'>
						<div>
							<p>$120,00</p>
							<p>Bike</p>
						</div>
						<figure>
							<img src={icon_addCart} alt />
						</figure>
					</div>
				</div>
				<div className='product-card'>
					<img src={img_bike} alt />
					<div className='product-info'>
						<div>
							<p>$120,00</p>
							<p>Bike</p>
						</div>
						<figure>
							<img src={icon_addCart} alt />
						</figure>
					</div>
				</div>
				<div className='product-card'>
					<img src={img_bike} alt />
					<div className='product-info'>
						<div>
							<p>$120,00</p>
							<p>Bike</p>
						</div>
						<figure>
							<img src={icon_addCart} alt />
						</figure>
					</div>
				</div>
			</div>
		</section>
	);
};
