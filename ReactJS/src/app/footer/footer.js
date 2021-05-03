import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div style={styles.footer__year}>
        <p>{new Date().getFullYear()}</p>
      </div>
    )
  }
}

export { Footer }

const styles = {
  footer__year: {
    display: 'flex',
    justifyContent: 'center'
  }
}