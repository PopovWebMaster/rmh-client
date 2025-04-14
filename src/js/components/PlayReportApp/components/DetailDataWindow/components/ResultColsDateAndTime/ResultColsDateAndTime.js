
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { selectorData as playReportSlice, setDetailDataWindowIsOpen } from './../../../../../../redux/playReportSlice.js';

import './ResultColsDateAndTime.scss';


const ResultColsDateAndTimeComponent = ( props ) => {

    let {
        filteredList,

    } = props;

    useEffect( () => {
        console.dir( 'ResultColsDateAndTime' );
    }, [] );







    return (

        <div className = 'DDW_ResultColsDateAndTime'>
ResultColsDateAndTime
        </div>
        
    )

};


export function ResultColsDateAndTime( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <ResultColsDateAndTimeComponent
            { ...props }
   

            filteredList = { playReport.filteredList }

            // setAditionalSpecialWindowIsOpen = { ( val ) => { dispatch( setAditionalSpecialWindowIsOpen( val ) ) } }
            setDetailDataWindowIsOpen = { ( val ) => { dispatch( setDetailDataWindowIsOpen( val ) ) } }


        />
    );


}
