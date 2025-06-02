// ItemNum


import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemNum.scss';

import { selectorData as applicationSlice, setApplicationList } from './../../../../../../../../redux/applicationSlice.js';
import { setSpinnerIsActive }               from './../../../../../../../../redux/spinnerSlice.js';
import { selectorData as navigationSlice }  from './../../../../../../../../redux/navigationSlice.js';

const ItemNumComponent = ( props ) => {

    let {
        appNum,
        setAppNum,

        appNumIsError,
        setAppNumIsError,

        applicationList,

    } = props;

    let [ numValue,    setNumValue ] = useState( appNum );
    let [ errorText,    setErrorText ] = useState( '' );

    useEffect( () => {
        setNumValue( appNum );
    }, [ appNum ] );

    const change_num = ( e ) => {
        let val = e.target.value;
        if( val === '' ){
            setNumValue( val );
            appNumIsError( false );
            setAppNumIsError( '' );
        }else{
            if( Number( val ) >= 1 ){
                setNumValue( val );
                appNumIsError( false );
                setAppNumIsError( '' );
            };
        }


    };


    const acceptNum = () => {
        
        if( numValue.trim() === '' ){
            setAppNum( '' );
        }else{
            let num = Number( numValue );
            let isRepeat = false;

            for( let i = 0; i < applicationList.length; i++ ){
                if( applicationList[ i ].num === num ){
                    isRepeat = true;
                    break;
                };
            };

            if( isRepeat ){
                appNumIsError( true );
                setErrorText( 'Заявка с таким номером уже существует. Повторений в номерах быть не должно' );
            }else{
                setAppNum( num );
            };

        };
    };

    const enter = ( e ) => {
        if( e.which === 13 ){
            acceptNum()
        };
    };

    const blur = () => {
        acceptNum();
    }
    
    return (
        <div className = 'ANAppl_num'>
            <h4>Номер заявки: </h4>
            <input 
                type = 'number'
                value = { numValue }
                onChange = { change_num }
                onKeyDown = { enter }
                onBlur = { blur }
            />

            { appNumIsError? (
                <p className = 'error'>{ errorText }</p>
            ): '' }
        </div>


    )

};

export function ItemNum( props ){

    const application = useSelector( applicationSlice );
    const navigation = useSelector( navigationSlice );
    const dispatch = useDispatch();

    return (
        <ItemNumComponent
            { ...props }

            applicationList = { application.applicationList }
            currentPage = { navigation.currentPage }

            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }
            setApplicationList = { ( val ) => { dispatch( setApplicationList( val ) ) } }


        />
    );


}
