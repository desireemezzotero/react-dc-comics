import digital from '../assets/img/buy-comics-digital-comics.png';
import merchandise from '../assets/img/buy-comics-merchandise.png';
import shop from '../assets/img/buy-comics-shop-locator.png';
import subscriptions from '../assets/img/buy-comics-subscriptions.png';
import pay from '../assets/img/buy-dc-power-visa.svg';
import imgBg from '../assets/img/dc-logo-bg.png';
import facebook from '../assets/img/footer-facebook.png';
import twitter from '../assets/img/footer-twitter.png';
import youTube from '../assets/img/footer-youtube.png';
import pinterest from '../assets/img/footer-pinterest.png';
import periscope from '../assets/img/footer-periscope.png';

const Footer = () => {
  return (
    <footer>
      <div className="container-blue">
        <div className="container h-100">
          <ul className="footer-icon">
            <li>
              <img className="image" src={digital} alt="digital" />
              <a href="#">DIGITAL COMICS</a>
            </li>

            <li>
              <img className="image" src={merchandise} alt="digital" />
              <a href="#">DC MERCHANDISE</a>
            </li>

            <li>
              <img className="image" src={subscriptions} alt="digital" />
              <a href="#">SUBSCRIPTION</a>
            </li>

            <li>
              <img className="image" src={shop} alt="digital" />
              <a href="#">COMIC SHOP LOCATOR</a>
            </li>

            <li>
              <img className="image" src={pay} alt="digital" />
              <a href="#">DC POWER VISA</a>
            </li>
          </ul>
        </div> {/* div container */}
      </div> {/* div blue */}

      <div className='container-image'>
        <div>
          <img className='img-bg' src={imgBg} alt="" />
        </div>
        <div className='container d-flex'>
          <div className='text-footer p-4'>
            <h6>
              DC COMICS
            </h6>
           <ul>
             <li> <a href="#"> Characters </a> </li>
             <li> <a href="#"> Comics </a> </li>
             <li> <a href="#"> Movies </a> </li>
             <li> <a href="#"> TV </a> </li>
             <li> <a href="#"> Games </a> </li>
             <li> <a href="#"> Videos </a> </li>
             <li> <a href="#"> News </a> </li>
           </ul>

           <h6>
             SHOP
           </h6>
           <ul>
            <li> <a href="#"> Shop DC </a> </li>
            <li> <a href="#"> Shop DC Collectibles </a> </li>
           </ul>
         </div>

         <div className='text-footer p-4'>
            <h6>
              DC
            </h6>
           <ul>
             <li> <a href="#"> Terms Of Use </a> </li>
             <li> <a href="#"> Privacy policy (New) </a> </li>
             <li> <a href="#"> Ad Choices </a> </li>
             <li> <a href="#"> Advertising </a> </li>
             <li> <a href="#"> Job </a> </li>
             <li> <a href="#"> Subscriptions </a> </li>
             <li> <a href="#"> Talent Workshops </a> </li>
             <li> <a href="#"> CPSC Certificates </a> </li>
             <li> <a href="#"> Ratings </a> </li>
             <li> <a href="#"> Shop Help </a> </li>
             <li> <a href="#"> Contact Us </a> </li>
           </ul>
         </div>

         <div className='text-footer p-4'>
            <h6>
              SITES
            </h6>
           <ul>
             <li> <a href="#"> DC </a> </li>
             <li> <a href="#"> MAD Magazine </a> </li>
             <li> <a href="#"> DC Kids </a> </li>
             <li> <a href="#"> DC Universe </a> </li>
             <li> <a href="#"> DC Power Visa </a> </li>
           </ul>
         </div>
        </div>
      </div>

      <section className='container-black'>
        <div className='container justify-content-between d-flex'>
          <div className='btn'>
            <button type="button" class="btn btn-outline-primary button">SIGN-UP NOW!</button>
          </div>

          <div className='social d-flex'>
            <h6 className= 'follow'>FOLLOW US</h6>
            <ul> 
              <li> <a href="#"><img src={facebook} alt="facebook" /></a> </li>
              <li> <a href="#"><img src={twitter} alt="twittwe" /></a> </li>
              <li> <a href="#"><img src={youTube} alt="youtube" /></a> </li>
              <li> <a href="#"><img src={pinterest} alt="pinterest" /></a> </li>
              <li> <a href="#"><img src={periscope} alt="periscope" /></a> </li>
            </ul>
          </div>

        </div>
      </section>
    </footer>
  )
}

export default Footer