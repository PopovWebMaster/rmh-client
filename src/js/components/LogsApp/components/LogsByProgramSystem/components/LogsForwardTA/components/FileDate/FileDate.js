// FileDate


import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as logsForwardTASlise } from './../../../../../../../../redux/logsForwardTASlise.js';

import './FileDate.scss';

const FileDateComponent = ( props ) => {

    let {
        serverName,

        logDateMain,
        logDateBackup,

    } = props;

    const click = () => {
        if( serverName === 'main' ){
            console.dir( 'main' );
        }else if( serverName === 'backup' ){
            console.dir( 'backup' );

        };
    };

    const create = ( str ) => {
        return <span className = 'dateStr'>{ str }</span>

    }

    
    
    return (
        <div className = 'FTA_FileDate' >
            { serverName === 'main'? create( '25 марта 1917г.' ): '' }
            { serverName === 'backup'? create( '' ): '' }
            <span className = 'serverName'>{ serverName }</span>
        </div>
    )

};

export function FileDate( props ){

    const logsForwardTA = useSelector( logsForwardTASlise );
    // const dispatch = useDispatch();

    return (
        <FileDateComponent
            { ...props }
            logDateMain = { logsForwardTA.logDateMain }
            logDateBackup = { logsForwardTA.logDateBackup }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
