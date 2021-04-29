import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<div style={styles.header__image}>
				<img style={styles.image} srcSet="https://cdn.dribbble.com/users/68544/screenshots/3566813/concept.png" alt="logo" />
			</div>
		)
	}
}

export { Header }

const styles = {
	header__image: {
		width: '100%',
		height: '90px',
		display: 'flex',
		flex: '1',
		justifyContent: 'center',
		backgroundColor: 'black'
	},
	image: {
		objectFit: 'cover',
		width: '100%',
		height: '100%'
	}
}