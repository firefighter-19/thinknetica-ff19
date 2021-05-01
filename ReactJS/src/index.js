import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './app/App'
import data from './serverData.json'

ReactDOM.render(
  <App bookData={data} />,
  document.getElementById('modal-root')
)