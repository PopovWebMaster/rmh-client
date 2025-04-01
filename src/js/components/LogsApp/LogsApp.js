
import React, { useRef, useState, useEffect }   from "react";
import { useSelector, useDispatch } from 'react-redux';
// import { selectorData as userInfoSlice } from './../../redux/userInfoSlice.js';
import { selectorData as companySlice } from './../../redux/companySlice.js';


import './LogsApp.scss';

import { PageContainer } from './../PageContainer/PageContainer.js';

import { NoLogs } from './components/NoLogs/NoLogs.js';
import { LogsByProgramSystem } from './components/LogsByProgramSystem/LogsByProgramSystem.js';

import { ROUTE } from './../../config/routes.js';
import { COMPANY_TYPE } from './../../config/company.js';
import { InfoBlock } from './../InfoBlock/InfoBlock.js';

const LogsAppComponent = ( props ) => {

    let {
        companyProgramSystem,
        currentCompanyType,
    } = props;
    
    return (
        <PageContainer
            className = 'logsApp'
            page =      { ROUTE.PAGE.LOGS }
        >
            <>{ currentCompanyType === COMPANY_TYPE.TV? (
                <>{ companyProgramSystem === null? 
                    <NoLogs />: 
                    <LogsByProgramSystem />
                }</>
            ): (
                <InfoBlock margin = {'2em 0'}>
                    <p>Данных для компании тип <span style = {{ fontWeight: 'bold'}}>"{ currentCompanyType }"</span> нет.</p>
                </InfoBlock>
            ) }</>
        </PageContainer>
    

    )

};

export function LogsApp( props ){

    const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <LogsAppComponent
            { ...props }
            companyProgramSystem = { company.companyProgramSystem }
            currentCompanyType = { company.currentCompanyType }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
