import React from 'react';
import SlidePanel from "../../components/SlidePanel";

const DepIndicators = () => {
    return (
        <div>
            <SlidePanel values={[{
                title: 'Reporting departments',
                url: '/reporting_departments'
            }, {title: 'Departmental indicators', url: '/departmental_indicators'}]}/>
            DepIndicators
        </div>
    )
}

export default DepIndicators;