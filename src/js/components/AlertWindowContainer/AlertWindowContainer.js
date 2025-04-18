
import React from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { selectorData as companySlice } from './../../redux/companySlice.js';

import './AlertWindowContainer.scss';



const AlertWindowContainerComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,
        title = '',

        children,

    } = props;
    
    return (
        <div 
            className = { `AlertWindowContainer ${isOpen? 'isOpen': 'isClose'}` }
            // className = { `AlertWindowContainer isOpen ` }

        >

            <div className = { `AWC_window ${isOpen? 'isOpen': 'isClose'}` }>
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

                { children }
            
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
