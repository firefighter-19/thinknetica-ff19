import React from 'react';
import { fireEvent, getByText, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


import { SubscribeRules } from '../src/app/main/subscribeRules'

// test('Renders author info', () => {
// 	const { getByText } = render(<AuthorInfo book={bookDescription} />);
// 	expect(getByText('123@gmail.com')).toBeInTheDocument();
// });

describe('App', () => {
  test('App renders modal-window', () => {
    render(<SubscribeRules />);
    fireEvent.click(screen)
    expect(screen.getByText('Close')).toBeInTheDocument()
  })
})
