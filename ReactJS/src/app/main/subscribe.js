import React from 'react';
import { SubscribeRules } from './subscribeRules'


const displayStar = (subscribers) => {
  return subscribers > 400 ? <div><b>Popular!</b></div> : false
}
class Subscribe extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        {displayStar(this.props.book.Subscribers)}
        <SubscribeRules />
      </div>
    )
  }
}

export { Subscribe }

const styles = {
  container: {
    position: 'relative'
  }
}