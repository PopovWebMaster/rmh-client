
import React, { useRef, useState, useEffect }   from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as userInfoSlice } from './../../redux/userInfoSlice.js';

import './ScheduleFactApp.scss';

import { PageContainer } from './../PageContainer/PageContainer.js';

import { ROUTE } from './../../config/routes.js';

const ScheduleFactAppComponent = ( props ) => {

    let {
    } = props;
    
    return (
        <PageContainer
            className = 'scheduleFactApp'
            page =      { ROUTE.PAGE.SCHEDULE_FACT }
        >


        </PageContainer>
    

    )

};

export function ScheduleFactApp( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <ScheduleFactAppComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
