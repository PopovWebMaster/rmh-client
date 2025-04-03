
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as companySlice } from './../../../../../../../../redux/companySlice.js';

import './DownloadButton.scss';

const DownloadButtonComponent = ( props ) => {

    let {
        serverName,
    } = props;

    const click = () => {
        if( serverName === 'main' ){
            console.dir( 'main' );
        }else if( serverName === 'backup' ){
            console.dir( 'backup' );

        };
    };
    
    return (
        <div 
            className = 'FTA_DownloadButton'
            onClick = { click }
        >
            <span className = 'icon fpd-icon-file-upload'></span>
            <span className = 'title'>Загрузить</span>
            <span className = 'extension'>.PlayReport</span>
            { serverName === 'main'? 
                <span className = 'title_second'>Основной</span>: 
                <span className = 'title_second'>Резервный</span> 
            } 
            
            <span className = 'serverName'>{ serverName === 'main'? 'main': 'backup' }</span>

        </div>
    )

};

export function DownloadButton( props ){

    const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <DownloadButtonComponent
            { ...props }
            companyProgramSystem = { company.companyProgramSystem }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
