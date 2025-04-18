
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './LayoutKeyPoints.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';

import { Week } from './components/Week/Week.js';
import { KeyPointsControlPanel } from './components/KeyPointsControlPanel/KeyPointsControlPanel.js';

const LayoutKeyPointsComponent = ( props ) => {

    let {
    } = props;
    
    return (
        <div className = 'layoutKeyPoints'>

            <KeyPointsControlPanel />
            <Week />


        </div>
    )

};

export function LayoutKeyPoints( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <LayoutKeyPointsComponent
            { ...props }
            // currentCompanyAlias = { company.currentCompanyAlias }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
