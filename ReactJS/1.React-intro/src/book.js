import React from 'react';
import { BookInfo } from './bookInfo'
import { AuthorInfo } from './authorInfo'
class Book extends React.Component {
	render() {
		return (
			<div style={styles.container}>
				<div><BookInfo book={this.props.book} /></div>
				<div><AuthorInfo book={this.props.book} /></div>
			</div>
		)
	}
}

const styles = {
	container: {
		display: 'flex',
		'justify-content': 'space-around',
		'flex-direction': 'column'
	}
}

export { Book }