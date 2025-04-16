

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './Day.scss';

import { selectorData as companySlice } from './../../../../../../redux/companySlice.js';



const DayComponent = ( props ) => {

    let {
        dayName,
        dayNum,
    } = props;
    
    return (
        <div className = 'LP_Day'>
            <h2>{ dayName }</h2>
            <div className = 'LP_Day_field'>
x

            </div>
        </div>
    )

};

export function Day( props ){

    const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <DayComponent
            { ...props }
            currentCompanyAlias = { company.currentCompanyAlias }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
