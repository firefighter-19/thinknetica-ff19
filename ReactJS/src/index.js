import React from 'react';
import ReactDOM from 'react-dom';

import { Book } from './book'


ReactDOM.render(
	<Book book={bookDescription} />,
	document.querySelector('#root')
)