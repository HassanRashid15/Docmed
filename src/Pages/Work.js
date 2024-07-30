import React from 'react';
import work1 from "./../Assets/Images/work1.png";
import PortfolioGallery from './PortfolioGallery';
function work() {
  return (
    <div>
      <h1 class="text-center" >Portfolio</h1>

      <div class="container">
  <div class="row">
    <div class="col-md-4">
      <div class="thumbnail">
        <a href='#' target="_blank">
        <img src={work1}/>
          <div class="caption">
          <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
          
            <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
          </div>
        </a>
      </div>
    </div>
    <div class="col-md-4">
      <div class="thumbnail">
        <a href="/w3images/nature.jpg" target="_blank">
          {/* <img src={nature.jpg */}
          <div class="caption">
            <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
          </div>
        </a>
      </div>
    </div>
    <div class="col-md-4">
      <div class="thumbnail">
        <a href="/w3images/fjords.jpg" target="_blank">
        {/* <img src={nature.jpg}/> */}
          <div class="caption">
            <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
<PortfolioGallery/>
    </div>
  )
}

export default work
