import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ReactStars from 'react-rating-stars-component';
import useForm from 'helpers/hooks/useForm';
import Button from 'react-bootstrap/Button';

const initialState = {
	dignity: '',
	disadvantages: '',
	comment: '',
};
const ModalReviews = ({ onSubmit }) => {
	const { state, handleChange, handleSubmit } = useForm({
		initialState,
		onSubmit,
	});

	const { dignity, disadvantages, comment } = state;

	const ratingChanged = impression => {
		console.log(impression);
	};

	const ratingSettings = {
		size: 20,
		isHalf: true,
		color: '#C1C8CE',
		activeColor: '#FFC600',
	};

	return (
		<>
			<Modal.Header closeButton>
				<Modal.Title>Review</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<div>
						<p>Overall impression</p>
						<ReactStars {...ratingSettings} onChange={ratingChanged} />
					</div>
					<Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlInput1">
						<Form.Label>Dignity</Form.Label>
						<Form.Control
							type="text"
							autoFocus
							name="dignity"
							onChange={handleChange}
							value={dignity}
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Disadvantages</Form.Label>
						<Form.Control
							type="text"
							name="disadvantages"
							onChange={handleChange}
							value={disadvantages}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
						<Form.Label>Comment</Form.Label>
						<Form.Control
							as="textarea"
							rows={3}
							name="comment"
							onChange={handleChange}
							value={comment}
						/>
					</Form.Group>
					<Modal.Footer>
						<Button variant="primary" type="submit">
							Leave a review
						</Button>
					</Modal.Footer>
				</Form>
			</Modal.Body>
		</>
	);
};

export default ModalReviews;
