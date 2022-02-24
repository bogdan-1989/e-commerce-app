const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
             <a href="./index.html">
             <img src="img/light-logo.png" class="logo" alt="">
             </a>
             <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">men</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">casuals</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">sports</a></li>
                    <li><a href="#" class="footer-link">watch</a></li> 
                </ul>
                <ul class="category">
                    <li class="category-title">women</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">casuals</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">sports</a></li>
                    <li><a href="#" class="footer-link">watch</a></li>
                </ul>
             </div>
             </div>
         <p class="footer-title">about company</p>
             <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor consectetur enim non pharetra.
                  Phasellus a pellentesque mi. Morbi a mauris odio. Sed finibus mi at lorem malesuada, eleifend facilisis mauris luctus.
                  Aliquam erat volutpat. Aliquam sit amet dui posuere, aliquet nibh a, interdum purus. Morbi gravida augue in diam pretium convallis quis in ligula. 
                  In hendrerit turpis tempus nisi vestibulum, in facilisis tellus pellentesque.
                  Quisque porta magna dolor, vel accumsan mi dignissim at. Quisque neque mauris, 
                  eleifend fermentum mollis et, tincidunt vitae est. Cras finibus eget leo in imperdiet. Ut consequat mauris urna, sit amet commodo diam laoreet eu.
                  Proin vitae ante pretium augue blandit euismod. Maecenas porttitor, metus eget condimentum vulputate, risus orci hendrerit ex, eu malesuada urna enim at quam.
                  Nunc id elementum leo.</p>
         <p class="info">Support emails - help@cloting.com, customersuport@cloting.com</p>
         <p class="info">Telephone - 180 00 00 001, 180 00 00 02</p>
         <div class="footer-social-container">
             <div>
                 <a href="#" class="social-link">Terms & Services</a>
                 <a href="#" class="social-link">Privacy page</a>
             </div>
             <div>
                <a href="#" class="social-link">Instagram</a>
                <a href="#" class="social-link">Facebook</a>
                <a href="#" class="social-link">Twitter</a>
            </div>
         </div>
         <p class="footer-credit">Cloting, Best apperels online store</p>
    `;
}

createFooter();