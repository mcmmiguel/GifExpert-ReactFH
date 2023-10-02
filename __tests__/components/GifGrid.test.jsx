/* eslint-disable no-undef */

import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe('Pruebas en <GifGrid />', () => {

    const category = 'Halo';

    test('Debe de mostrar el Loading inicialmente', () => {

        render(<GifGrid category={category} />);

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));

    });

    test('Debe de mostrar items cuando se cargan las imagenes', () => {



    });


});