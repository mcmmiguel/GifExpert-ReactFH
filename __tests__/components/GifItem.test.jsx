/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem />', () => {

    const title = 'One Punch Man GIF';
    const url = 'https://media2.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=35ddf05cuw50ny5k6ptqlxa7v60221zmuek58071unojpybk&ep=v1_gifs_search&rid=giphy.gif&ct=g';

    test('Debe hacer match con el snapshot', () => {

        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();

    });

    test('Debe mostrar la imagen con el URL y el ALT indicado', () => {

        render(<GifItem title={title} url={url} />);
        // expect(screen.getByRole('img').alt).toBe(title);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);

    });

    test('Debe de mostrar el título en el componente', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    })

})