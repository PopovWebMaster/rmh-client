
import React from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { selectorData as userInfoSlice } from './../../redux/userInfoSlice.js';

import './TopMenu.scss';

import { ROUTE } from './../../config/routes.js';

import { MenuItemLeft } from './components/MenuItemLeft/MenuItemLeft.js';



const TopMenuComponent = ( props ) => {

    let {} = props;
    


    return (
        <div className = 'topMenu'>
            <div className = 'TM_left'>

                <MenuItemLeft 
                    title = { 'Главная' }
                    page = { ROUTE.PAGE.HOME }
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

                <a 
                    className = 'menuItemRight'
                    href = { `${HOST_TO_API_SERVER}/logout` }
                >Выйти</a>

            </div>
            
        </div>
    )

};

export function TopMenu( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <TopMenuComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
