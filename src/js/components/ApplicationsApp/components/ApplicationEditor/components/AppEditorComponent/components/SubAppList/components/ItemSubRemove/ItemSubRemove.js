
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemSubRemove.scss';

import { selectorData as applicationSlice } from './../../../../../../../../../../redux/applicationSlice.js';
import { selectorData as navigationSlice }  from './../../../../../../../../../../redux/navigationSlice.js';
import { setSpinnerIsActive }               from './../../../../../../../../../../redux/spinnerSlice.js';

import { AlertWindowContainer } from './../../../../../../../../../AlertWindowContainer/AlertWindowContainer.js';


const ItemSubRemoveComponent = ( props ) => {

    let {
        id,
        application_id,

        currentPage,
        setSpinnerIsActive,
        
    } = props;

    let [ isOpen, setIsOpen] = useState( false );


     const remove_event = () => {
            setIsOpen( false );
            setSpinnerIsActive( true );
            // send_request_to_server({
            //     route: `${currentPage}/remove-grid-event`,
            //     data: { 
            //         gridEventId: id,
            //     },
    
            //     callback: ( response ) => {
            //         console.dir( 'response' );
            //         console.dir( response );
    
            //         if( response.ok ){
            //             setSpinnerIsActive( false );
            //             setGridDayEventsList( response.list );
            //         };
    
            //     },
            // });
        }


    
    
    return (
        <div className = 'SA_ItemSubRemove'>
           <AlertWindowContainer
                isOpen = { isOpen }
                setIsOpen = { setIsOpen }
                width = '25em'
                height = '10em'
            >
                <div className = 'SA_ItemSubRemove_remove'>
                    <p>Будет удалено всё, что связано с этим выпуском. Пожалуйста, подтвердите удаление.</p>
                    <p>
                        <span 
                            className = 'SA_ItemSubRemove_remove_btn'
                            onClick = { remove_event}
                        >Удалить</span>
                        <span 
                            className = 'SA_ItemSubRemove_no_remove_btn'
                            onClick = { () => { setIsOpen( false ) } }
                        >Отмена</span>
                    </p>
                </div>
    
            </AlertWindowContainer>

            <div 
                className = 'SA_remove_btn'
                onClick = { () => { setIsOpen( true ) } }
            >
                <span className = 'icon-cancel-2'></span>
            </div>

        </div>
    )

};

export function ItemSubRemove( props ){

    const application = useSelector( applicationSlice );
    const navigation = useSelector( navigationSlice );
    const dispatch = useDispatch();

    return (
        <ItemSubRemoveComponent
            { ...props }
            currentPage = { navigation.currentPage }
            setSpinnerIsActive = { ( val ) => { dispatch( setSpinnerIsActive( val ) ) } }



        />
    );


}
