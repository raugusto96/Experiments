import React from 'react';

import { render, screen } from '@testing-library/react';

import Card from '../../../components/Card';

describe('Testando o componente Card', () => {
  it('deve existir um titulo no card', () => {
    render(<Card title="Trybe Wallet" image={ {url: '' , alt: '' } } />);
    const projectTitle = screen.getByRole('heading', { level: 2 });
    expect(projectTitle).toBeInTheDocument;
  });
  it('deve existir uma imagem no card com o atributo src', () => {
    render(<Card image={ {url: 'https://github.com/raugusto96/Experiments/blob/main/Portfolios/portfolio01/src/tests/utils/images/monkey_d__luffy___sun_god_nika_by_darko_simple_art_df39teb-fullview.jpg', alt: 'Luffy Nika Nika' } } />);
    const projectImage = screen.getByAltText(/luffy nika nika/i);
    expect(projectImage).toBeInTheDocument();
    expect(projectImage).toHaveAttribute('src', 'https://github.com/raugusto96/Experiments/blob/main/Portfolios/portfolio01/src/tests/utils/images/monkey_d__luffy___sun_god_nika_by_darko_simple_art_df39teb-fullview.jpg');
  });
  it('deve existir uma imagem com o atributo src no card', () => {
    render(<Card image={ {url: 'https://github.com/raugusto96/Experiments/blob/main/Portfolios/portfolio01/src/tests/utils/images/monkey_d__luffy___sun_god_nika_by_darko_simple_art_df39teb-fullview.jpg', alt: 'Luffy Nika Nika' } } />);
    const projectImage = screen.getByAltText(/luffy nika nika/i);
    expect(projectImage).toHaveAttribute('src', 'https://github.com/raugusto96/Experiments/blob/main/Portfolios/portfolio01/src/tests/utils/images/monkey_d__luffy___sun_god_nika_by_darko_simple_art_df39teb-fullview.jpg');
  });
  it('deve existir uma imagem com o atributo alt no card', () => {
    render(<Card image={ {url: 'https://github.com/raugusto96/Experiments/blob/main/Portfolios/portfolio01/src/tests/utils/images/monkey_d__luffy___sun_god_nika_by_darko_simple_art_df39teb-fullview.jpg', alt: 'Luffy Nika Nika' } } />);
    const projectImage = screen.getByAltText(/luffy nika nika/i);
    expect(projectImage).toHaveAttribute('alt', 'Luffy Nika Nika');
  });
  it('deve existir uma categoria do projeto no card', () => {
    render(<Card image={ { url: '', alt: '' } } category="Back-end" />);
    const projectCategory = screen.getByText(/back-end/i);
    expect(projectCategory).toBeInTheDocument();
  });
});