
import React, { useRef, useState, useEffect }   from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as userInfoSlice } from './../../redux/userInfoSlice.js';

import './LoginPage.scss';

import { PageContainer } from './../PageContainer/PageContainer.js';

import { ROUTE } from './../../config/routes.js';

const LoginPageComponent = ( props ) => {

    let {
    } = props;
    
    return (
        <PageContainer
            className = 'loginPage'
            page =      { ROUTE.PAGE.LOGIN }
        >


        </PageContainer>
    

    )

};

export function LoginPage( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <LoginPageComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
