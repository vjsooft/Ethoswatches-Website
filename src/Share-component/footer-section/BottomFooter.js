import React from 'react'

export default function BottomFooter() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <ul className="cus-follow d-flex">
            <li>Follow Ethos:</li>
            <li><a rel="me nofollow" href="https://twitter.com/ethoswatches" title="Twitter"><i className="ethos_i fa-brands fa-twitter"></i></a></li>
            <li><a rel="me nofollow" href="https://www.instagram.com/ethoswatches/" title="Instagram"><i className="ethos_i fa-brands fa-instagram"></i></a></li>
            <li><a rel="me nofollow" href="https://www.facebook.com/Ethos.Watch.Boutiques" title="Facebook"><i className="ethos_i fa-brands fa-facebook"></i></a></li>
            <li><a rel="me nofollow" href="https://www.youtube.com/user/EthosWatchBoutiques" title="YouTube"><i className="ethos_i fa-brands fa-youtube"></i></a></li>
          </ul>
        </div>
        <div className='col'>
          <p className='cus-copyright'>© 2022 Ethos Watch Boutiques. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}
