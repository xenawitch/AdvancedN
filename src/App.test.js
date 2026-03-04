// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NFTZen title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NFTZen/i);
    expect(titleElement).toBeInTheDocument();
});
