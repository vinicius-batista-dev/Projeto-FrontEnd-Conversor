import { render, screen } from '@testing-library/react';
import React from 'react';
import ReactDom from 'react-dom';
import ConversorMoedas from './conversor-moedas';


it('Deve renderizar o componente sem erros', () => {
  const div = document.createElement('div');
  ReactDom.render(<ConversorMoedas />, div);
  ReactDom.unmountComponentAtNode(div);
});
