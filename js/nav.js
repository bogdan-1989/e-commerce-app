const createNav = () => {
let nav = document.querySelector('.navbar');

    nav.innerHTML = ` 
     <div class="nav">
     <a href="./index.html">
<img src="img/dark-logo.png" class="brand-logo" alt="">
</a>
<div class="nav-items">
    <div class="search">
        <input class="search-box" placeholder="search brand, product">
        <a href="./index.html">
        <button class="search-btn">search</button>
        </a>
    </div> 
    <a href="#"><img src="img/user.png" alt=""></a>
    <a href="#"><img src="img/cart.png" alt=""></a>
  </div>
</div>
<ul class="links-container">
 <li class="link-item"><a href="./index.html" class="link">home</a></li>
 <li class="link-item"><a href="./search.html" class="link">women</a></li>
 <li class="link-item"><a href="./searchmen.html" class="link">men</a></li>
 <li class="link-item"><a href="./searchkid.html" class="link">kids</a></li>
 <li class="link-item"><a href="./searchaccessories.html" class="link">accesories</a></li>
 <li class="link-item"><a href="./contact.html" class="link">Contact</a></li>
</ul> 
     `;
 }
 createNav();