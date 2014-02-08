<ul  id="nav-anchors" class="nav-anchors">
  <li><a href="#nav" id="menu-anchor">Menu</a></li>
  <li><a href="#search" id="search-anchor">Search</a></li>
</ul>
<form id="search" action="#" method="post" class="search reveal">
  <fieldset>
    <legend>Search the Site</legend>
    <input type="search" placeholder="Search Store" />
    <input type="submit" value="Search" />
  </fieldset>
</form>
<nav id="nav" class="nav reveal">
  <ul role="navigation">
    <li><a href="#">T-shirts</a></li>
    <li><a href="#">Hoodies</a></li>
    <li><a href="#">Pants</a></li>
  </ul>
</nav>



$(w).resize(function(){ //Update dimensions on resize
  sw = document.documentElement.clientWidth;
  sh = document.documentElement.clientHeight;
  checkMobile();
});
  
//Check if Mobile
function checkMobile() {
  mobile = (sw > breakpoint) ? false : true;

  if (!mobile) { //If Not Mobile
    $('[role="tabpanel"],#nav,#search').show(); //Show full navigation and search
  } else { //Hide 
    if(!$('#nav-anchors a').hasClass('active')) {
      $('#nav,#search').hide(); //Hide full navigation and search
    }
  }
}


/* IMAGE GALLERY */

<div id="product-img" class="product-img">
  <figure class="img-container" id="img-container">
    <img src="images/product_img_1.jpg" alt="Super Ffly T-shirt" />
  </figure>
  <nav>
    <ul>
      <li><a href="images/product_img_1.jpg"><img src="images/product_img_1_thumb.jpg" alt="Super Ffly Men's Shirt" /></a></li>
      <li><a href="images/product_img_2.jpg"><img src="images/product_img_2_thumb.jpg" alt="Super Ffly Women's Shirt" /></a></li>
      <li><a href="images/product_img_3.png"><img src="images/product_img_3_thumb.jpg" alt="Ffly Logo" /></a></li>
    </ul>
  </nav>
</div>