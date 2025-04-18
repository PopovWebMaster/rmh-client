
import React from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { selectorData as companySlice } from './../../redux/companySlice.js';

import './InputTypeTimeAsWindow.scss';

import { AlertWindowContainer } from './../AlertWindowContainer/AlertWindowContainer.js';

const InputTypeTimeAsWindowComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,
        value,
        callback,

    } = props;
    
    return (
        <div className = 'inputTypeTimeAsWindow'>
            
            <AlertWindowContainer 
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
            >
                inputTypeTimeAsWindow

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
