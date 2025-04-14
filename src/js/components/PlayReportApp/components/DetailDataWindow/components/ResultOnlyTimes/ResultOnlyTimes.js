
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { selectorData as playReportSlice, setDetailDataWindowIsOpen } from './../../../../../../redux/playReportSlice.js';

import './ResultOnlyTimes.scss';


const ResultOnlyTimesComponent = ( props ) => {

    let {
        filteredList,

    } = props;

    let [ val, setVal ] = useState( '' );

    const trim_sec_ms = ( str ) => {
        let arr = str.split( '.' );
        let arr_2 = arr[0].split( ':' );
        return `${arr_2[0]}:${arr_2[1]}`;

    }

    useEffect( () => {

        let arr = [];

        let lastName = false;

        for( let i = 0; i < filteredList.length; i++ ){
            let {
                startTime,
                type,
                file,
            } = filteredList[ i ];

            if( type === 'movie' ){
                
                if( lastName === false ){
                    lastName = file.name;
                    arr.push( trim_sec_ms( startTime.time ) );
                }else{
                    if( lastName === file.name ){
                        arr.push( trim_sec_ms( startTime.time ) );
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

            if( i === 0 ){
                str = arr[ i ];
            }else{
                str = `${ str }, ${arr[ i ]}`;
            }; 
        };

        setVal( str );

    }, [ filteredList ] );

    return (

        <div className = 'DDW_ResultOnlyTimes'>

            <textarea   
                className = ''
                value = { val }
                rows = { 2 }
                onChange = { () => {} }
            />

        </div>
        
    )

};


export function ResultOnlyTimes( props ){

    const playReport = useSelector( playReportSlice );
    const dispatch = useDispatch();

    return (
        <ResultOnlyTimesComponent
            { ...props }
   

            filteredList = { playReport.filteredList }

            // setAditionalSpecialWindowIsOpen = { ( val ) => { dispatch( setAditionalSpecialWindowIsOpen( val ) ) } }
            setDetailDataWindowIsOpen = { ( val ) => { dispatch( setDetailDataWindowIsOpen( val ) ) } }


        />
    );


}
