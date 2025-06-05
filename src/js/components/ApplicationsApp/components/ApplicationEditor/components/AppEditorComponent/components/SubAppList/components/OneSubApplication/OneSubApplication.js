
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './OneSubApplication.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';

import { ItemSubName }              from './../ItemSubName/ItemSubName.js';
import { ItemSubPeriod }            from './../ItemSubPeriod/ItemSubPeriod.js';
import { ItemSubFiles }             from './../ItemSubFiles/ItemSubFiles.js';
import { ItemSubDescription }       from './../ItemSubDescription/ItemSubDescription.js';
import { ItemSubShedule }           from './../ItemSubShedule/ItemSubShedule.js';
import { ItemSubReportInDetail }    from './../ItemSubReportInDetail/ItemSubReportInDetail.js';
import { ItemSubRemove }            from './../ItemSubRemove/ItemSubRemove.js';

const OneSubApplicationComponent = ( props ) => {

    let {
        air_notes,
        application_id,
        duration_sec,
        id,
        name,
        period_from,
        period_to,
        serial_num,
        type,

    } = props;
    
    
    return (
        <div className = 'oneSubApplication'>

            <ItemSubName 
                id =                { id }
                application_id =    { application_id }
                name =              { name }
            />
            {/* <ItemSubPeriod />
            <ItemSubFiles />
            <ItemSubDescription />
            <ItemSubShedule />
            <ItemSubReportInDetail />
            <ItemSubRemove /> */}
           

        </div>
    )

};

export function OneSubApplication( props ){

    const application = useSelector( applicationSlice );
    // const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <OneSubApplicationComponent
            { ...props }
            currentSubAppList = { application.currentSubAppList }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
