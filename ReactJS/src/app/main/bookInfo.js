import React from 'react';

class BookInfo extends React.Component {
	render() {
		const {
			book: { Title, Description, Pages, Language, Cover, LowestPrice, PreferedPrice, Gained, Wanted }
		} = this.props
		return (
			<>
				<div style={styles.container}>
					<div>
						<img style={styles.image} src={Cover} alt="" />
					</div>
					<div style={styles.column}>
						<div style={styles.block}>
							<div><b>Title:</b> {Title}</div>
							<div><b>Description:</b> {Description}</div>
							<div><b>Pages:</b> {Pages}</div>
							<div><b>Language:</b> {Language}</div>
						</div>
						<div style={styles.block}>
							<div><b>LowestPrice:</b> {LowestPrice}</div>
							<div><b>PreferedPrice:</b> {PreferedPrice}</div>
							<div><b>Gained:</b> {Gained}</div>
							<div><b>Wanted:</b> {Wanted}</div>
						</div>
					</div>
				</div>
			</>

		)
	}

}

const styles = {
	container: {
		display: 'flex',
		// maxWidth: '600px',
		// border: '2px solid black',
	},
	column: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		flex: '1',
		// alignItems: 'center'
	},
	block: {
		margin: '0 20px',
		// alignItems: 'center'
	},
	image: {
		maxWidth: '120px',
	}
}

export { BookInfo }