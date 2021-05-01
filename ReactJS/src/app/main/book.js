import React from 'react';

import { BookInfo } from './bookInfo'
import { AuthorInfo } from './authorInfo'
import { Subscribe } from './subscribe'


class Book extends React.Component {
  render() {
    const {
      book: {
        Subscribers
      }
    } = this.props
    return (
      <main style={styles.container}>
        <div><BookInfo book={this.props.book} /></div>
        <div><AuthorInfo book={this.props.book} /></div>
        <div>
          <Subscribe book={this.props.book} />
        </div>
        <div>
          <b>Subscribers: </b>{Subscribers}
        </div>
      </main>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '60px 0'
  }
}

export { Book }