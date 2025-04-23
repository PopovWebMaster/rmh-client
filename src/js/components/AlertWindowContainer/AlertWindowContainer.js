
import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { selectorData as companySlice } from './../../redux/companySlice.js';

import './AlertWindowContainer.scss';



const AlertWindowContainerComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,
        title = '',
        width = '25vw',
        height = '20vh',

        children,

    } = props;

    let [ opacity, setOpacity ] = useState( 0 );
    useEffect( () => {
        let timerId = setTimeout(() => {
            setOpacity( 1 );
            clearTimeout( timerId );
        }, 500 );
        
    }, [] );
    
    return (
        <div 
            className = { `AlertWindowContainer ${isOpen? 'isOpen': 'isClose'}` }
            style = { { opacity } }
        >

            <div 
                className = { `AWC_window ${isOpen? 'isOpen': 'isClose'}` }
                style = {{
                    width,
                    height,
                }}
            >
                <div className = 'AWC_window_header'>
                    <div className = 'AWC_window_header_title'>
                        <h2>{ title }</h2>
                    </div>
                    <div className = 'AWC_window_header_close'>
                        <span 
                            className = 'icon-cancel-2'
                            onClick = { () => { setIsOpen( false ) } }
                        ></span>
                    </div>
                </div>

                <div className = 'AWC_window_body'>
                    { children } 
                </div>

            </div>

        </div>
    )

};

export function AlertWindowContainer( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <AlertWindowContainerComponent
            { ...props }
            // companyProgramSystem = { company.companyProgramSystem }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
