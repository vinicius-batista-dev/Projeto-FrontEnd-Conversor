import React from 'react';
import * as ReactDOM from "react-dom";
import ConversorMoedas from './conversor-moedas';

it('deve renderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ConversorMoedas />, div);
    ReactDOM.unmountComponentAtNode(div);
});