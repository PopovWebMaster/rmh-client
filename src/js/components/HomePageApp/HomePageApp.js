
import React, { useRef, useState, useEffect }   from "react";
import { useSelector, useDispatch } from 'react-redux';

import { selectorData as userInfoSlice } from './../../redux/userInfoSlice.js';

import './HomePageApp.scss';

import { PageContainer } from './../PageContainer/PageContainer.js';

import { ROUTE } from './../../config/routes.js';


const HomePageAppComponent = ( props ) => {

    let {
        userInfo
    } = props;



    return (

        <PageContainer
            className = 'homePageApp'
            page =      { ROUTE.PAGE.HOME }
        >

            homePageApp
        </PageContainer>
    )

};


export function HomePageApp( props ){

    const userInfo = useSelector( userInfoSlice );
    const dispatch = useDispatch();

    return (
        <HomePageAppComponent
            { ...props }
            userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
