

import React from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { selectorData as companySlice } from './../../redux/companySlice.js';

import './InfoBlock.scss';

const InfoBlockComponent = ( props ) => {

    let {
        title = false,
        margin = '0 0',
        children,

    } = props;
    
    return (
        <div 
            className = 'infoBlock'
            style = { { margin } }
        >
            <div className = 'infoBlockWrap'>
                { title === false? '': <h1>{ title }</h1>  }
                { children }
            </div>
            
        </div>
    )

};

export function InfoBlock( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <InfoBlockComponent
            { ...props }
            // companyProgramSystem = { company.companyProgramSystem }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
