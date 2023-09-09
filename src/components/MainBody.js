import React from "react";
import "../../src/style.css";
import logo from "../images/logo.png";
import news1 from "../images/news1.jpg"
import news2 from "../images/news2.jpg"
import news3 from "../images/news3.jpg"
import news4 from "../images/news4.jpg"
import news5 from "../images/news1.jpg"
import news6 from "../images/news2.jpg"


function Gallery(props){
  return(
    <div class="gallery">
          <img src={props.img} width="600" height="400" />
          <div class="desc">{props.subtitle}</div>
        </div>
  );
}

function MainBody() {
  return (
    <div className="main-div">
      <div className="sub-div">
      
        <Gallery subtitle = "tech news 1" img = {news1}/>
        <Gallery subtitle = "tech news 2" img = {news2}/>
        <Gallery subtitle = "tech news 3" img = {news3}/>
        <Gallery subtitle = "tech news 4" img = {news3}/>
        <Gallery subtitle = "tech news 5" img = {logo}/>
        <Gallery subtitle = "tech news 6" img = {news2}/>
        <Gallery subtitle = "tech news 7" img = {news4}/>
        <Gallery subtitle = "tech news 8" img = {news5}/>
        <Gallery subtitle = "tech news 9" img = {news6}/>
        <Gallery subtitle = "tech news 10" img = {logo}/>
        <Gallery subtitle = "tech news 11" img = {news4}/>
        <Gallery subtitle = "tech news 12" img = {news6}/>
        <Gallery subtitle = "tech news 13" img = {logo}/>
        <Gallery subtitle = "tech news 14" img = {news2}/>
        <Gallery subtitle = "tech news 15" img = {news6}/>

      
      </div>
    </div>
  );
}



export default MainBody;