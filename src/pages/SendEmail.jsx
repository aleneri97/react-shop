import React from 'react';
import '@styles/SendEmail.scss';
import icon_email from '@icons/email.svg';
import logo_yardSale from '@logos/logo_yard_sale.svg';

export const SendEmail = () => {
	return (
		<div className="SendEmail">
			<div className="form-container">
				<img src={logo_yardSale} alt="logo" className="logo" />
				<h1 className="title">Email has been sent!</h1>
				<p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
				<div className="email-image">
					<img src={icon_email} alt="email" />
				</div>
				<button className="primary-button login-button">Login</button>
				<p className="resend">
					<span>Didn't receive the email?</span>
					<a href="/">Resend</a>
				</p>
			</div>
		</div>
	);
};