import React from 'react';
import ReactDOM from 'react-dom';

class SubscribeRules extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isOpened: false }
  }
  toggle() {
    this.setState({ isOpened: !this.state.isOpened })
  }
  render() {
    return (
      <>
        <a onClick={() => this.toggle()}><button>Subscribe rules</button></a>
        {
          this.state.isOpened && ReactDOM.createPortal(
            <div style={styles.overlay}>
              <div style={styles.body}>
                <p>Pay money and you got nothing</p>
                <div style={styles.button}>
                  <button>Subscribe</button>
                  <button onClick={() => this.toggle()}>Close</button></div>
              </div>
            </div>,
            document.getElementById('modal-root')
          )
        }
      </>
    )
  }
}
export { SubscribeRules }

const styles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    backgroundColor: '#fff',
    padding: '10px'
  },
  button: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}