import React from 'react';

import { BookInfo } from './bookInfo'
import { AuthorInfo } from './authorInfo'
import { Subscribe } from './subscribe'

class Book extends React.Component {
	render() {
		return (
			<div>
				<main style={styles.container}>
					<div><BookInfo book={this.props.book} /></div>
					<div><AuthorInfo book={this.props.book} /></div>
				</main>
				<div><Subscribe /></div>
			</div>
		)
	}
}

const styles = {
	container: {
		display: 'flex',
		justifyContent: 'flex-start',
		// flexDirection: 'column',
		// alignItems: 'center',
		// width: '100%',
		// height: '100%',
	}
}

export { Book }