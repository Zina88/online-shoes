import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { HOME, HOT_DEAL, FAVORITES, HISTORY } from 'utils/consts';

// const BreadcrumbSection = ({ product }) => {
// 	// console.log(product);
// 	let location = useLocation();
// 	console.log(location);

// 	return (
// 		<Breadcrumb as="nav" style={{ backgroundColor: 'lightgrey' }}>
// 			<Breadcrumb.Item linkAs={NavLink} linkProps={{ to: HOME }}>
// 				Home
// 			</Breadcrumb.Item>
// 			{/* <Breadcrumb.Item linkAs={NavLink} linkProps={{ to: HOT_DEAL }}>
// 				Hot deal
// 			</Breadcrumb.Item> */}
// 			{product.map(({ id, name, offers }) => (
// 				<Breadcrumb.Item as="li" key={id} active>
// 					{name}
// 				</Breadcrumb.Item>
// 			))}
// 		</Breadcrumb>
// 	);
// };

const breadcrumb = {
	backgroundColor: 'white',
	border: '1px solid rgba(0, 0, 0, 0.125)',
	borderRadius: '0.37rem',
};

const BreadcrumbSection = props => {
	function isLast(index) {
		return index === props.crumbs.length - 1;
	}

	// return (
	// 	<nav className="row justify-content-center mt-4">
	// 		<ol className="breadcrumb" style={breadcrumb}>
	// 			{props.crumbs.map((crumb, ci) => {
	// 				const disabled = isLast(ci) ? 'disabled' : '';

	// 				return (
	// 					<li key={ci} className="breadcrumb-item align-items-center">
	// 						<button className={`btn btn-link ${disabled}`} onClick={() => props.selected(crumb)}>
	// 							{crumb}
	// 						</button>
	// 					</li>
	// 				);
	// 			})}
	// 		</ol>
	// 	</nav>
	// );

		return (
			<Breadcrumb as="nav" style={{ backgroundColor: 'lightgrey' }}>
				{props.crumbs.map((crumb, ci) => {
					const disabled = isLast(ci) ? 'disabled' : '';
				
					return (
					<Breadcrumb.Item linkAs={NavLink} linkProps={{ to: HOME }}>
						{crumb}
						</Breadcrumb.Item>
						
				// 	{/* <Breadcrumb.Item linkAs={NavLink} linkProps={{ to: HOT_DEAL }}>
				// 	Hot deal
				// </Breadcrumb.Item> */}
				// 	{/* {props.crumbs.map(({ id, name }) => (
				// 	<Breadcrumb.Item as="li" key={id} active>
				// 		{name}
				// 	</Breadcrumb.Item>
				// ))} */}
					
					
					)
				})}
			</Breadcrumb>
		);
};

export default BreadcrumbSection;
