import React, {useState} from "react";
import {SlidePanelType} from "../../types";
import {Link} from "react-router-dom";

const SlidePanel = ({values} : SlidePanelType) => {

    const [open, setOpen] = useState<boolean>(false)

    return (
        <div className={'absolute h-full w-[260px] bg-zinc-700 flex flex-row duration-75 z-10'}
             style={{left: open ? '0px' : '-230px'}}>
            <div className={'flex relative flex-col gap-y-4 justify-center items-center h-full w-[230px]'}>
                {
                    values.map((item, index)=>{
                        return <Link to={item.url} key={index} className={'p-2 hover:bg-zinc-600/5 text-center w-full text-zinc-400 hover:brightness-125'}>
                            {item.title}
                        </Link>
                    })
                }
            </div>
            <div onClick={() => {
                setOpen(!open)
            }}
                 className={'hover:shadow-xl shadow-md hover:brightness-150 font-bold text-zinc-500 text-2xl h-full hover:cursor-pointer grow flex relative justify-center items-center'}>{open ? '<' : '>'}</div>
        </div>
    );

}

export default SlidePanel;






