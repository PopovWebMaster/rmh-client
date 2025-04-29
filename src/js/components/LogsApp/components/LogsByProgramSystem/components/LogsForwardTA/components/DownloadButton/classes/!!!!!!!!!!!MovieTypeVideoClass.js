

import { EventTypeVideoClass } from './../../../../../../../../../classes/EventTypeVideoClass.js';

export class MovieTypeVideoClass{
    constructor(){

        this.list = [];

        this.AddItem = this.AddItem.bind(this);
        this.GetList = this.GetList.bind(this);

    }
    
    AddItem( item ){
        this.list.push( new EventTypeVideoClass( item ) );
    }

    GetList(){
        return this.list;
    }



}