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
		return (
			<div>
				<button onClick={() => this.toggleQuantity()} >
					{this.showHideBooks(threeElemPerPage)} {this.props.bookData.length - 3} more
				</button>
				{
					this.props.bookData.filter(book => book.id < 4 || threeElemPerPage)
						.map(book => (
							<div style={styles.margin}>
								<Book key={book.id} book={book} />
							</div>

						))}
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