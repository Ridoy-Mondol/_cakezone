import {Link,NavLink} from "react-router-dom";
const Footer = () => {
    return (
      <>
      <div className="position-relative">
        <div className="container-fluid footer-container">
        <div className="footer-border">
        <div className="container-fluid footer-div">
        <div>
        <div className='logo-outer foot-outer'>
       <div className='logo-inner foot-inner'>
       <div className="footer-logo">
       <i class="fa fa-birthday-cake cake-icon footer-card-icon"></i>
       <span className='logo footer-card-logo'>CAKEZONE</span>
       </div>
       <span className="footer-text">
           Thank you for visiting CakeZone! Enjoy our delightful treats and savor the sweetness. Until next time – see you again for more delicious moments!
       </span>
       </div>
       </div>
          </div>

          <div className="margin-tab">
            <h4 className="footer-mergin overflow-y-hidden">GET IN TOUCH</h4>
            <div className="mt-lg-4">
            <div className="d-flex text-decoration-none">
            <i class="fa-solid fa-location-dot footer-icon footer-icon-2"></i>
            <span className="social-media">
            Address : Rajshahi,Bangladesh
            </span>
            </div>
            <div className="d-flex text-decoration-none">
            <i class="fa-brands fa-whatsapp footer-icon footer-icon-2"></i>
            <span className="social-media">
            WhatsApp : +8801319118383
            </span>
            </div>
            <div className="d-flex text-decoration-none">
            <i class="fa-solid fa-envelope footer-icon footer-icon-2"></i>
            <span className="social-media">
            Email : ridoymondol140@gmail.com
            </span>
            </div>
            </div>

            <div className="footicon-flex">
                 <div className='logo-outer empicon-outer'>
                 <div className='logo-inner empicon-inner'>
                 <i class="fab fa-twitter"></i>
                 </div>
                 </div>

                 <Link to="https://web.facebook.com/profile.php?id=100015131225530" className='logo-outer empicon-outer text-decoration-none'>
                 <div className='logo-inner empicon-inner'>
                 <i class="fab fa-facebook-f"></i>
                 </div>
                 </Link>

                 <Link to="https://www.linkedin.com/in/md-ridoy-mondol-885555297/" className='logo-outer empicon-outer text-decoration-none'>
                 <div className='logo-inner empicon-inner'>
                 <i class="fab fa-linkedin-in"></i>
                 </div>
                 </Link>
                 
                 </div>

          </div>

          <div className="link-div margin-top">
            <h4 className="footer-mergin overflow-y-hidden">QUICK LINKS</h4>
            <div className="margin-list">
            <li className="footer-list overflow-y-hidden">
            <i class="fa-solid fa-arrow-right"></i>
            <NavLink exact activeClassName="active-page" className="foot-link" aria-current="page" to="/_cakezone/">
            Home
            </NavLink>
            </li>
            <li className="footer-list">
            <i class="fa-solid fa-arrow-right"></i>
            <NavLink exact activeClassName="active-page" className="foot-link" aria-current="page" to="/_cakezone/about">
            About Us
            </NavLink>
            </li>
            <li className="footer-list">
            <i class="fa-solid fa-arrow-right"></i>
            <NavLink exact activeClassName="active-page" className="foot-link" aria-current="page" to="/_cakezone/service">
            Our Services
            </NavLink>
            </li>
            <li className="footer-list">
            <i class="fa-solid fa-arrow-right"></i>
            <NavLink exact activeClassName="active-page" className="foot-link" aria-current="page" to="/_cakezone/chefs">
            Meet The Team
            </NavLink>
            </li>
            <li className="footer-list">
            <i class="fa-solid fa-arrow-right"></i>
            <NavLink exact activeClassName="active-page" className="foot-link" aria-current="page" to="/_cakezone/menu">
            Menu & Pricing
            </NavLink>
            </li>
            <li className="footer-list">
            <i class="fa-solid fa-arrow-right"></i>
            <NavLink exact activeClassName="active-page" className="foot-link" aria-current="page" to="/_cakezone/contact">
            Contact Us
            </NavLink>
            </li>
            </div>
          </div>

          <div className="margin-tab margin-top">
            <h4 className="footer-mergin overflow-y-hidden">NEWSLETTER</h4>
            <div className="mt-lg-4 newsletter">
            Sign up for our newsletter to get the latest cake news and exclusive offers delivered straight to your inbox
            <div className="d-flex">
            <input type = "email" className="footer-input" placeholder="Your Email"/>
            <button type="button" className="footer-btn">Sign Up</button>
            </div>
            </div>
          </div>
          
        </div>
        </div>

        </div>
        </div>

        <div className="d-flex justify-content-center footer-end">
          <span>&copy; 2023 CAKEZONE All Rights Reserved By Ridoy Mondol </span>
        </div>

        </>
    );
}
export default Footer;