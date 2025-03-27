
import React, { useRef, useState, useEffect }   from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as userInfoSlice } from './../../redux/userInfoSlice.js';

import './SchedulePlanApp.scss';

import { PageContainer } from './../PageContainer/PageContainer.js';

import { ROUTE } from './../../config/routes.js';

const SchedulePlanAppComponent = ( props ) => {

    let {
    } = props;
    
    return (
        <PageContainer
            className = 'schedulePlanApp'
            page =      { ROUTE.PAGE.SCHEDULE_PLAN }
        >


        </PageContainer>
    

    )

};

export function SchedulePlanApp( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <SchedulePlanAppComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
