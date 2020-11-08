import React from 'react';
import heartrate from './heartrate.png';
import classes from './heartRate.module.css';

const HeartRate = (props) => {


    return (
        // display heart rate
        <div class={`${classes.img}`}>
            <img class="animate__animated animate__pulse animate__infinite" src={heartrate}></img>
            <h3>78 BPM</h3>
        </div>
    );
}

export default HeartRate;