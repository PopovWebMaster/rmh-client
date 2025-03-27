
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { 
    selectorData as companySlice, 
    setCurrentCompanyAlias, 
    setCurrentCompanyName,
} from './../../../../redux/companySlice.js';

// import './SetCurrentCompany.scss';

const SetCurrentCompanyComponent = ( props ) => {

    let {
        children,
        setCurrentCompanyAlias, 
        setCurrentCompanyName,
    } = props;

    let [ isReady, setIsReady ] = useState( false );

    useEffect( () => {

        
        const companyAlias = document.querySelector('meta[name="company-alias"]').content;
        const companyName = document.querySelector('meta[name="company-name"]').content;

        setCurrentCompanyAlias( companyAlias );
        setCurrentCompanyName( companyName );

        setIsReady( true );
    }, [] );

    return (
        <>{ isReady? children: '' }</>
    )

};

export function SetCurrentCompany( props ){

    // const navigation = useSelector( navigationSlice );
    const dispatch = useDispatch();

    return (
        <SetCurrentCompanyComponent
            { ...props }
            // currentPage = { navigation.currentPage }
            setCurrentCompanyName = { ( val ) => { dispatch( setCurrentCompanyName( val ) ) } }
            setCurrentCompanyAlias = { ( val ) => { dispatch( setCurrentCompanyAlias( val ) ) } }

        />
    );


}
