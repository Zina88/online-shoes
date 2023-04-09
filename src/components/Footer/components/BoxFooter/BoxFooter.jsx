import React from 'react';
import { Box, Text } from './BoxFooter.styled';
const BoxFooter = () => {
	return (
		<Box>
			<Text>
				© 2023. created by
				<a
					href="https://www.linkedin.com/in/zina-sytnik-809a80232/"
					target="_blank"
					rel="noreferrer"
					className="link"
				>
					Zina Sytnik
				</a>
				and
				<a
					href="https://www.linkedin.com/in/iryna-mykhailova10/"
					target="_blank"
					rel="noreferrer"
					className="link"
				>
					Iryna Mykhailova
				</a>
			</Text>
		</Box>
	);
};
export default BoxFooter;
