import React from 'react';
import UserNav from './UserNav';
import ShopNav from './ShopNav';

const NavBar = ({gallery}) => {
	return (
		<>
			<UserNav gallery={gallery} />
			<ShopNav />
		</>
	);
};

export default NavBar;
