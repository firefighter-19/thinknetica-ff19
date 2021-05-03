import React from 'react';
import { SubscribeRules } from './subscribeRules'
import { Popular } from './popular'

class Subscribe extends React.Component {
  render() {
    const {
      book: {
        Subscribers
      }
    } = this.props
    return (
      <>
        { Subscribers > 400 && <Popular />}
        <SubscribeRules />
      </>
    )
  }
}

export { Subscribe }
