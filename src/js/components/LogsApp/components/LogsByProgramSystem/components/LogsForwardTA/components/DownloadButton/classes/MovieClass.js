

import { EventClass } from './../../../../../../../../../classes/EventClass.js';

export class MovieClass{
    constructor(){

        this.list = [];

        this.AddItem = this.AddItem.bind(this);
        this.GetList = this.GetList.bind(this);

    }
    
    AddItem( item ){
        this.list.push( new EventClass( item ) );
    }

    GetList(){
        return this.list;
    }



}