


export const add_event_mouse_move = ( setDataHandler ) => {

    let curtain = document.getElementById( 'curtain_time' );

    
    curtain.onmousemove = ( e ) => {
        setDataHandler( e.x );

    }

    curtain.onmouseup = () => {
        curtain.onmousemove = null;
        curtain.onmouseup = null;
        curtain.remove();

    }




}