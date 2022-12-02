import React from 'react';
import SlidePanel from "../../components/SlidePanel";

const DepReporting = () => {

    return (
        <div>
            <SlidePanel values={[{
                title: 'Reporting departments',
                url: '/reporting_departments'
            }, {title: 'Departmental indicators', url: '/departmental_indicators'}]}/>
            DepReporting
        </div>
    )
}

export default DepReporting;