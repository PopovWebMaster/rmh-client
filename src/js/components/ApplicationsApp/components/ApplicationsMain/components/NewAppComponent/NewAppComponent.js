// NewAppComponent


import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './NewAppComponent.scss';

import { selectorData as applicationSlice, setApplicationList } from './../../../../../../redux/applicationSlice.js';
import { setSpinnerIsActive }               from './../../../../../../redux/spinnerSlice.js';
import { selectorData as navigationSlice }  from './../../../../../../redux/navigationSlice.js';

import { APPLICATION_TYPE } from './../../../../../../config/application.js';
// import { chack_new_name_for_repeat } from './../../vendors/chack_new_name_for_repeat.js';

// import { send_request_to_server } from './../../../../../../../../../../.../helpers/send_request_to_server.js';
import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';

import { ItemName } from './components/ItemName/ItemName.js';
import { ItemNum } from './components/ItemNum/ItemNum.js';


const NewAppComponentComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,

        currentPage,
        setSpinnerIsActive,
        setApplicationList,
    } = props;

    // let errorText = 'Заявка с таким названием уже существует. Пожалуйста, придумайте уникальнои имя для заявки.';


    let [ appName,          setAppName ] = useState( '' );
    let [ appNameIsError,   setAppNameIsError ] = useState( false );

    let [ appNum,          setAppNum ] = useState( '' );
    let [ appNumIsError,   setAppNumIsError ] = useState( false );

    useEffect( () => {
        if( isOpen ){
            setAppName( '' );
            setAppNameIsError( false );

            setAppNum( '' );
            setAppNumIsError( false );
        };

    }, [ isOpen ]);





    // let [ appNameError,     setAppNameError ] = useState( false );
    // let [ appNameErrorText, setAppNameErrorText ] = useState( '' );




    // let [ type, setType ] = useState( APPLICATION_TYPE.RELEASE );
    // let [ isReady, setIsReady ] = useState( false );
    // let [ isError, setIsError ] = useState( false );
    // let [ isErrorText, setIsErrorText ] = useState( '' );



    // useEffect( () => {
    //     if( isOpen ){
    //     }else{
    //         setName( '' );
    //         setType( APPLICATION_TYPE.RELEASE );
    //         setIsError( false );
    //         setIsErrorText( '' );
    //     };
    // }, [ isOpen ] );

    // useEffect( () => {
    //     if( name.trim() === '' ){
    //         setIsReady( false );
    //     }else{
    //         setIsReady( true );
    //     };
    // }, [ name ] );



    // const change_name = ( e ) => {
    //     let val = e.target.value;
    //     setName( val );
    //     setIsError( false );
    //     setIsErrorText( '' );

    // }

    // const clickAdd = () => {
    //     if( isReady ){
    //         let name_trim = name.trim();
    //         // if( chack_new_name_for_repeat( name_trim ) ){
    //         //     setIsError( true );
    //         //     setIsErrorText( errorText );
    //         // }else{
    //             setSpinnerIsActive( true );
    //             send_request_to_server({
    //                 route: `${currentPage}/add-new-application`,
    //                 data: { 
    //                     name,
    //                     type,
    //                 },
    
    //                 callback: ( response ) => {
    //                     // console.dir( 'response' );
    //                     // console.dir( response );
    
    //                     if( response.ok ){
    //                         setSpinnerIsActive( false );
    //                         // setApplicationList( response.list );
    //                         setIsOpen( false );
    //                     };
    
    //                 },
    //             });
    //         // };
    //     };
    // }



    
    return (
        <div className = 'ANApplContainer'>

            <ItemName 
                appName =           { appName }
                appNameIsError =    { appNameIsError }
                setAppNameIsError = { setAppNameIsError }
                setAppName =        { setAppName }

            />

            <ItemNum 
                appNum =            { appNum }
                setAppNum =         { setAppNum }
                appNumIsError =     { appNumIsError }
                setAppNumIsError =  { setAppNumIsError }
            />


            {/* <div className = 'ANAppl_name'>
                <h4>Название заявки:</h4>
                <input 
                    type = 'text'
                    value = { name }
                    onChange = { change_name }
                />

                { isError? (
                    <p className = 'error'>{ isErrorText }</p>
                ): '' }
                
            </div> */}

            {/* <div className = 'ANAppl_type'>
                <h4>Тип заявки:</h4>

                <div className = 'ANAppl_type_btn_wrap'>

                    <span 
                        className = { type === APPLICATION_TYPE.RELEASE? 'isActive': '' }
                        onClick = { () => { setType( APPLICATION_TYPE.RELEASE ) } }
                    >Выпуск</span>

                    <span 
                        className = { type === APPLICATION_TYPE.SERIES? 'isActive': '' }
                        onClick = { () => { setType( APPLICATION_TYPE.SERIES ) } }
                    >Сериал</span>

                </div>
                
            </div>

            <div className = 'ANAppl_CreateButton_wrap'>
                <div 
                    className = { `ANAppl_CreateButton ${isReady? 'isActive': ''}` }
                    onClick = { clickAdd }
                >
                    <span className = 'icon-plus'></span>
                    <span className = 'value'>Добавить</span>
                </div>

            </div> */}


        </div>
    )

};

export function NewAppComponent( props ){

    const application = useSelector( applicationSlice );
    const navigation = useSelector( navigationSlice );
    const dispatch = useDispatch();

    return (
        <NewAppComponentComponent
            { ...props }
            currentPage = { navigation.currentPage }

            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setApplicationList = { ( val ) => { dispatch( setApplicationList( val ) ) } }


        />
    );


}
