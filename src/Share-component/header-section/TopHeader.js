import React from 'react'
import PhoneIcon from '../../assets/images/icon-phone.svg';
import whatsappIcon from '../../assets/images/icon-whatsapp.svg';

export default function Topheader() {
  return (
    <div className='container cus-font-10'>
      <div className='row'>
      <div className='col p-0'>
          <ul className="nav cus-contact-bar">						
            <li className='posation-relative'>
              <a href="tel:8725028883" title="Need help? Contact us">
              <span className="cusEthos_i"><img src={PhoneIcon} alt="Phone Icon" className='img-fluid'/></span>+91 87250 28883</a>
              <a href="tel:8725028899" title="Need help? Contact us">+91 87250 28899</a>
            </li>
            <li className="whatsapp">
              <a href="" title="Need help? Whatsapp us" target="_blank">
                <span className="cusEthos_i"><img src={whatsappIcon} alt="whatsapp Icon" className='img-fluid'/></span>+91 8725028893</a>
            </li>
          </ul>
        </div>
        <div className='col p-0'>
          <ul className="nav justify-content-end cus-account-bar">
            <li>
              <a><span className="cusEthos_i"><i className="fa-regular fa-heart"></i></span> Wishlist</a>
            </li>
            <li>
              <a><span className="ethos_i"></span><i className="fa-regular fa-cart-shopping"></i> Cart</a>
            </li>
            <li>
                <a><span className="ethos_i"></span><i className="fa-regular fa-user"></i> Login</a>
                <span className="cus-or">or</span>
                <a title="Signup">Signup</a>
            </li>
          </ul>
        </div>
      </div>      
    </div>
  )
}
