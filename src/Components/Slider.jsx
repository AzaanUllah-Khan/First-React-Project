import React, { Component } from "react";
import Slider from "react-slick";

const style = {
  height: "200px",
  width: "350px",
  objectFIt: "cover"
}

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={"https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg"} style={style}/>
          </div>
          <div>
            <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg"} style={style}/>
          </div>
          <div>
            <img src={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"} style={style}/>

          </div>
          <div>
            <img src={"https://w0.peakpx.com/wallpaper/265/481/HD-wallpaper-nature.jpg"} style={style}/>
          </div>
          <div>
            <img src={"https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"} style={style}/>
            
          </div>
          <div>
            <img src={"https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8="} style={style}/>
          </div>
        </Slider>
      </div>
    );
  }
}