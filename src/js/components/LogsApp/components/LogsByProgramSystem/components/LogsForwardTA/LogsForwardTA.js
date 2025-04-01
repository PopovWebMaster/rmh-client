
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as companySlice } from './../../../../../../redux/companySlice.js';

import './LogsForwardTA.scss';

const LogsForwardTAComponent = ( props ) => {

    let {
        companyProgramSystem,
    } = props;
    
    return (
        <div className = 'logsForwardTA'>
            LogsForwardTA
        </div>
    )

};

export function LogsForwardTA( props ){

    const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <LogsForwardTAComponent
            { ...props }
            companyProgramSystem = { company.companyProgramSystem }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
