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

const Footer = (props) => {
  const menuFooter = props.menu

  return (
    <footer>
      <div className="container-blue">
        <div className="container h-100">
          <ul className="footer-icon">
            <li>
              <div className="box-img">
               <img className="image" src={digital} alt="digital" />
              </div>
              <a href="#">DIGITAL COMICS</a>
            </li>

            <li>
            <div className="box-img">
              <img className="image" src={merchandise} alt="digital" />
            </div>
              <a href="#">DC MERCHANDISE</a>
            </li>

            <li>
            <div className="box-img">
              <img className="image" src={subscriptions} alt="digital" />
            </div>
              <a href="#">SUBSCRIPTION</a>
            </li>

            <li>
            <div className="box-img">
              <img className="image" src={shop} alt="digital" />
            </div>
              <a href="#">COMIC SHOP LOCATOR</a>
            </li>

            <li>
            <div className="box-img">
              <img className="image" src={pay} alt="digital" />
            </div>
              <a href="#">DC POWER VISA</a>
            </li>
          </ul>
        </div> {/* div container */}
      </div> {/* div blue */}

      <div className="container-image">
        <div>
          <img className="img-bg" src={imgBg} alt="" />
        </div>
        <div className="container d-flex">
          <div className="text-footer p-4">
            <h6>
              DC COMICS
            </h6>
           <ul>
           {menuFooter.dcComics.map((item) => (
                <li key={item.id}>
                  <a href={item.url}>{item.text}</a>
                </li>
              ))
            }            
           </ul>

           <h6>
             SHOP
           </h6>
           <ul>
            {menuFooter.shop.map((item) => (
              <li key={item.id}>
                <a href={item.url}>
                 {item.text}
                </a>
              </li>
             ))
            }
           </ul>
         </div>

         <div className="text-footer p-4">
            <h6>
              DC
            </h6>
           <ul>
            {menuFooter.dc.map((item) => 
              <li key={item.id}> 
                <a href={item.url}> 
                  {item.text} 
                </a> 
              </li>
            )}
           </ul>
         </div>

         <div className="text-footer p-4">
            <h6>
              SITES
            </h6>
           <ul>
            {menuFooter.sities.map((item) => 
              <li key={item.id}> 
                <a href={item.url}> 
                  {item.text} 
                </a> 
              </li>
            )}
           </ul>
         </div>
        </div>
      </div>

      <section className="container-black">
        <div className="container justify-content-between d-flex">
          <div className="btn">
            <button type="button" className="btn btn-outline-primary button">SIGN-UP NOW!</button>
          </div>

          <div className="social d-flex"> 
            <h6 className= "follow">FOLLOW US</h6>
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