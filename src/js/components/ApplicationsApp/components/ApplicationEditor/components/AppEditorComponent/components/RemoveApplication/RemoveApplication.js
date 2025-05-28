// RemoveApplication


import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './RemoveApplication.scss';

import { selectorData as applicationSlice } from './../../../../../../../../redux/applicationSlice.js';
import { selectorData as navigationSlice }  from './../../../../../../../../redux/navigationSlice.js';
import { setSpinnerIsActive }               from './../../../../../../../../redux/spinnerSlice.js';

import { AlertWindowContainer } from './../../../../../../../AlertWindowContainer/AlertWindowContainer.js';

import { send_request_to_server } from './../../../../../../../../helpers/send_request_to_server.js';


const RemoveApplicationComponent = ( props ) => {

    let {
        currentApplicationId,
        currentPage,
        setSpinnerIsActive,
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    const click = () => {
        setIsOpen( true );
    }
        


    const remove = () => {

        setIsOpen( false );
        setSpinnerIsActive( true );
        
        send_request_to_server({
            route: `${currentPage}/remove-application`,
            data: { 
                applicationId: currentApplicationId,
            },

            callback: ( response ) => {
                console.dir( 'response' );
                console.dir( response );

                if( response.ok ){
                    setSpinnerIsActive( false );
                    

                    setIsOpen( false );
                };

            },
        });


    }

    return (
        <div className = 'removeApplication'>

            <AlertWindowContainer
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
                width =     '27em'
                height =    '11em'
                title = 'Удалить заявку'
            >
                <div className = 'App_remove'>
                    <p>Пожалуйста, подтвердите удаление заявки</p>
                    <p>
                        <span 
                            className = 'App_remove_btn'
                            onClick = { remove }
                        >Удалить</span>
                        <span 
                            className = 'App_no_remove_btn'
                            onClick = { () => { setIsOpen( false ) } }
                        >Отмена</span>
                    </p>
                </div>

            </AlertWindowContainer>
            
            <span
                className = 'A_removeAppBtn'
                onClick = { click }
            >Удалить заявку</span>
           

        </div>
    )

};

export function RemoveApplication( props ){

    const application = useSelector( applicationSlice );
    const navigation = useSelector( navigationSlice );
    const dispatch = useDispatch();

    return (
        <RemoveApplicationComponent
            { ...props }

            currentApplicationId = { application.currentApplicationId }

            currentPage = { navigation.currentPage }
            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
