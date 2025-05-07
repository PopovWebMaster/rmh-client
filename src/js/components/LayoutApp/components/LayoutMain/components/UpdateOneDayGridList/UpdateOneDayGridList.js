
import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// import './UpdateOneDayGridList.scss';

import { selectorData as layoutSlice, setGridOneDayList } from './../../../../../../redux/layoutSlice.js';

import { get_grid_one_day_list } from './vendors/get_grid_one_day_list.js';

const UpdateOneDayGridListComponent = ( props ) => {

    let {
        children,
        gridCurrentDay,
        gridDayEventsList,
        setGridOneDayList,

    } = props;

    useEffect( () => {
        setGridOneDayList( get_grid_one_day_list( gridDayEventsList[ gridCurrentDay ] ) );
    }, [
        gridCurrentDay,
        gridDayEventsList
    ] );

    return (<>{ children }</>)

};

export function UpdateOneDayGridList( props ){

    const layout = useSelector( layoutSlice );
    const dispatch = useDispatch();

    return (
        <UpdateOneDayGridListComponent
            { ...props }
            gridCurrentDay = { layout.gridCurrentDay }
            gridDayEventsList = { layout.gridDayEventsList }

            setGridOneDayList = { ( arr ) => { dispatch( setGridOneDayList( arr ) ) } }

        />
    );


}
