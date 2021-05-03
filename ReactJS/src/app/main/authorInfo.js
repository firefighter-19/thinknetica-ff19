import React from 'react';
class AuthorInfo extends React.Component {
  render() {
    const {
      Author: {
        name, email, avatar, bio
      }
    } = this.props
    return (
      <div style={styles.container}>
        <div style={styles.imageBlock}>
          <img style={styles.image} src={avatar} alt="" />
        </div>
        <div style={styles.block}>
          <div><b>Author:</b> {name}</div>
          <div><b>Email:</b> {email}</div>
          <div><b>Biography:</b> {bio}</div>
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    maxWidth: '600px',
  },
  column: {
    display: 'flex',
    justifyContent: 'space-around',
    flex: '1',
    alignItems: 'center'
  },
  block: {
    margin: '0 20px'
  },
  imageBlock: {
    maxWidth: '140px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
}

export { AuthorInfo }