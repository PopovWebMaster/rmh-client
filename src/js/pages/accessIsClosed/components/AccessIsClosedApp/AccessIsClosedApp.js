
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as companySlice } from './../../../../redux/companySlice.js';

import './AccessIsClosedApp.scss';

import { PageContainer } from './../../../../components/PageContainer/PageContainer.js';
import { ROUTE } from './../../../../config/routes.js';
 
const AccessIsClosedAppComponent = ( props ) => {

    let {
        currentCompanyAlias,
    } = props;
    


    return (
        <PageContainer className = 'accessIsClosed'>
            <div>
                <p>                    
                    Доступ к этой странице закрыт
                    <a href = { `${HOST_TO_API_SERVER}/${currentCompanyAlias}/${ROUTE.PAGE.MAIN}` }>Вам сюда</a>
                </p>
                

            </div>


        </PageContainer>
        
    )

};

export function AccessIsClosedApp( props ){

    const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <AccessIsClosedAppComponent
            { ...props }
            currentCompanyAlias = { company.currentCompanyAlias }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
