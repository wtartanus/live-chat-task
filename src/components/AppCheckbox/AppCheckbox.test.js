import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AppCheckbox from './index';

test('renders handleChange is called with value', () => {
    const handleChange = jest.fn();
    render(
      <AppCheckbox
        label="test"
        name="test"
        id="test"
        checked={false}
        handleChange={handleChange}
      />
    );

    fireEvent.click(screen.getByLabelText('test'));
  
    expect(handleChange.mock.calls[0][0]).toBe(true);
});
