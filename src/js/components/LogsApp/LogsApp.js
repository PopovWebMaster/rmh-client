
import React, { useRef, useState, useEffect }   from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as userInfoSlice } from './../../redux/userInfoSlice.js';

import './LogsApp.scss';

import { PageContainer } from './../PageContainer/PageContainer.js';

import { ROUTE } from './../../config/routes.js';

const LogsAppComponent = ( props ) => {

    let {
    } = props;
    
    return (
        <PageContainer
            className = 'logsApp'
            page =      { ROUTE.PAGE.LOGS }
        >


        </PageContainer>
    

    )

};

export function LogsApp( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <LogsAppComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
