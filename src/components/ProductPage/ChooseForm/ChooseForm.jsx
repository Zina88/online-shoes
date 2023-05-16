import React, { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { Container } from 'react-bootstrap';

const ChooseForm = ({ product }) => {
    console.log(product.map(({color}) => color))

	const chooseCategory = color => {
		console.log(color);
	};

	const [radioValue, setRadioValue] = useState('1');

	const radios = [
		{ name: 'red', value: '1', color: 'pink' },
		{ name: 'blue', value: '2', color: 'lightblue' },
		{ name: 'green', value: '3', color: 'lightgreen' },
	];

	return (
		<Container>
            <h3>Select color: </h3>
            
			<ButtonGroup className="mb-2">
				{radios.map((radio, idx) => (
					<ToggleButton
						style={{
							marginRight: 20,
							width: 30,
							height: 30,
							borderRadius: 100,
							backgroundColor: `${radio.color}`,
							borderColor: `${radio.color}`,
						}}
						key={idx}
						id={`radio-${idx}`}
						type="radio"
						// variant={'outline-secondary'}
						name="radio"
						value={radio.value}
						checked={radioValue === radio.value}
						onChange={e => setRadioValue(e.currentTarget.value)}
						onClick={() => chooseCategory(`${radio.name}`)}
					>
						{/* {radio.name} */}
					</ToggleButton>
				))}
			</ButtonGroup>
		</Container>
	);
};

export default ChooseForm;
