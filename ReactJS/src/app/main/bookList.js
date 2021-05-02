import React from 'react';
import { Book } from './book';

class BookList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { threeElemPerPage: true };
		this.showElements = this.showElements.bind(this);
		this.hideElements = this.hideElements.bind(this);
	}
	showElements() {
		this.setState({ threeElemPerPage: false })
	}
	hideElements() {
		this.setState({ threeElemPerPage: true })
	}
	render() {
		const { threeElemPerPage } = this.state;
		const booksToShow = threeElemPerPage ? 3 : this.props.bookData.length;
		return (
			<div style={styles.container}>
				{
					threeElemPerPage
						? <button onClick={this.showElements}>Show more</button>
						: <button onClick={this.hideElements}>Hide {this.props.bookData.length - 3} more</button>
				}
				{
					this.props.bookData
						.slice(0, booksToShow)
						.map(book =>
							<div key={book.Id} style={styles.margin}>
								<Book book={book} />
							</div>
						)}
			</div>
		)
	}
}

export { BookList }

const styles = {
	margin: {
		margin: '20px 0',
		position: 'relative'
	},
	container: {
		maxWidth: '1200px',
		margin: '0 auto'
	}
}