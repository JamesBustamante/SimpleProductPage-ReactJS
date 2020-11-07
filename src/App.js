import amazon from './amazon.png';
import React, { Component } from 'react';
import './App.css';
import ProductData from './ProductData';
import { isArrayEmpty } from './Utils';
import Thumbnail from './Thumbnail';
import Image from './Image';
import Clock from './Clock';

class App extends Component {

  state = {
    colourOptions: ProductData.colorOptions,
    isTimeClicked: false,
    isHeartRateClicked: false,
    image: "https://imgur.com/iOeUBV7.png"
  }

  
 // delete the interval just before component is removed
componentWillUnmount() {
    clearInterval(this.update);
}

  onClickShowTime = (prop) => {
    this.setState({ isTimeClicked: true,isHeartRateClicked: false});

  };

  onClickShowHeartRate = (prop) => {
    this.setState({ isTimeClicked: false,isHeartRateClicked: true});
  };

  onThumbnailImgClick = (src) => {
    this.setState({ image: src });
        };

  render() {

      const thumbnails = isArrayEmpty(this.state.colourOptions) ? [] : this.state.colourOptions.map((item, pos) => {
        return (
          <Thumbnail src={item.imageUrl} key={pos} alt={item.styleName} onClick={() => this.onThumbnailImgClick(item.imageUrl)} curr={this.state.image} />
        )
      });

      const img = <Image src={this.state.image} />;
    

      let timeButton = this.state.isTimeClicked ? "blackButton" : "whiteButton";
      let heartRateButton = this.state.isHeartRateClicked ? "blackButton" : "whiteButton";


      return (
        <div className="App">
          <div className="Navigation-Bar"><img src={amazon}></img></div>
          <br></br>
          <div className="container">
            <div className="left-inner-container">
              {this.state.isTimeClicked ? <Clock /> : ""}
              {img}
            </div>
            <div className="right-inner-container">
              <div className="right-inner-colour">
                <h1>{ProductData.title}</h1>
                <p>{ProductData.description}</p>
                <br></br>
                <h2>Select Colour</h2>
                <br></br>
                <div className="thumbnail-wrapper">
                  {thumbnails}
                </div>
              </div>
              <div className="right-inner-feature">
                <h2>Features</h2>
                <button className={timeButton}
                  onClick={() => this.onClickShowTime(this)}>
                  Time
                  </button>
                <button className={heartRateButton}
                  onClick={() => this.onClickShowHeartRate(this)}>
                  Heart Rate
                  </button>
              </div>
            </div>
          </div>
        </div>
      )
    };
  }

export default App;
