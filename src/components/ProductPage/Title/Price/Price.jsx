import React from 'react';
import { InfoWrapper, PriseWrapper, ListInfo } from './Price.styled';
import percentageDiscount from '../../../../helpers/percentageDiscount';
const Information = ({ price, old_price, stock_quantity, category }) => {
	return (
		<InfoWrapper>
			<PriseWrapper>
				<p className="prise">${price}</p>
				{old_price ? (
					<>
						<small className="oldPrise">${old_price}</small>
						<p className="discount"> {percentageDiscount(`${price}`, `${old_price}`)}% Off</p>
					</>
				) : (
					' '
				)}
			</PriseWrapper>
			<ListInfo>
				<li className="itemInfo">
					<p className="text">Availability:</p>
					{stock_quantity ? <p>{stock_quantity}</p> : 'Out of Stock'}
				</li>
				<li className="itemInfo">
					<p className="text">Category:</p>
					<p>{category}</p>
				</li>
			</ListInfo>
		</InfoWrapper>
	);
};
export default Information;
