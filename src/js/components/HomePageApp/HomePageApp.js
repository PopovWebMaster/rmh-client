
import React, { useRef, useState, useEffect }   from "react";
import { useSelector, useDispatch } from 'react-redux';

import { selectorData as userInfoSlice } from './../../redux/userInfoSlice.js';

import './HomePageApp.scss';

import { get_data_from_server_by_route } from './../../helpers/get_data_from_server_by_route.js';



const HomePageAppComponent = ( props ) => {

    let {
        userInfo
    } = props;
    console.dir('props');
    console.dir(props);

    let link = 'http://rmh/test-post-request';


    const cllick = () => {

        get_data_from_server_by_route({
            // route: 'http://rmh/test-post-request',
            route: 'http://rmh/api/1-resp',

            action: '',
            data: {},
            callback: ( resp ) => {
                console.dir( 'callback' );
                console.dir( resp );

            },
            errorCallback: ( resp2 ) => {
                console.dir( 'errorCallback' );
                console.dir( resp2 );

            },
        });
    }



    return (
        <div className = 'homePageApp'>

            <h1 onClick = { cllick }>click</h1>
        </div>
    )

};


export function HomePageApp( props ){

    const userInfo = useSelector( userInfoSlice );
    const dispatch = useDispatch();

    return (
        <HomePageAppComponent
            { ...props }
            userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
