import digital from '../assets/img/buy-comics-digital-comics.png';
import merchandise from '../assets/img/buy-comics-merchandise.png';
import shop from '../assets/img/buy-comics-shop-locator.png';
import subscriptions from '../assets/img/buy-comics-subscriptions.png';
import pay from '../assets/img/buy-dc-power-visa.svg';
import imgBg from '../assets/img/dc-logo-bg.png'


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
        <div className='container'>
        <div className='text p-4'>
          <ul>
            <li>
             <h6>
              DC COMICS
             </h6>
            </li>
            <li>
              <a href="#">
              Characters
              </a>
            </li>
          </ul>
        </div>
        </div>
    

      </div>
    </footer>
  )
}

export default Footer