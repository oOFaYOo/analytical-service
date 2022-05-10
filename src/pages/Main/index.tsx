import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import api from "../../api";

const Main = () => {
    const path = useLocation().pathname;
    const [data, setData] = useState<undefined | { name: string, id: string }[]>();

    console.log(data);

    useEffect(() => {
        (async () => {
            const data = await api.getEmployees() as undefined | { name: string, id: string }[];
            setData(data);
        })()
    }, [data]);

    return (
        <>
            <Link to={'/'}>
                <div>Main</div>
            </Link>
            {data ? <div>

                {data.map((item:{ name: string, id: string }, i:number) => {
                    return( <Link key={i} to={path + 'user/' + item.id}>
                        <div>{item.name}</div>
                    </Link>)
                })}

            </div> : <div>loading</div>}
        </>

    );
};

export default Main;