import { render, screen } from '@testing-library/react';
import App from './App';

test('renders episode firs from API', () => {
  render(<App />);
  const linkElement = screen.getByText(/S04E01/i);
  expect(linkElement).toBeInTheDocument();
  const linkElement1 = screen.getByText(/S04E10/i);
  expect(linkElement1).toBeInTheDocument();
});
test('title in the site',() =>{
  render(<App/>);
  const linkElement2 = screen.getByText(/Episode of the 4th season of the series/i)
})
