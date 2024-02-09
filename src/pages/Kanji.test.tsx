import { render, screen } from '@testing-library/react';
import { Kanji } from './Kanji';
import { Hiragana } from '../data/Hiragana';
import userEvent from '@testing-library/user-event';
import { Katakana } from '../data/Katakana';

describe('Kanji Page', () => {
  it('renders the hiragana alphabet', () => {
    render(<Kanji />);

    expect(screen.getByText(Hiragana[0].kana)).toBeInTheDocument();
  });

  it('renders the katakana alphabet', async () => {
    render(<Kanji />);

    userEvent.click(screen.getByRole('tab', { name: 'Katakana' }));

    expect(await screen.findByText(Katakana[0].kana)).toBeInTheDocument();
  });
});
