import React from 'react';
import {act, render, screen} from '@testing-library/react';
import {userService} from "../service";
import App from "../App";

test('renders random user', async () => {
  // Prepare
  userService.findRandomUser = jest.fn(() => Promise.resolve({
    name: 'Juan',
    lastName: 'Perez',
    email: 'jperez@foobar.com'
  }));

  // Execute
  await act(async () => {
    render(<App/>);
  })

  // Validate
  const text = await screen.findByText(content => {
    return content.match('Juan') !== null;
  });
  expect(text).toHaveTextContent('Perez');
  expect(text).toHaveTextContent('jperez@foobar.com');
});
