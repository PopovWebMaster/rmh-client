
import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as logsForwardTASlise } from './../../../../../../../../redux/logsForwardTASlise.js';

import './FileDurations.scss';

const FileDurationsComponent = ( props ) => {

    let {
        serverName,

    } = props;

    const create = ( str ) => {
        return <span className = 'durationStr'>{ str }</span>

    }

    return (
        <div className = 'FTA_FileDuration' >
            { serverName === 'main'? create( '' ): '' }
            { serverName === 'backup'? create( '17:39:40' ): '' }
            <span className = 'serverName'>{ serverName }</span>
        </div>
    )

};

export function FileDurations( props ){

    const logsForwardTA = useSelector( logsForwardTASlise );
    // const dispatch = useDispatch();

    return (
        <FileDurationsComponent
            { ...props }
            logDateMain = { logsForwardTA.logDateMain }
            logDateBackup = { logsForwardTA.logDateBackup }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
