// SelectServerForReport


import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as logsForwardTASlise, setSelectedServerForReport } from './../../../../../../../../../../../../redux/logsForwardTASlise.js';

import './SelectServerForReport.scss';

import { SSWHeaderButton } from './../SSWHeaderButton/SSWHeaderButton.js';

const SelectServerForReportComponent = ( props ) => {

    let {

        server,

        selectedServerForReport,
        setSelectedServerForReport,

    } = props;


    return (

        <SSWHeaderButton
            isActive =      { selectedServerForReport === server }
            clickHandler =  { () => { setSelectedServerForReport( server ) } }
            title =         { 'Основной для отчёта' }
            server =        { server }
            className =     'selectedServerForReport'
        >

        </SSWHeaderButton>
    )

};

export function SelectServerForReport( props ){
    const logsForwardTA = useSelector( logsForwardTASlise );
    const dispatch = useDispatch();

    return (
        <SelectServerForReportComponent
            { ...props }

            selectedServerForReport = { logsForwardTA.selectedServerForReport }
            setSelectedServerForReport = { ( val ) => { dispatch( setSelectedServerForReport( val ) ) } }

        />
    );


}
