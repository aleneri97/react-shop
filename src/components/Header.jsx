import React from 'react';
import '@styles/Header.scss';
import icon_menu from '@icons/icon_menu.svg';
import icon_cart from '@icons/icon_shopping_cart.svg';
import logo_yardSale from '@logos/logo_yard_sale.svg';

export const Header = () => {
	return (
		<nav>
			<img src={icon_menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logo_yardSale} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furniture</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email">platzi@example.com</li>
					<li className="navbar-shopping-cart">
						<img src={icon_cart} alt="shopping cart" />
						<div>2</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};
