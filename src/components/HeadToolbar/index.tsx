import React, {useContext} from 'react';
import {Link, useLocation} from "react-router-dom";
import {Admin, FilterContext} from "../../App";
import {MenuItem, Select} from "@mui/material";

const toTopSort = (arr: any[], key: string) => {
    // @ts-ignore
    return arr.slice(0).sort((a, b) => {
        if (typeof a[key] === 'number') {
            return a[key] - b[key];
        } else if (typeof a[key] === 'string') {
            if (a[key] > b[key]) {
                return 1;
            }
            if (a[key] < b[key]) {
                return -1;
            }
            return 0;
        }
    })
};

const toBottomSort = (arr: any[], key: string) => {
    // @ts-ignore
    return arr.slice(0).sort((a, b) => {
        if (typeof a[key] === 'number') {
            return b[key] - a[key];
        } else if (typeof a[key] === 'string') {
            if (a[key] < b[key]) {
                return 1;
            }
            if (a[key] > b[key]) {
                return -1;
            }
            return 0;
        }
    })
};

const HeadToolbar = () => {
    const admin = useContext(Admin);
    const {setSortFunc} = useContext(FilterContext);
    const url = useLocation().pathname;

    const [sort, setSort] = React.useState('1');

    const handleChange = (event: any) => {
        setSort(event.target.value as string);
        if (event.target.value === 2) {
            setSortFunc(() => toTopSort);
        } else if (event.target.value === 3) {
            setSortFunc(() => toBottomSort);
        } else {
            setSortFunc(undefined);
        }
    };

    return (
        <div style={{userSelect: 'none'}} className={'text-zinc-300' +
        ' flex-row w-full ' +
        'h-12 absolute bg-zinc-700 ' +
        'z-50 flex justify-between items-center shadow-xl'}>
            {
                url.includes('/reporting_departments') || url.includes('/departmental_indicators') ? null :
                    <div className={'absolute left-6 z-50'}>
                        <Select
                            labelId='uncontrolled-native'
                            id='uncontrolled-native'
                            value={sort}
                            disabled={url.includes('/', 1)}
                            onChange={
                                handleChange
                            }
                            className={'max-h-[32px] w-[150px] absolute hover:brightness-125'}
                            style={{color: 'rgb(161 161 170)'}}
                        >
                            <MenuItem value={1}>Original</MenuItem>
                            <MenuItem value={2}>To the top</MenuItem>
                            <MenuItem value={3}>To the bottom</MenuItem>
                        </Select>
                    </div>
            }
            <div className={'flex justify-center flex-row grow w-full relative'}>
                <Link
                    className={`${url.includes('/users') ? ( url.includes('/', 1) ? 'flex justify-center items-center text-zinc-200 duration-75 w-28 hover:brightness-110 h-8 bg-zinc-600 border-4 border-blue-600 mr-2'
                            : 'flex justify-center items-center text-zinc-200 w-28 hover:bg-blue-500 h-8 bg-blue-600 mr-2') :
                        'flex justify-center items-center w-28 hover:brightness-110 h-8 bg-zinc-600 mr-2'}`}
                    to={'/users'}>Users</Link>
                <Link
                    className={`${url.includes('/products') ? ( url.includes('/', 1) ? 'flex justify-center items-center text-zinc-200 duration-75 w-28 hover:brightness-110 h-8 bg-zinc-600 border-4 border-blue-600'
                            : 'flex justify-center items-center text-zinc-200 w-28 hover:bg-blue-500 h-8 bg-blue-600') :
                        'flex justify-center items-center w-28 hover:brightness-110 h-8 bg-zinc-600'}`}
                    to={'/products'}>Products</Link>
            </div>
            <div className={'text-zinc-400 right-6 absolute'}>{admin.name + ' '}|{' ' + admin.role}</div>
        </div>
    );
};

export default HeadToolbar;