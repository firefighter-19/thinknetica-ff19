import React from 'react';

import { BookInfo } from './bookInfo'
import { AuthorInfo } from './authorInfo'
import { Subscribe } from './subscribe'

class Book extends React.Component {
	render() {
		return (
			<>
				<div style={styles.container}>
					<main>
						<div><BookInfo book={this.props.book} /></div>
						<div><AuthorInfo book={this.props.book} /></div>
						<div><Subscribe /></div>
					</main>
				</div>
			</>
		)
	}
}

const styles = {
	container: {
		display: 'flex',
		justifyContent: 'space-around',
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%',
		height: '100%'
	}
}

export { Book }