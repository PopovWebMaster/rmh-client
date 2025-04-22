
import React, { useState, useEffect, useRef } from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { selectorData as companySlice } from './../../redux/companySlice.js';

import './InputTimeHHMM.scss';


const InputTimeHHMMComponent = ( props ) => {

    let {
        setTime,
        acceptHandler,

    } = props;

    let [ hour, setHour ] = useState( '00' );
    let [ minutes, setMinutes ] = useState( '00' );
    let [ rangeIsOpen, setRangeIsOpen ] = useState( false );

    let hourRef = useRef();
    let minutesRef = useRef();

    useEffect(() => {
        // setTime( `${hour}:${minutes}` );
        set_time();
    }, [ hour, minutes ]);
    

    const accept = () => {
        let h = `${hour}`.padStart( 2, "0" );
        let m = `${minutes}`.padStart( 2, "0" );
        setHour( h );
        setMinutes( m );
        // let time = `${h}:${m}`;
        // setTime( time );
        acceptHandler();
        

    };

    const set_time = () => {
        let h = `${hour}`.padStart( 2, "0" );
        let m = `${minutes}`.padStart( 2, "0" );
        let time = `${h}:${m}`;
        setTime( time );
    }





    const change_hour = ( e ) => {
        let val = Number( e.target.value );
        if( val < 24 && val >= 0 ){
            setHour( val );
        };
    }

    const change_minutes = ( e ) => {
        let val = Number( e.target.value );
        if( val < 60 && val >= 0 ){
            setMinutes( val );
        };
    }

    const blur_hour = () => {
        setHour( `${hour}`.padStart( 2, "0" ) );
    }

    const blur_minutes = () => {
        setMinutes( `${minutes}`.padStart( 2, "0") );
    }

    const key_event_hour = ( e ) => {
        if( e.which === 13 ){
            accept();
        }else if( e.which === 39 ){ // right
            minutesRef.current.focus();
        };
    }

    const key_event_minutes = ( e ) => {
        if( e.which === 13 ){
            accept();
        }else if( e.which === 37 ){ // left
            hourRef.current.focus();
        };
    }


    const change_range_hour = ( e ) => {
        let val = Number( e.target.value );
        if( val < 24 && val >= 0 ){
            setHour( val );
        };

    };

    const change_range_minutes = ( e ) => {
        let val = Number( e.target.value );
        if( val < 60 && val >= 0 ){
            setMinutes( val );
        };

    };

    const range_close = () => {
        setHour( `${hour}`.padStart( 2, "0" ) );
        setMinutes( `${minutes}`.padStart( 2, "0") );
        setRangeIsOpen( false );
    }


    

    
    return (
        <div className = 'InputTimeHHMM'>

            <div className = 'InputTimeHHMM_input_wrap'>

                <input 
                    type =          'text'
                    className =     'InputTimeHHMM_h'
                    ref =           { hourRef }
                    value =         { hour }
                    onChange =      { change_hour }
                    maxLength =     { 2 }
                    onBlur =        { blur_hour }
                    onKeyDown =     { key_event_hour }
                />

                <span className = 'InputTimeHHMM_colon'>:</span>

                <input 
                    type =          'text'
                    className =     'InputTimeHHMM_m'
                    ref =           { minutesRef }
                    value =         { minutes }
                    onChange =      { change_minutes }
                    maxLength =     { 2 }
                    onBlur =        { blur_minutes }
                    onKeyDown =     { key_event_minutes }
                />


            </div>

            <div className = 'InputTimeHHMM_range_wrap'>
                <span 
                    className = 'icon icon-params'
                    onClick = { () => { setRangeIsOpen( !rangeIsOpen ) } }
                ></span>

                { rangeIsOpen? (

                    <div 
                        className = 'InputTimeHHMM_range_body'
                        onMouseLeave = { range_close }
                    >

                        <input 
                            type = 'range'
                            value = { hour }
                            onChange = { change_range_hour }
                            list = "values"
                            min =   "0"
                            max =   "23"
                            step =  "1"
                            onMouseUp = { range_close }
                        />

                        <datalist id="values">
                            <option value = "00" label = "00" ></option>
                            <option value = "01" label = "01" ></option>
                            <option value = "02" label = "02" ></option>
                            <option value = "03" label = "03" ></option>
                            <option value = "04" label = "04" ></option>
                            <option value = "05" label = "05" ></option>
                            <option value = "06" label = "06" ></option>
                            <option value = "07" label = "07" ></option>
                            <option value = "08" label = "08" ></option>
                            <option value = "09" label = "09" ></option>
                            <option value = "10" label = "10" ></option>
                            <option value = "11" label = "11" ></option>
                            <option value = "12" label = "12" ></option>
                            <option value = "13" label = "13" ></option>
                            <option value = "14" label = "14" ></option>
                            <option value = "15" label = "15" ></option>
                            <option value = "16" label = "16" ></option>
                            <option value = "17" label = "17" ></option>
                            <option value = "18" label = "18" ></option>
                            <option value = "19" label = "19" ></option>
                            <option value = "20" label = "20" ></option>
                            <option value = "21" label = "21" ></option>
                            <option value = "22" label = "22" ></option>
                            <option value = "23" label = "23" ></option>
                        </datalist>

                        <input 
                            type = 'range'
                            value = { minutes }
                            onChange = { change_range_minutes }
                            list = "mins"
                            min =   "0"
                            max =   "59"
                            step =  "1"
                            onMouseUp = { range_close }
                        />

                        <datalist id="mins">
                            <option value = "00" label = "00" ></option>
                            <option value = "01" label = "01" ></option>
                            <option value = "02" label = "02" ></option>
                            <option value = "03" label = "03" ></option>
                            <option value = "04" label = "04" ></option>
                            <option value = "05" label = "05" ></option>
                            <option value = "06" label = "06" ></option>
                            <option value = "07" label = "07" ></option>
                            <option value = "08" label = "08" ></option>
                            <option value = "09" label = "09" ></option>
                            <option value = "10" label = "10" ></option>
                            <option value = "11" label = "11" ></option>
                            <option value = "12" label = "12" ></option>
                            <option value = "13" label = "13" ></option>
                            <option value = "14" label = "14" ></option>
                            <option value = "15" label = "15" ></option>
                            <option value = "16" label = "16" ></option>
                            <option value = "17" label = "17" ></option>
                            <option value = "18" label = "18" ></option>
                            <option value = "19" label = "19" ></option>
                            <option value = "20" label = "20" ></option>
                            <option value = "21" label = "21" ></option>
                            <option value = "22" label = "22" ></option>
                            <option value = "23" label = "23" ></option>
                            <option value = "24" label = "24" ></option>
                            <option value = "25" label = "25" ></option>
                            <option value = "26" label = "26" ></option>
                            <option value = "27" label = "27" ></option>
                            <option value = "28" label = "28" ></option>
                            <option value = "29" label = "29" ></option>
                            <option value = "30" label = "30" ></option>
                            <option value = "31" label = "31" ></option>
                            <option value = "32" label = "32" ></option>
                            <option value = "33" label = "33" ></option>
                            <option value = "34" label = "34" ></option>
                            <option value = "35" label = "35" ></option>
                            <option value = "36" label = "36" ></option>
                            <option value = "37" label = "37" ></option>
                            <option value = "38" label = "38" ></option>
                            <option value = "39" label = "39" ></option>
                            <option value = "40" label = "40" ></option>
                            <option value = "41" label = "41" ></option>
                            <option value = "42" label = "42" ></option>
                            <option value = "43" label = "43" ></option>
                            <option value = "44" label = "44" ></option>
                            <option value = "45" label = "45" ></option>
                            <option value = "46" label = "46" ></option>
                            <option value = "47" label = "47" ></option>
                            <option value = "48" label = "48" ></option>
                            <option value = "49" label = "49" ></option>
                            <option value = "50" label = "50" ></option>
                            <option value = "51" label = "51" ></option>
                            <option value = "52" label = "52" ></option>
                            <option value = "53" label = "53" ></option>
                            <option value = "54" label = "54" ></option>
                            <option value = "55" label = "55" ></option>
                            <option value = "56" label = "56" ></option>
                            <option value = "57" label = "57" ></option>
                            <option value = "58" label = "58" ></option>
                            <option value = "59" label = "59" ></option>
                        </datalist>
                    </div>

                ): '' }

                
            </div>

            
           
            
        </div>
    )

};

export function InputTimeHHMM( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <InputTimeHHMMComponent
            { ...props }
            // companyProgramSystem = { company.companyProgramSystem }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
