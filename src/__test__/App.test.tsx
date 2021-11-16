import React from 'react';
import {render, screen} from '@testing-library/react';
import App from "../App";

// Prepare
jest.mock('../hooks/useDomain', () => ({ 
  __esModule: true,
  default: () => {
    return {
      status: 'success',
      isIdle: false,
      isLoading: false,
      isError: false,
      isSuccess: true,
      error: null,
      data: [
        { 
          id: '---',
          active: true,
          name: 'Juan',
          lastName: 'Perez',
          email: 'jperez@foobar.com',
          phoneNumber: '999888777'
        }
      ],
      run: jest.fn,
    }
  }
}));


test('renders random user', async () => {
  

  // Execute
  render(<App/>);

  // Validate
  expect(screen.queryByTestId('name')?.textContent).toBe('Name: Juan');
  expect(screen.queryByTestId('lastName')?.textContent).toBe('Last Name: Perez');
  expect(screen.queryByTestId('email')?.textContent).toBe('Email: jperez@foobar.com');
  expect(screen.queryByTestId('phone')?.textContent).toBe('Phone Number: 999888777');
});
