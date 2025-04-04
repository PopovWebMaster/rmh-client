
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { selectorData as logsForwardTASlise, setSelectedAll } from './../../../../../../../../../../../../redux/logsForwardTASlise.js';

import './SSWHeader.scss';

import { SelectedAllButton } from './../SelectedAllButton/SelectedAllButton.js';

const SSWHeaderComponent = ( props ) => {

    let {
        server,

    } = props;

    return (
        <div className = 'FTA_SSWHeader'>
            <SelectedAllButton 
                server = { server }
            />
        </div>
    )

};

export function SSWHeader( props ){

    // const logsForwardTA = useSelector( logsForwardTASlise );
    // const dispatch = useDispatch();

    return (
        <SSWHeaderComponent
            { ...props }

            // setSelectedAll = { ( val ) => { dispatch( setSelectedAll( val ) ) } }

        />
    );


}
