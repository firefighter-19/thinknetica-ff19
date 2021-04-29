import React from 'react';
class AuthorInfo extends React.Component {
	render() {
		const {
			book: {
				Author: {
					name, email, avatar, bio
				}
			}
		} = this.props
		return (
			<div style={styles.container}>
				<div style={styles.imageBlock}>
					<img style={styles.image} src={avatar} alt="" />
				</div>
				<div>
					<div>{name}</div>
					<div>{email}</div>
					<div>{bio}</div>
				</div>
			</div>
		)
	}
}

const styles = {
	container: {
		display: 'flex',
		maxWidth: '600px',
		border: '2px solid black'
	},
	column: {
		display: 'flex',
		justifyContent: 'space-around',
		flex: '1',
		alignItems: 'center'
	},
	block: {
		alignItems: 'center',
	},
	imageBlock: {
		maxWidth: '150px'
	},
	image: {
		width: '100%',
		height: '100%',
		objectFit: 'cover'
	},
}

export { AuthorInfo }