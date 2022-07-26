import React from 'react';
import { ProductInfo } from '../components/ProductInfo';
import '../styles/ProductDetail.scss';
import icon_close from '../../public/assets/icons/icon_close.svg'

export const ProductDetail = () => {
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close">
				<img src={icon_close} alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
};