import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Card from './Card';

describe('Card specs', () => {
  const mockClose = jest.fn();

  const defaultProps = {
    title: 'title',
    description: 'Description',
    onCTAClick: mockClose
  };

  it('Should trigger onCardOpen when clicking in more button', () => {
    const { getByTestId } = render(<Card {...defaultProps} />);
    fireEvent.click(getByTestId('card-open'));
    expect(mockClose).toHaveBeenCalled();
  });
});
