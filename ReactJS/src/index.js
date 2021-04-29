import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App'
import data from './serverData.json'

ReactDOM.render(
	<App bookData={data} />,
	document.getElementById('root')
)