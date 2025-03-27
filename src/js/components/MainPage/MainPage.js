
import React, { useRef, useState, useEffect }   from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as userInfoSlice } from './../../redux/userInfoSlice.js';

import './MainPage.scss';

import { PageContainer } from './../PageContainer/PageContainer.js';

import { ROUTE } from './../../config/routes.js';

const MainPageComponent = ( props ) => {

    let {
    } = props;
    
    return (
        <PageContainer
            className = 'mainPageContainer'
            page =      { ROUTE.PAGE.MAIN }
        >


        </PageContainer>
    

    )

};

export function MainPage( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <MainPageComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
