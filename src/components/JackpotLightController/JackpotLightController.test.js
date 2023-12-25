import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import JackpotLightController from './JackpotLightController';

test('renders JackpotLightController with the initial active slot', () => {
  render(<JackpotLightController />);
  const initialActiveSlot = screen.getByText('1');
  const rotateButton = screen.getByText('Rotate');

  expect(initialActiveSlot).toBeInTheDocument();
  expect(initialActiveSlot).toHaveClass('active');

  expect(rotateButton).toBeInTheDocument();
});

test('rotates the slots when the "Rotate" button is clicked', () => {
  render(<JackpotLightController />);
  const rotateButton = screen.getByText('Rotate');
  const initialActiveSlot = screen.getByText('1');

  fireEvent.click(rotateButton);

  // Assuming clockwise rotation, so the next active slot is '2'
  const nextActiveSlot = screen.getByText('2');

  expect(initialActiveSlot).not.toHaveClass('active');
  expect(nextActiveSlot).toHaveClass('active');
});

test('rotates through all slots and wraps around', () => {
  render(<JackpotLightController />);
  const rotateButton = screen.getByText('Rotate');

  for (let i = 1; i <= 10; i++) {
    const activeSlot = screen.getByText(i.toString());
    expect(activeSlot).toHaveClass('active');
    fireEvent.click(rotateButton);
  }

  // After rotating through all slots, it should wrap around to the initial slot '1'.
  const wrappedActiveSlot = screen.getByText('1');
  expect(wrappedActiveSlot).toHaveClass('active');
});

