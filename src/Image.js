import React from 'react';
import classes from './image.module.css';

const Image = (props) => {

    // onLikeBtnClick = () => { 
    //     this.setState((prevState, prop) => {
    //         return { likeCount: prevState.likeCount + 1 };
    //     });
    // }
    return (
        <div className={classes.image}>
            <img src={props.src} alt={props.alt}/> 
        </div>);
}

export default Image;