import React from 'react'

export default function MiddelFooter() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-3'>
          <h3 className="mb-10 cus-f-title">Luxury brands</h3>
          <ul className="list-group cus-f-link">
            <li><a href="https://www.ethoswatches.com/rolex-watches.html" title="Rolex">Rolex</a></li>
            <li><a href="https://www.ethoswatches.com/brands/panerai.html" title="Panerai">Panerai</a></li>
            <li><a href="https://www.ethoswatches.com/brands/omega.html" title="Omega">Omega</a></li>
            <li><a href="https://www.ethoswatches.com/brands/rado.html" title="Rado">Rado</a></li>
            <li><a href="https://www.ethoswatches.com/brands/iwc.html" title="IWC">IWC</a></li>
          </ul>
          </div>
        <div className='col-sm-3'>
          <h3 className="mb-10 cus-f-title">Categories</h3>
          <ul className="list-group cus-f-link">
            <li><a href="https://www.ethoswatches.com/brands/men.html" title="Watches for Men">Watches for Men</a></li>
            <li><a href="https://www.ethoswatches.com/brands/women.html" title="Watches for Women">Watches for Women</a></li>
            <li><a href="https://www.ethoswatches.com/luxury-brands.html" title="Premium Brands">Premium Brands</a></li>
            <li><a href="https://www.ethoswatches.com/watches-online.html" title="Watches Online">Watches Online</a></li>
          </ul>
        </div>
        <div className='col-sm-2'>
          <h3 className="mb-10 cus-f-title">Company</h3>
          <ul className="list-group cus-f-link">
            <li><a href="https://www.ethoswatches.com/about-ethos/" title="About Ethos Watch Boutiques">About Ethos</a></li>
            <li><a href="https://www.ethoswatches.com/the-million-tree-project/" rel="nofollow" title="The Million-Tree Project">The Million-Tree Project</a></li>
            <li><a href="https://www.ethoswatches.com/locatestore/" title="Our Boutiques">Our Boutiques</a></li>
            <li><a href="https://www.ethoswatches.com/help-centre/" rel="nofollow" title="Help Centre">Help Centre</a></li>
            <li><a href="https://www.ethoswatches.com/repair-and-service/" title="Repair &amp; Service">Repair &amp; Service</a></li>
          </ul>
          </div>
        <div className='col-sm-4'>
            <div className="d-flex justify-content-between align-items-flex-start">
              <img className="float-left" src="https://cdn2.ethoswatches.com/static/frontend/Ethos-v2/destkop/en_US/images/icons/icon-newsletter.svg" width="62" title="Subscribe Icon"/>
              <div className="cus-linksTitle">
                <h3 className="mb-10 cus-f-title">Subscribe to our newsletter</h3>
                <p className="color_80 font_12">Be the first to hear about new arrivals, by-invitation-only sales and special events</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
