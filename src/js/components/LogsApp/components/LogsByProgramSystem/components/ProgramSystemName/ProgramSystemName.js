
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as companySlice } from './../../../../../../redux/companySlice.js';

import './ProgramSystemName.scss';

const ProgramSystemNameComponent = ( props ) => {

    let {
        companyProgramSystem,
    } = props;
    
    return (
        <div className = 'programSystemName'>
            <span>{ companyProgramSystem }</span>
        </div>
    )

};

export function ProgramSystemName( props ){

    const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <ProgramSystemNameComponent
            { ...props }
            companyProgramSystem = { company.companyProgramSystem }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
