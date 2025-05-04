
import React, { useState } from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { selectorData as companySlice } from './../../redux/companySlice.js';

import './InputTypeTimeAsWindow.scss';

import { AlertWindowContainer } from './../AlertWindowContainer/AlertWindowContainer.js';
import { InputTimeHHMM } from './../InputTimeHHMM/InputTimeHHMM.js';

const InputTypeTimeAsWindowComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,
        callback,

    } = props;

    let [ time, setTime ] = useState(0);

    const acceptTime = () => {
        // console.dir( 'time' );
        // console.dir( time );
        callback( time );
        setIsOpen( false );

    }
    
    return (
        <div className = 'inputTypeTimeAsWindow'>
            <AlertWindowContainer 
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
                width =     { '20em' }
                height =    { '14.4em' }
            >

                <div className = 'inputTypeTimeAsWindow_wrap'>
                    <InputTimeHHMM 
                        setTime =   { setTime }
                        acceptHandler = { acceptTime }
                    />

                    <span
                        className = 'addBtn'
                        onClick = { acceptTime }
                    >Добавить</span>
                </div>

            </AlertWindowContainer>
            
        </div>
    )

};

export function InputTypeTimeAsWindow( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <InputTypeTimeAsWindowComponent
            { ...props }
            // companyProgramSystem = { company.companyProgramSystem }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
