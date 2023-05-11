import { render, screen } from '@testing-library/react';
import React from 'react';
import NumInput from '../component/Numinput';

describe("screenTest", () => {
  test("That the calculate button is rendered", () => {

    render(<NumInput />);

    const calculateButton = screen.getByRole('button', { name: 'Calculate' });
    
    expect(calculateButton).toBeInTheDocument();
  });
});
