
import React, { useRef, useState, useEffect }   from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { useNavigate } from "react-router-dom";

import './ApplicationsApp.scss';

import { PageContainer } from './../PageContainer/PageContainer.js';
import { selectorData as companySlice } from './../../redux/companySlice.js';

import { ROUTE } from './../../config/routes.js';

import { ApplicationsMain } from './components/ApplicationsMain/ApplicationsMain.js';
import { CreateApplication } from './components/CreateApplication/CreateApplication.js';
import { ApplicationsMenu } from './components/ApplicationsMenu/ApplicationsMenu.js';
import { ApplicationEditor } from './components/ApplicationEditor/ApplicationEditor.js';

const ApplicationsAppComponent = ( props ) => {

    let {
        currentCompanyAlias,
    } = props;

    let navigate = useNavigate();

    useEffect( () => {
        if( IS_DEVELOPMENT ){
            navigate( `${currentCompanyAlias}/${ROUTE.PAGE.APPLICATIONS}` );
            // navigate( `${currentCompanyAlias}/${ROUTE.PAGE.LAYOUT}/${ ROUTE.LAYOUT.KEY_POINTS }` );

        }else{
            navigate( `${currentCompanyAlias}/${ROUTE.PAGE.APPLICATIONS}` );
        };
    }, [] );
    
    return (
        <PageContainer
            className = 'applicationsApp'
            page =      { ROUTE.PAGE.APPLICATIONS }
        >

                <ApplicationsMenu />

                <Routes>
                    <Route path = { `${currentCompanyAlias}/${ROUTE.PAGE.APPLICATIONS}/` } element = { <ApplicationsMain /> } />
                    <Route path = { `${currentCompanyAlias}/${ROUTE.PAGE.APPLICATIONS}/:id` } element = { <ApplicationEditor /> } />

                    {/* <Route path = { `${currentCompanyAlias}/${ROUTE.PAGE.APPLICATIONS}/${ ROUTE.APPLICATIONS.CREATE }` } element = { <CreateApplication /> } /> */}


                    {/* <Route path = { `${currentCompanyAlias}/${ROUTE.PAGE.LAYOUT}/${ ROUTE.LAYOUT.KEY_POINTS }` }    element = { <LayoutKeyPoints /> } />
                    <Route path = { `${currentCompanyAlias}/${ROUTE.PAGE.LAYOUT}/${ ROUTE.LAYOUT.EVENTS }` }        element = { <LayoutEvents /> } />
                    <Route path = { `${currentCompanyAlias}/${ROUTE.PAGE.LAYOUT}/${ ROUTE.LAYOUT.CATEGORIES }` }    element = { <LayoutCategories /> } /> */}

                </Routes>

        </PageContainer>
    

    )

};

export function ApplicationsApp( props ){

    const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <ApplicationsAppComponent
            { ...props }
            currentCompanyAlias = { company.currentCompanyAlias }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
