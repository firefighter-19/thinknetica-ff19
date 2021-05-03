import React from 'react';
import { fireEvent, getByText, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { AuthorInfo } from '../src/app/main/authorInfo';

const bookDescription = {
  'Title': 'Fahrenheit 451',
  'Description': 'This book is about...',
  'Pages': '250',
  'Language': 'English',
  'ProgressBar': '30%',
  'Cover': 'https://i.pinimg.com/originals/c3/ca/13/c3ca136cb0ee2f26341fc01974b929e5.jpg',
  'Author': {
    'name': 'Ray Douglas Bradbury',
    'email': '123@gmail.com',
    'avatar': 'https://litreactor.com/sites/default/files/images/column/headers/the-martian-chronicles.jpg',
    'bio': 'Short bio',
  },
  'LowestPrice': '$10',
  'PreferedPrice': '$50',
  'Gained': '$400000',
  'Wanted': '$1000000'
};

test('Renders author avatar or alt', () => {
  const { getByRole } = render(<AuthorInfo Author={bookDescription.Author} />);
  expect(getByRole('img')).toHaveAttribute('alt');
});

test('Check author is not empty', () => {
  const { getByText } = render(<AuthorInfo Author={bookDescription.Author} />);
  expect(getByText('Ray Douglas Bradbury')).toBeInTheDocument()
})