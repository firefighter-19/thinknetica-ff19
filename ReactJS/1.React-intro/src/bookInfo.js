import React from 'react';

class BookInfo extends React.Component {
	render() {
		const {
			book: { Title, Description, Pages, Language, Cover, LowestPrice, PreferedPrice, Gained, Wanted }
		} = this.props
		return (
			<div style={styles.container}>
				<div>
					<img style={styles.image} src={Cover} alt="" />
				</div>
				<div style={styles.column}>
					<div style={styles.block}>
						<div>{Title}</div>
						<div>{Description}</div>
						<div>{Pages}</div>
						<div>{Language}</div>
					</div>
					<div style={styles.block}>
						<div>{LowestPrice}</div>
						<div>{PreferedPrice}</div>
						<div>{Gained}</div>
						<div>{Wanted}</div>
					</div>
				</div>
			</div>
		)
	}

}

const styles = {
	container: {
		display: 'flex',
		'max-width': '600px',
		border: '2px solid black'
	},
	column: {
		'display': 'flex',
		'justify-content': 'space-around',
		'flex': '1',
		'align-items': 'center'
	},
	block: {
		'align-items': 'center'
	},
	image: {
		'max-width': '120px',
	}
}

export { BookInfo }