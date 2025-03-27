
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectorData as navigationSlice, setCurrentPage } from './../../../../redux/navigationSlice.js';

// import './SetCurrentPage.scss';

const SetCurrentPageComponent = ( props ) => {

    let {
        children,
        setCurrentPage,
    } = props;

    let [ isReady, setIsReady ] = useState( false );

    useEffect( () => {
        const page = document.querySelector('meta[name="page"]').content;
        setCurrentPage( page );
        setIsReady( true );
    }, [] );

    return (
        <>{ isReady? children: '' }</>
    )

};

export function SetCurrentPage( props ){

    const navigation = useSelector( navigationSlice );
    const dispatch = useDispatch();

    return (
        <SetCurrentPageComponent
            { ...props }
            currentPage = { navigation.currentPage }
            setCurrentPage = { ( val ) => { dispatch( setCurrentPage( val ) ) } }

        />
    );


}
