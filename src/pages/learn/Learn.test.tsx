import { render, screen } from '@testing-library/react';
import { Home } from '../home/Home';

describe('Learn Page', () => {
  it('renders the home page', () => {
    render(<Home />);

    expect(screen.getByText('Welcome to LearnJP')).toBeInTheDocument();
  });
});
