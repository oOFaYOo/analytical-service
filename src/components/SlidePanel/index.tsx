import React, {useState} from "react";
import {ISlidePanel} from "../../types";
import {Link, useLocation} from "react-router-dom";

const SlidePanel = ({values, initial = 'open', total}: ISlidePanel) => {

    const [open, setOpen] = useState<boolean>(initial === 'open')
    const url = useLocation().pathname;

    return (
        <>
            <div className={'absolute h-full w-[260px] bg-zinc-700 flex flex-row duration-150 z-[45]'}
                 style={{left: open ? '0px' : '-230px'}}>
                <div className={'flex relative flex-col gap-y-4 justify-center items-center h-full w-[230px]'}>
                    {
                        values.map((item, index) => {
                            return <Link to={item.url} key={index}
                                         className={url === item.url ? 'p-2 shadow hover:shadow-md text-center w-full text-blue-600 hover:brightness-110' : 'p-2 shadow hover:shadow-md text-center w-full text-zinc-400 hover:brightness-125'}>
                                {item.title}
                            </Link>
                        })
                    }
                </div>
                <div onClick={() => {
                    setOpen(!open)
                }}
                     className={'hover:brightness-150 hover:bg-zinc-700/10 font-bold text-zinc-500 text-2xl h-full hover:cursor-pointer grow flex relative justify-center items-center'}>
                    {open ? '<' : '>'}
                </div>
            </div>
            {total && open ?
                <div className={'w-full h-full bg-black/50 absolute z-40'} onClick={() => setOpen(false)}></div> : null}

        </>
    );
}

export default SlidePanel;






