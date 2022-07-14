import React from 'react'

export default function TopFooter() {
  return (
    <div className='container'>
        <div className="row">
            <div className='col cus-contact-info'>
                <p>Luxury Watch Helpline:
                    <span className="d-block text-uppercase">
                        <a className="position-relative mr-40" href="tel:8725028899" title="Need help? Contact us">+91 87250 28899</a>
                        <a href="tel:8725028883" title="Need help? Contact us">+91 87250 28883</a>
                    </span>
                </p>
            </div>
            <div className='col cus-contact-info'>
                <p>Online Orders Helpline:
                    <span className="d-block text-uppercase">
                        <a className="position-relative mr-40" href="tel:9821543088" title="Need help? Contact us">+91 98215 43088</a>
                        <a href="tel:911140115246" title="Need help? Contact us">+91 11 4011 5246</a>
                    </span>
                </p>
            </div>
            <div className='col cus-contact-info'>
                <p>Customer Care Number:
                    <span className="d-block text-uppercase">
                        <a className="position-relative" href="tel:8725060021" title="Need help? Contact us">+91 87250 60021</a>
                    </span>
                </p>
            </div>
        </div>
    </div>
  )
}
