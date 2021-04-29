import React from 'react';

import { Header } from './header/header'
import { Footer } from './footer/footer'
import { BookList } from './main/bookList';
class App extends React.Component {
	render() {
		return (
			<>
				<div style={styles.container}>
					<header><Header /></header>
					<main>
						<div><BookList bookData={this.props.bookData} /></div>
					</main>
					<footer><Footer /></footer>
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

export { App }