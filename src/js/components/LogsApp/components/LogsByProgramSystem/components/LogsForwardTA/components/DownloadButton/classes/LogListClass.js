
import { MovieClass } from './MovieClass.js';
import { TitleClass } from './TitleClass.js';
import { FileDateClass } from './FileDateClass.js';

import { TimeClass } from './../../../../../../../../../classes/TimeClass.js';

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

        this.total_time_ms = 0;

        this.RunProcessing = this.RunProcessing.bind(this);
        this.SetList = this.SetList.bind(this);
        this.GetResult = this.GetResult.bind(this);
        this.GetFileDate = this.GetFileDate.bind(this);

        this.GetFileDurationTime = this.GetFileDurationTime.bind(this);
        this.AddToListItemTypeEmpty = this.AddToListItemTypeEmpty.bind(this);


        

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

        this.AddToListItemTypeEmpty();

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
            let { segmentRealDuration } = arrMovies[ i ].GetDataAsObject();
            this.total_time_ms = this.total_time_ms + segmentRealDuration.ms;
            this.list.push( arrMovies[ i ].GetDataAsObject() );
        };

    }

    AddToListItemTypeEmpty(){

        let list_2 = [];

        for( let i = 0; i < this.list.length; i++ ){
            if( ( i + 1 ) < this.list.length ){
                let start_time_ms = this.list[ i ].startTime.ms;
                let duration_ms = this.list[ i ].segmentRealDuration.ms;
                let next_start_time_ms = this.list[ i + 1 ].startTime.ms;

                if( (start_time_ms + duration_ms) < next_start_time_ms ){


                    // console.dir({
                    //     start_time_ms, duration_ms
                    // });

                    let StartTime = new TimeClass( start_time_ms + duration_ms );
                    let startTime = StartTime.GetDataAsObject()

                    let Duration = new TimeClass( next_start_time_ms - startTime.ms );
                    let duration = Duration.GetDataAsObject();
                    
                    list_2.push( this.list[ i ] );

                    if( duration.ms > 999 ){
                        list_2.push({
                            type: 'empty',
                            date: { ...this.list[ i ].date },
                            startTime: startTime,
                            timePoint: startTime.ms,
                            duration,
                        });
                    };


                    // console.dir( 'empty' );
                    // console.dir( {
                    //     type: 'empty',
                    //     date: { ...this.list[ i ].date },
                    //     startTime: startTime,
                    //     timePoint: startTime.ms,
                    //     duration,
                    // } );
                    // list_2.push( this.list[ i ] );

                    
                }else{
                    list_2.push( this.list[ i ] );
                    

                };

            }else{ // последний
                list_2.push( this.list[ i ] );

            };
            

        };

        // console.dir( 'this.list' );
        // console.dir( this.list );
        
        // console.dir( 'list_2' );
        // console.dir( list_2 );

        this.list = list_2;


    }

    GetResult(){
        return this.list;
    }

    GetFileDate(){
        return this.FileDate.GetDataAsObject();
    }

    GetFileDurationTime(){
        let DurationTime = new TimeClass( this.total_time_ms );
        return DurationTime.GetDataAsObject();

    }



}