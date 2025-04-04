
import { MovieClass } from './MovieClass.js';
import { TitleClass } from './TitleClass.js';
import { FileDateClass } from './FileDateClass.js';

const TYPE = {
    MOVIE: 'Movie',
    TITLE_OBJECT: 'TitleObject',
};

export class LogListClass{
    constructor( log_list ){

        this.log_list = log_list;

        this.Movie =    new MovieClass();
        this.Title =    new TitleClass();
        this.FileDate = new FileDateClass();

        this.RunProcessing = this.RunProcessing.bind(this);


        this.RunProcessing();
    }

    RunProcessing(){

        for( let i = 0; i < this.log_list.length; i++ ){

            let { type } = this.log_list[i].attributes;

            if( type === TYPE.MOVIE ){
                this.Movie.AddItem( this.log_list[i] );
            }else{
                this.Title.AddItem( this.log_list[i] );
            };

            this.FileDate.AddItem( this.log_list[i] );

        };

        this.Movie.CreateList();
        this.Title.CreateList();
        this.FileDate.CreateLogFileDate();

    }
}