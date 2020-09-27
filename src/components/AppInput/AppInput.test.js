import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AppInput from './index';

test('renders error if provided', () => {
  render(<AppInput error={'test'} id="test" value="test" name="test" />);

  expect(screen.getByText(/test/i)).toBeInTheDocument();
});

test('renders handleChange is called with value', () => {
    const handleChange = jest.fn();
    render(
      <AppInput
        id="test"
        value="test"
        name="test"
        label="test"
        handleChange={handleChange}
      />
    );

    fireEvent.change(screen.getByLabelText('test'), { target: { value: 'test@test' } });
  
    expect(handleChange.mock.calls[0][0]).toBe('test@test');
});
