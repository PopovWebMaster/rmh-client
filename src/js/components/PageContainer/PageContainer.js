
import React from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { selectorData as userInfoSlice } from './../../redux/userInfoSlice.js';

import './PageContainer.scss';

import { SiteBackground } from './components/SiteBackground/SiteBackground.js';
import { BodyContainer } from './components/BodyContainer/BodyContainer.js';

import { Spinner } from './components/Spinner/Spinner.js';
import { TopMenu } from './../TopMenu/TopMenu.js';


const PageContainerComponent = ( props ) => {

    let {
        children,
        className = '',
        pageName,
    } = props;
    


    return (
        <div className = 'pageContainer'>
            <SiteBackground>
                <BodyContainer>

                    <Spinner />

                    <TopMenu />

                    <div className = {className}>
                        { children }
                    </div>

                </BodyContainer>
            </SiteBackground>
        </div>
    )

};

export function PageContainer( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <PageContainerComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
