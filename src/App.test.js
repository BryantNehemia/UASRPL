import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App, { add, subtract, multiply, divide } from './App';

test('addition works correctly', () => {
  expect(add(1, 2)).toBe(3);
  expect(add(-1, -1)).toBe(-2);
  expect(add(0, 0)).toBe(0);
});

test('subtraction works correctly', () => {
  expect(subtract(2, 1)).toBe(1);
  expect(subtract(-1, -1)).toBe(0);
  expect(subtract(0, 0)).toBe(0);
});

test('multiplication works correctly', () => {
  expect(multiply(2, 3)).toBe(6);
  expect(multiply(-1, -1)).toBe(1);
  expect(multiply(0, 5)).toBe(0);
});

test('division works correctly', () => {
  expect(divide(6, 3)).toBe(2);
  expect(divide(-6, -3)).toBe(2);
  expect(divide(0, 1)).toBe(0);
  expect(() => divide(1, 0)).toThrow('Division by zero is not allowed');
});

test('renders Simple Calculator title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Simple Calculator/i);
  expect(linkElement).toBeInTheDocument();
});

test('performs addition operation', () => {
  const { getByPlaceholderText, getByText } = render(<App />);
  const num1Input = getByPlaceholderText(/Enter first number/i);
  const num2Input = getByPlaceholderText(/Enter second number/i);
  const addButton = getByText('+');

  fireEvent.change(num1Input, { target: { value: '2' } });
  fireEvent.change(num2Input, { target: { value: '3' } });
  fireEvent.click(addButton);

  const result = getByText(/The result of the add operation is: 5/i);
  expect(result).toBeInTheDocument();
});

test('performs subtraction operation', () => {
  const { getByPlaceholderText, getByText } = render(<App />);
  const num1Input = getByPlaceholderText(/Enter first number/i);
  const num2Input = getByPlaceholderText(/Enter second number/i);
  const subtractButton = getByText('-');

  fireEvent.change(num1Input, { target: { value: '5' } });
  fireEvent.change(num2Input, { target: { value: '3' } });
  fireEvent.click(subtractButton);

  const result = getByText(/The result of the subtract operation is: 2/i);
  expect(result).toBeInTheDocument();
});

test('performs multiplication operation', () => {
  const { getByPlaceholderText, getByText } = render(<App />);
  const num1Input = getByPlaceholderText(/Enter first number/i);
  const num2Input = getByPlaceholderText(/Enter second number/i);
  const multiplyButton = getByText('*');

  fireEvent.change(num1Input, { target: { value: '4' } });
  fireEvent.change(num2Input, { target: { value: '5' } });
  fireEvent.click(multiplyButton);

  const result = getByText(/The result of the multiply operation is: 20/i);
  expect(result).toBeInTheDocument();
});

test('performs division operation', () => {
  const { getByPlaceholderText, getByText } = render(<App />);
  const num1Input = getByPlaceholderText(/Enter first number/i);
  const num2Input = getByPlaceholderText(/Enter second number/i);
  const divideButton = getByText('/');

  fireEvent.change(num1Input, { target: { value: '10' } });
  fireEvent.change(num2Input, { target: { value: '2' } });
  fireEvent.click(divideButton);

  const result = getByText(/The result of the divide operation is: 5/i);
  expect(result).toBeInTheDocument();
});
