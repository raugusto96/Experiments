import React from 'react';

import { screen, render } from '@testing-library/react';

import Certificate from '../../../components/Certificate';

const testImage = {
  url: 'https://github.com/raugusto96/Experiments/blob/main/Portfolios/portfolio01/src/tests/utils/images/2ddd3826533554880ba70980b6ba7047.jpg',
  alt: 'Jolly Roger Luffy'
};

describe('Testando o componente Certificate', () => {
  it('deve existir um titulo no componente', () => {
    render(<Certificate title="Formação - Fundamentos do Desenvolvimento Web" />);
    const certificateTitle = screen.getByRole('heading', { level: 2 });
    expect(certificateTitle).toBeInTheDocument();
  });
  it('deve existir um subtitulo no componente', () => {
    render(<Certificate subtitle="Trybe - Escola de Programação" />);
    const certificateTitle = screen.getByRole('heading', { level: 3 });
    expect(certificateTitle).toBeInTheDocument();
  });
  it('deve existir uma data de emissão no componente', () => {
    render(<Certificate issueDate="Emitido em Julho de 2021" />);
    const certificateIssueDate = screen.getByRole('heading', { level: 5 });
    expect(certificateIssueDate).toBeInTheDocument();
  });
  it('deve existir uma imagem do orgão emissor no componente', () => {
    render(<Certificate image={ testImage }/>);
    const certificateImage = screen.getByRole('img');
    expect(certificateImage).toBeInTheDocument();
  });
  it('deve existir uma imagem com o atributo src', () => {
    render(<Certificate image={ testImage } />);
    const certificateImage = screen.getByRole('img');
    expect(certificateImage).toHaveAttribute('src', 'https://github.com/raugusto96/Experiments/blob/main/Portfolios/portfolio01/src/tests/utils/images/2ddd3826533554880ba70980b6ba7047.jpg');
  });
  it('deve existir uma imagem com o atributo alt', () => {
    render(<Certificate image={ testImage } />);
    const certificateImage = screen.getByRole('img');
    expect(certificateImage).toHaveAttribute('alt', 'Jolly Roger Luffy');
  });
});