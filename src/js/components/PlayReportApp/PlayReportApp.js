
import React, { useRef, useState, useEffect }   from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as userInfoSlice } from './../../redux/userInfoSlice.js';

import './PlayReportApp.scss';

import { PageContainer } from './../PageContainer/PageContainer.js';
import { SearchPanel } from './components/SearchPanel/SearchPanel.js';
import { SetCalendarData } from './components/SetCalendarData/SetCalendarData.js';

import { ROUTE } from './../../config/routes.js';

const PlayReportAppComponent = ( props ) => {

    let {
    } = props;
    
    return (
        <PageContainer
            className = 'playReportApp'
            page =      { ROUTE.PAGE.PLAY_REPORT }
        >
            <SetCalendarData>

                <SearchPanel />

            </SetCalendarData>
        </PageContainer>
    

    )

};

export function PlayReportApp( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <PlayReportAppComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
