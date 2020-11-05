import React from 'react';
import classes from './thumbnail.module.css';

const Thumbnail = (props) => {


    return (
        // checks if the image has been selected or not
        <div className={props.curr === props.src ? classes.thumbnail_selected : classes.thumbnail}>
            <img src={props.src} alt={props.alt} onClick={props.onClick}/> 
        </div>);
}

export default Thumbnail;