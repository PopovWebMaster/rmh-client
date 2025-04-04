

export const get_style_for_border_mover = ( params ) => {
    let {
        windowLeftWidth,
        borderMoverWidtnPx,
    } = params;

    let top = 0;

    let header = document.querySelector( '.FTA_SingleServerWindow .FTA_SSWHeader' );
    if( header ){
        let { height } = window.getComputedStyle( header );
        top = height;
    };

    let result = {
        width: borderMoverWidtnPx + 'px',
        left: `calc(${windowLeftWidth}% - ${borderMoverWidtnPx/2}px)`,
        top,
    };

    return result;

}