
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as navigationSlice } from './../../redux/navigationSlice.js';

import './TopMenu.scss';

import { ROUTE } from './../../config/routes.js';

import { MenuItemLeft } from './components/MenuItemLeft/MenuItemLeft.js';

import { SiteLogo } from './../SiteLogo/SiteLogo.js';
import { BtnLogout } from './components/BtnLogout/BtnLogout.js';

const TopMenuComponent = ( props ) => {

    let {
        currentPage
    } = props;
    
    let [ isShow, setIsShow ] = useState( false );

    useEffect( () => {

        if( currentPage === ROUTE.PAGE.LOGIN || currentPage === ROUTE.PAGE.HOME ){
            setIsShow( false );
        }else{
            setIsShow( true );
        };

    }, [ currentPage ] );


    return (

        <>{ isShow? (
            <div className = 'topMenu'>
                <div className = 'TM_left'>

                    <SiteLogo />

                    <MenuItemLeft 
                        title = { 'Главная' }
                        page = { ROUTE.PAGE.MAIN }
                    />

                    <MenuItemLeft 
                        title = { 'Расписание план' }
                        page = { ROUTE.PAGE.SCHEDULE_PLAN }
                    />

                    <MenuItemLeft 
                        title = { 'Расписание факт' }
                        page = { ROUTE.PAGE.SCHEDULE_FACT }
                    />

                    <MenuItemLeft 
                        title = { 'LOGS' }
                        page = { ROUTE.PAGE.LOGS }
                    />

                </div>
                <div className = 'TM_right'>

                    <BtnLogout />

                </div>
                
            </div>

        ): '' }</>

    )

};

export function TopMenu( props ){

    const navigation = useSelector( navigationSlice );
    // const dispatch = useDispatch();

    return (
        <TopMenuComponent
            { ...props }
            currentPage = { navigation.currentPage }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
