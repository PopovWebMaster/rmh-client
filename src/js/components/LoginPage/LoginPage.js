
import React, { useRef, useState, useEffect }   from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as userInfoSlice } from './../../redux/userInfoSlice.js';

import './LoginPage.scss';

import { PageContainer } from './../PageContainer/PageContainer.js';

const LoginPageComponent = ( props ) => {

    let {
    } = props;
    
    return (
        <PageContainer
            className = 'loginPage'
        >

            <p>loginPage</p>


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
