(this["webpackJsonpproduct-page-app"]=this["webpackJsonpproduct-page-app"]||[]).push([[0],[,,,,,,,function(e,t,i){e.exports={thumbnail:"thumbnail_thumbnail__2--8P",thumbnail_selected:"thumbnail_thumbnail_selected__2FuIV"}},,function(e,t,i){e.exports={image:"image_image__1BsHw"}},function(e,t,i){e.exports={timeDisplay:"clock_timeDisplay__2dH2a"}},,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var n=i(0),a=i(1),c=i.n(a),r=i(8),s=i.n(r),l=(i(16),i(2)),o=i(3),m=i(5),u=i(4),h=i.p+"static/media/amazon.ad9462dd.png",d=(i(17),{title:"FitBit 19 - The Smartest Watch",description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.",colorOptions:[{styleName:"Black Strap",imageUrl:"https://imgur.com/iOeUBV7.png"},{styleName:"Red Strap",imageUrl:"https://imgur.com/PTgQlim.png"},{styleName:"Blue Strap",imageUrl:"https://imgur.com/Mplj1YR.png"},{styleName:"Purple Strap",imageUrl:"https://imgur.com/xSIK4M8.png"}],featureList:["Time","Heart Rate"]});Object.freeze(d);var j=d,p=i(7),b=i.n(p),g=function(e){return Object(n.jsx)("div",{className:e.curr===e.src?b.a.thumbnail_selected:b.a.thumbnail,children:Object(n.jsx)("img",{src:e.src,alt:e.alt,onClick:e.onClick})})},O=i(9),f=i.n(O),x=function(e){return Object(n.jsx)("div",{className:f.a.image,children:Object(n.jsx)("img",{src:e.src,alt:e.alt})})},v=i(10),k=i.n(v),C=function(e){Object(m.a)(i,e);var t=Object(u.a)(i);function i(){var e;return Object(l.a)(this,i),(e=t.call(this)).state={time:new Date},e}return Object(o.a)(i,[{key:"componentDidMount",value:function(){var e=this;this.update=setInterval((function(){e.setState({time:new Date})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.update)}},{key:"render",value:function(){var e=this.state.time;return Object(n.jsx)("div",{className:k.a.timeDisplay,children:Object(n.jsx)("h1",{children:e.toLocaleTimeString()})})}}]),i}(a.Component),N=function(e){Object(m.a)(i,e);var t=Object(u.a)(i);function i(){var e;Object(l.a)(this,i);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={colourOptions:j.colorOptions,isTimeClicked:!1,isHeartRateClicked:!1,image:"https://imgur.com/iOeUBV7.png"},e.onClickShowTime=function(t){e.setState({isTimeClicked:!0,isHeartRateClicked:!1})},e.onClickShowHeartRate=function(t){e.setState({isTimeClicked:!1,isHeartRateClicked:!0})},e.onThumbnailImgClick=function(t){e.setState({image:t})},e}return Object(o.a)(i,[{key:"componentWillUnmount",value:function(){clearInterval(this.update)}},{key:"render",value:function(){var e,t=this,i=void 0!==(e=this.state.colourOptions)&&null!==e&&e.length>0?this.state.colourOptions.map((function(e,i){return Object(n.jsx)(g,{src:e.imageUrl,alt:e.styleName,onClick:function(){return t.onThumbnailImgClick(e.imageUrl)},curr:t.state.image},i)})):[],a=Object(n.jsx)(x,{src:this.state.image}),c=this.state.isTimeClicked?"blackButton":"whiteButton",r=this.state.isHeartRateClicked?"blackButton":"whiteButton";return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("div",{className:"Navigation-Bar",children:Object(n.jsx)("img",{src:h})}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"left-inner-container",children:[this.state.isTimeClicked?Object(n.jsx)(C,{}):"",a]}),Object(n.jsxs)("div",{className:"right-inner-container",children:[Object(n.jsxs)("div",{className:"right-inner-colour",children:[Object(n.jsx)("h1",{children:j.title}),Object(n.jsx)("p",{children:j.description}),Object(n.jsx)("br",{}),Object(n.jsx)("h2",{children:"Select Colour"}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{className:"thumbnail-wrapper",children:i})]}),Object(n.jsxs)("div",{className:"right-inner-feature",children:[Object(n.jsx)("h2",{children:"Features"}),Object(n.jsx)("button",{className:c,onClick:function(){return t.onClickShowTime(t)},children:"Time"}),Object(n.jsx)("button",{className:r,onClick:function(){return t.onClickShowHeartRate(t)},children:"Heart Rate"})]})]})]})]})}}]),i}(a.Component),S=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,19)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;i(e),n(e),a(e),c(e),r(e)}))};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(N,{})}),document.getElementById("root")),S()}],[[18,1,2]]]);
//# sourceMappingURL=main.78aabe79.chunk.js.map