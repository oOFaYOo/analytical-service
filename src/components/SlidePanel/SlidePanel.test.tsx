import React from "react";
import {fireEvent, render, screen} from '@testing-library/react';
import SlidePanel from "./index";
import {MemoryRouter} from 'react-router';

test('SlidePanel test', () => {


    const Comp = ({initial, total}: { initial?: 'open' | 'close', total?: boolean }) => {

        return (
            <MemoryRouter>
                <SlidePanel values={[{title: 'sometitle', url: ''}]} initial={initial} total={total}/>
            </MemoryRouter>
        )
    }

    const {rerender, container} = render(<Comp/>);
    rerender(<Comp initial={'open'} total={false}/>)
    rerender(<Comp initial={'close'} total={true}/>)
    fireEvent.click(screen.getByText('<'));
    fireEvent.click(screen.getByText('>'));
    const value = container.getElementsByClassName('w-full h-full bg-black/50 absolute z-40');
    fireEvent.click(value[0]);

})











