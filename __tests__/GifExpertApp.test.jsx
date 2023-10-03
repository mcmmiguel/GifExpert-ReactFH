/* eslint-disable no-undef */

import { fireEvent, render, screen } from "@testing-library/react";
import GifExpertApp from "../src/GifExpertApp";


describe('Pruebas en <GifExpertApp />', () => {

    test('No debe agregarse una categoría si se repite', () => {
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: 'Halo' } });
        fireEvent.submit(form);

        fireEvent.input(input, { target: { value: 'Halo' } });
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(2);
    });

    test('Debe agregar categrías si no se repiten', () => {
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: 'Panda' } });
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(2);
    });

});