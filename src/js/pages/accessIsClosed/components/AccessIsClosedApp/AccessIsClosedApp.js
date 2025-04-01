
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
// import { selectorData as companySlice } from './../../../../redux/companySlice.js';
import { selectorData as userInfoSlice } from './../../../../redux/userInfoSlice.js';

import './AccessIsClosedApp.scss';

import { PageContainer } from './../../../../components/PageContainer/PageContainer.js';
import { ROUTE } from './../../../../config/routes.js';
 
const AccessIsClosedAppComponent = ( props ) => {

    let {
        user_company
    } = props;

    return (
        <PageContainer className = 'accessIsClosed'>
            <div>
                <p>                    
                    Доступ к этой странице закрыт
                    <a href = { `${HOST_TO_API_SERVER}/${user_company[0]}/${ROUTE.PAGE.MAIN}` }>Вам сюда</a>
                </p>
            </div>
        </PageContainer>
        
    )

};

export function AccessIsClosedApp( props ){
    const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <AccessIsClosedAppComponent
            { ...props }
            user_company = { userInfo.user_company }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }
        />
    );


}
