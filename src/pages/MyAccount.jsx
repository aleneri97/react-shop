import React from 'react';
import '../styles/MyAccount.scss';

export const MyAccount = () => {
	return (
		<div className='login'>
			<div className='form-container'>
				<h1 className='title'>My account</h1>
				<form action='/' className='form'>
					<div>
						<label htmlFor='name' className='label'>Name</label>
						<p className='value'>Camila Yoko</p>
						<label htmlFor='email' className='label'>Email</label>
						<p className='value'>camilayokoo@gmail.com</p>
						<label htmlFor='password' className='label'>Password</label>
						<p className='value'>*********</p>
					</div>
					<input type='submit' defaultValue='Edit's className='secondary-button login-button'/>
				</form>
			</div>
		</div>
	);
};
