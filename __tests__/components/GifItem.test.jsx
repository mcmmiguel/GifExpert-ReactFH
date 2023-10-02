/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem />', () => {

    const title = 'One Punch Man GIF';
    const url = 'https://media2.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=35ddf05cuw50ny5k6ptqlxa7v60221zmuek58071unojpybk&ep=v1_gifs_search&rid=giphy.gif&ct=g';

    test('Debe hacer match con el snapshot', () => {

        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();

    });

})