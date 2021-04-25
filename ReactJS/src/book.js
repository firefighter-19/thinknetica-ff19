import React from 'react';
import { BookInfo } from './bookInfo'
import { AuthorInfo } from './authorInfo'
import { Subscribe } from './subscribe'
class Book extends React.Component {
	render() {
		return (
			<div style={styles.container}>
				<div><BookInfo book={this.props.book} /></div>
				<div><AuthorInfo book={this.props.book} /></div>
				<div><Subscribe /></div>
			</div>
		)
	}
}

const styles = {
	container: {
		display: 'flex',
		justifyContent: 'space-around',
		flexDirection: 'column',
	}
}

export { Book }