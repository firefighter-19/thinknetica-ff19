import React from 'react';
import { Book } from './book';

class BookList extends React.Component {
	constructor(props) {
		super(props);

		this.state = { threeElemPerPage: false };
	}

	toggleQuantity() {
		this.setState({ threeElemPerPage: !this.state.threeElemPerPage });
	}

	showHideBooks(params) {
		return params === false ? 'Show' : 'Hide'
	}
	render() {
		const { threeElemPerPage } = this.state;
		console.log(this.props.bookData)
		return (
			<div>
				{
					this.props.bookData.map(book => (
						<div key={book.Id} style={styles.margin}>
							<Book book={book} />
						</div>
					))
				}
			</div>
		)
	}
}

export { BookList }

const styles = {
	margin: {
		margin: '20px 0'
	}
}