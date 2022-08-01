import React, { useContext, useState } from 'react';
import '@styles/Header.scss';
import { Menu } from '@components/Menu'
import icon_menu from '@icons/icon_menu.svg';
import icon_cart from '@icons/icon_shopping_cart.svg';
import logo_yardSale from '@logos/logo_yard_sale.svg';
import { AppContext } from '../context/AppContext';
import { MyOrder } from '../containers/MyOrder';

export const Header = () => {
	const [toggleMenu, setToggleMenu] = useState(true);
	const [toggleOrders, setToggleOrders] = useState(false)
	const { state } = useContext(AppContext);
	
	const handleToggleMenu = () => {
		setToggleMenu(!toggleMenu);
	};

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
					<li className="navbar-email" onClick={handleToggleMenu}>
						platzi@example.com
					</li>
					<li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
						<img src={icon_cart} alt="shopping cart" />
						{ state.cart.length > 0 ? <div>{state.cart.length}</div> : null  }
					</li>
				</ul>
			</div>
			{toggleMenu && <Menu />}
			{toggleOrders && <MyOrder /> }
		</nav>
	);
};
