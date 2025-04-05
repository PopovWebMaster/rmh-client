
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

        this.list = [];

        this.Movie =    new MovieClass();
        this.Title =    new TitleClass();
        this.FileDate = new FileDateClass();

        this.RunProcessing = this.RunProcessing.bind(this);
        this.SetList = this.SetList.bind(this);
        this.GetResult = this.GetResult.bind(this);


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

        this.SetList( this.Movie.GetList(), this.Title.GetList() );

        this.FileDate.CreateLogFileDate();

    }

    SetList( movie_arr, grafics_arr ){
        let arr = [ ...movie_arr, ...grafics_arr ];
        let sortArr = arr.sort((a, b) => {
            if( a.TimePoint > b.TimePoint ){
                return 1;
            }else if( a.TimePoint < b.TimePoint ){
                return -1;
            }else{
                if( a.Type === 'movie' ){
                    return -1;
                }else{
                    return 1;
                }
            };
        });

        let arrMovies = [];

        for( let i = 0; i < sortArr.length; i++ ){
            if( sortArr[ i ].Type === 'movie' ){
                arrMovies.push( sortArr[ i ] );
            }else{
                arrMovies[ arrMovies.length - 1 ].AddGraphics( sortArr[ i ] );
            };
        };

        for( let i = 0; i < arrMovies.length; i++ ){
            this.list.push( arrMovies[ i ].GetDataAsObject() );
        };

    }

    GetResult(){
        return this.list;
    }



}