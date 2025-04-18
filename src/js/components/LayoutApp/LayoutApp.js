
import React, { useRef, useState, useEffect }   from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { useNavigate } from "react-router-dom";

import './LayoutApp.scss';

import { PageContainer } from './../PageContainer/PageContainer.js';
import { selectorData as companySlice } from './../../redux/companySlice.js';

import { ROUTE } from './../../config/routes.js';

import { LayoutMain } from './components/LayoutMain/LayoutMain.js';
import { LayoutKeyPoints } from './components/LayoutKeyPoints/LayoutKeyPoints.js';
import { LayoutMenu } from './components/LayoutMenu/LayoutMenu.js';

const LayoutAppComponent = ( props ) => {

    let {
        currentCompanyAlias,
    } = props;

    let navigate = useNavigate();

    useEffect( () => {
        if( IS_DEVELOPMENT ){
            // navigate( `${currentCompanyAlias}/${ROUTE.PAGE.LAYOUT}` );
            navigate( `${currentCompanyAlias}/${ROUTE.PAGE.LAYOUT}/${ ROUTE.LAYOUT.KEY_POINTS }` );

        }else{
            navigate( `${currentCompanyAlias}/${ROUTE.PAGE.LAYOUT}` );
        };
    }, [] );
    
    return (
        <PageContainer
            className = 'layoutApp'
            page =      { ROUTE.PAGE.LAYOUT }
        >

                <LayoutMenu />

                <Routes>
                    <Route path = { `${currentCompanyAlias}/${ROUTE.PAGE.LAYOUT}/` } element = { <LayoutMain /> } />
                    <Route path = { `${currentCompanyAlias}/${ROUTE.PAGE.LAYOUT}/${ ROUTE.LAYOUT.KEY_POINTS }` } element = { <LayoutKeyPoints /> } />
                    <Route path = { `${currentCompanyAlias}/${ROUTE.PAGE.LAYOUT}/${ ROUTE.LAYOUT.EVENTS }` } element = { <div>EVENTS</div> } />
                    <Route path = { `${currentCompanyAlias}/${ROUTE.PAGE.LAYOUT}/${ ROUTE.LAYOUT.BLOCKS }` } element = { <div>BLOCKS</div> } />




                </Routes>
        </PageContainer>
    

    )

};

export function LayoutApp( props ){

    const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <LayoutAppComponent
            { ...props }
            currentCompanyAlias = { company.currentCompanyAlias }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
