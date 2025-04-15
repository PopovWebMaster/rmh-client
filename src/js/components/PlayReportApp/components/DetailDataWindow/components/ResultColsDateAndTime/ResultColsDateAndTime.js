
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { selectorData as playReportSlice } from './../../../../../../redux/playReportSlice.js';

import './ResultColsDateAndTime.scss';


const ResultColsDateAndTimeComponent = ( props ) => {

    let {
        filteredList,

    } = props;

    let [ val, setVal ] = useState( '' );

    const trim_sec_ms = ( str ) => {
        let arr = str.split( '.' );
        let arr_2 = arr[0].split( ':' );
        return `${arr_2[0]}:${arr_2[1]}`;

    }

    const get_row = ( date, startTime ) => {
        let { YYYY_MM_DD } = date;
        let { time } = startTime;

        let date_str = YYYY_MM_DD.replaceAll( '-', '.' );
        let time_trim = trim_sec_ms( time );
        let result = date_str + ' - ' + time_trim + '\n';

        return result;

    }
    

    useEffect( () => {

        let arr = [];

        let lastName = false;

        for( let i = 0; i < filteredList.length; i++ ){
            let {
                startTime,
                type,
                file,
                date,
            } = filteredList[ i ];

            if( type === 'movie' ){
                
                if( lastName === false ){
                    lastName = file.name;
                    arr.push( get_row( date, startTime ) );
                }else{
                    if( lastName === file.name ){
                        arr.push( get_row( date, startTime ) );
                        lastName = file.name;
                    }else{
                        arr = [];
                        break;
                    };
                }
            };
        };

        let str = '';
        for( let i = 0; i < arr.length; i++ ){
            str = `${ str } ${arr[ i ]}`;
        };

        setVal( str );

    }, [ filteredList ] );



    return (

        <div className = 'DDW_ResultColsDateAndTime'>
            <textarea   
                className = ''
                value = { val }
                rows = { 2 }
                onChange = { () => {} }
            />
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
            // setDetailDataWindowIsOpen = { ( val ) => { dispatch( setDetailDataWindowIsOpen( val ) ) } }


        />
    );


}
