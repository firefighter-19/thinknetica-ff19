import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { AuthorInfo } from '../src/app/main/authorInfo';
import { BookInfo } from '../src/app/main/bookInfo';
import data from '../src/serverData.json';

test('Renders author info', () => {
  const { getByText } = render(<AuthorInfo book={data} />);
  expect(getByText('123@gmail.com')).toBeInTheDocument();
});

test('Renders book info', () => {
  const { getByText } = render(<BookInfo book={data} />);
  expect(getByText('PreferedPrice:')).toBeInTheDocument();
})