import React from 'react';
import { TwitterIcon, InstagramIcon, FacebookIcon, List } from './Socials.styled';
const Socials = () => {
	return (
		<List>
			<li>
				<a href=" ">
					<TwitterIcon />
				</a>
			</li>
			<li>
				<a href=" ">
					<InstagramIcon />
				</a>
			</li>
			<li>
				<a href=" ">
					<FacebookIcon />
				</a>
			</li>
		</List>
	);
};
export default Socials;
