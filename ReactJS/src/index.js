import React from 'react';
import ReactDOM from 'react-dom';

import { Book } from './book'
import { bookDescription } from './serverData'

ReactDOM.render(
	<Book book={bookDescription} />,
	document.getElementById('root')
)