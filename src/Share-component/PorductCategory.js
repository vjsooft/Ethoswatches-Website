import React, {useState} from 'react'
import  CategoryMostRead from '../Dummy-json/CategoryMostRead.json'
import  CategoryMostDiscussed from '../Dummy-json/CategoryMostDiscussed.json'
import  CategoryRecentArtical from '../Dummy-json/CategoryRecentArtical.json'
import  CategoryfeaturedBrands from '../Dummy-json/CategoryFeaturedBrands.json'
// MOST READ Images
import MustOne from '../assets/images/must-1.jpg'
import MustTwo from '../assets/images/must-2.jpg'
import MustThree from '../assets/images/must-3.jpg'

//MOST DISCUSSED Images
import DiscusOne from '../assets/images/discussed-1.jpg'
import DiscusTwo from '../assets/images/discussed-2.jpg'
import DiscusThree from '../assets/images/discussed-3.jpg'

//RECENT ARTICLES Images
import RecentOne from '../assets/images/artical-1.jpg'
import RecentTwo from '../assets/images/artical-2.jpg'
import RecentThree from '../assets/images/artical-3.jpg'

//FEATURED BRANDS Images
import FeaturedOne from '../assets/images/brands-1.jpg'
import FeaturedTwo from '../assets/images/brands-2.jpg'
import FeaturedThree from '../assets/images/brands-3.jpg'

export default function PorductCategory() {
  const [readbgChange, setReadbgChange] = useState('MOST-READ-ONE')
  const [discusbgChange, setDiscusbgChange] = useState('MOST-DISCUSSED-ONE')
  const [recentbgChange, setRecentbgChange] = useState('MOST-RECENT-ONE')
  const [featuredbgChange, setFeaturedbgChange] = useState('MOST-FEATURED-ONE')
  
  //MOST READ JSON
  // const mostRead = [
  //   {
  //     title: "MOST-READ-ONE",
  //     keyFeatures:[
  //       {dis:'Exclusively Bronze: The Sophisticated Oris Big Crown Pointer Date Bronze Dial Edition', date:'January 21 2020'}
  //     ],
  //   },
  //   {
  //     title: "MOST-READ-TWO",
  //     keyFeatures : [
  //       {dis:'Experience The Thrill Of The Maurice Lacroix Aikon Special Edition Mahindra Racing', date:'January 21 2020'}
  //     ],
  //   },
  //   {
  //     title: "MOST-READ-THREE",
  //     keyFeatures : [
  //       {dis:'The New Breed: Girard-Perregaux’s Laureato Absolute Collection Breathes New Life Into The Luxury Sports Watch Collection', date:'January 21 2020'}
  //     ],
  //   },

  // ];

//MOST DISCUSSED JSON
  // const mostDiscussed= [
  //   {
  //     title: "MOST-DISCUSSED-ONE",
  //     keyFeatures:[
  //       {dis:'Exclusively Bronze: The Sophisticated Oris Big Crown Pointer Date Bronze Dial Edition', date:'January 21 2020'}
  //     ],
  //   },
  //   {
  //     title: "MOST-DISCUSSED-TWO",
  //     keyFeatures : [
  //       {dis:'Experience The Thrill Of The Maurice Lacroix Aikon Special Edition Mahindra Racing', date:'January 21 2020'}
  //     ],
  //   },
  //   {
  //     title: "MOST-DISCUSSED-THREE",
  //     keyFeatures : [
  //       {dis:'The New Breed: Girard-Perregaux’s Laureato Absolute Collection Breathes New Life Into The Luxury Sports Watch Collection', date:'January 21 2020'}
  //     ],
  //   },

  // ];

  //RECENT ARTICLES JSON
  // const recentArtical = [
  //   {
  //     title: "MOST-RECENT-ONE",
  //     keyFeatures:[
  //       {dis:'Exclusively Bronze: The Sophisticated Oris Big Crown Pointer Date Bronze Dial Edition', date:'January 21 2020'}
  //     ],
  //   },
  //   {
  //     title: "MOST-RECENT-TWO",
  //     keyFeatures : [
  //       {dis:'Experience The Thrill Of The Maurice Lacroix Aikon Special Edition Mahindra Racing', date:'January 21 2020'}
  //     ],
  //   },
  //   {
  //     title: "MOST-RECENT-THREE",
  //     keyFeatures : [
  //       {dis:'The New Breed: Girard-Perregaux’s Laureato Absolute Collection Breathes New Life Into The Luxury Sports Watch Collection', date:'January 21 2020'}
  //     ],
  //   },

  // ];
  
  //FEATURED BRANDS JSON
  // const featuredBrands= [
  //   {
  //     title: "MOST-FEATURED-ONE",
  //     keyFeatures:[
  //       {dis:'Exclusively Bronze: The Sophisticated Oris Big Crown Pointer Date Bronze Dial Edition', date:'January 21 2020'}
  //     ],
  //   },
  //   {
  //     title: "MOST-FEATURED-TWO",
  //     keyFeatures : [
  //       {dis:'Experience The Thrill Of The Maurice Lacroix Aikon Special Edition Mahindra Racing', date:'January 21 2020'}
  //     ],
  //   },
  //   {
  //     title: "MOST-FEATURED-THREE",
  //     keyFeatures : [
  //       {dis:'The New Breed: Girard-Perregaux’s Laureato Absolute Collection Breathes New Life Into The Luxury Sports Watch Collection', date:'January 21 2020'}
  //     ],
  //   },
  // ];

  return (
    <div className='row'>
        {/* MOST READ Code Here Start */}
        <div className='col-sm-6 mb-2 pb-2'>
          <div className='row'>
            <div className="col-sm-12 d-flex justify-content-between align-items-flex-start bb-with-m-p pb-3">
							<h3 className="text-uppercase">Most Read</h3>
							<p><a className="viewAll" href="https://www.ethoswatches.com/the-watch-guide/all-time/" title="View All">View all <i className="fa-solid fa-angle-right"></i></a></p>
						</div>
            <div className="bg-changer col-sm-6">
              <div className={"tab-pane " + (readbgChange === 'MOST-READ-ONE' ? 'active' : '')} >
                <img src={MustOne} alt="tab img" title='tab img'  className="img-fluid"/>
              </div>
              <div className={"tab-pane " + (readbgChange === 'MOST-READ-TWO' ? 'active' : '')}>
                <img src={MustTwo} alt="tab img" title='tab img' className="img-fluid"/>
              </div>
              <div className={"tab-pane " + (readbgChange === 'MOST-READ-THREE' ? 'active' : '')}>
                <img src={MustThree} alt="tab img" title='tab img' className="img-fluid"/>
              </div>
            </div>
            <div className="bg-changer col-sm-6">
              {
                CategoryMostRead.map((categoryRead, index)=>
                  <ul key={index} onMouseEnter={() =>{ setReadbgChange(categoryRead.title)}}>
                      { categoryRead.keyFeatures.map((categoryReadListing, index)=>
                          <li key={index} className="bb-with-m-p">
                            <p>
                              <span>Review</span>
                              {categoryReadListing.description}
                            </p>
                            <p className="cus-publishDate">{categoryReadListing.date}</p>
                          </li>
                        )
                      }
                  </ul>
                )
              }
            </div>
          </div>
        </div>

        {/* MOST DISCUSSED Code Here Start */}
        <div className='col-sm-6 mb-2 pb-2'>
          <div className='row'>
            <div className="col-sm-12 d-flex justify-content-between align-items-flex-start bb-with-m-p pb-3">
							<h3 className="text-uppercase">MOST DISCUSSED</h3>
							<p><a className="viewAll" href="https://www.ethoswatches.com/the-watch-guide/all-time/" title="View All">View all <i className="fa-solid fa-angle-right"></i></a></p>
						</div>
            <div className="bg-changer col-sm-6">
              <div className={"tab-pane " + (discusbgChange === 'MOST-DISCUSSED-ONE' ? 'active' : '')} >
                <img src={DiscusOne}  alt="tab img" title='tab img' className="img-fluid"/>
              </div>
              <div className={"tab-pane " + (discusbgChange === 'MOST-DISCUSSED-TWO' ? 'active' : '')}>
                <img src={DiscusTwo} alt="tab img" title='tab img' className="img-fluid"/>
              </div>
              <div className={"tab-pane " + (discusbgChange === 'MOST-DISCUSSED-THREE' ? 'active' : '')}>
                <img src={DiscusThree} alt="tab img" title='tab img' className="img-fluid"/>
              </div>
            </div>
            <div className="bg-changer col-sm-6">
              {
                CategoryMostDiscussed.map((categoryDiscussed, index)=>
                  <ul key={index} onMouseEnter={() =>{ setDiscusbgChange(categoryDiscussed.title)}}>
                    {categoryDiscussed.keyFeatures.map((categoryDiscussedListing, index)=>
                        <li key={index} className="bb-with-m-p">
                          <p>
                            <span>Review</span>
                            {categoryDiscussedListing.description}
                          </p>
                          <p className="cus-publishDate">{categoryDiscussedListing.date}</p>
                        </li>
                      )
                    }
                  </ul>
                )
              }
            </div>
          </div>
        </div>

         {/* RECENT ARTICLES Code Here Start */}
         <div className='col-sm-6 mb-2 pb-2'>
            <div className='row'>
              <div className="col-sm-12 d-flex justify-content-between align-items-flex-start bb-with-m-p pb-3">
                <h3 className="text-uppercase">RECENT ARTICLES</h3>
                <p><a className="viewAll" href="https://www.ethoswatches.com/the-watch-guide/all-time/" title="View All">View all <i className="fa-solid fa-angle-right"></i></a></p>
              </div>
              <div className="bg-changer col-sm-6">
                <div className={"tab-pane " + (recentbgChange === 'MOST-RECENT-ONE' ? 'active' : '')} >
                  <img src={RecentOne}  alt="tab img" title='tab img' className="img-fluid"/>
                </div>
                <div className={"tab-pane " + (recentbgChange === 'MOST-RECENT-TWO' ? 'active' : '')}>
                  <img src={RecentTwo} alt="tab img" title='tab img' className="img-fluid"/>
                </div>
                <div className={"tab-pane " + (recentbgChange === 'MOST-RECENT-THREE' ? 'active' : '')}>
                  <img src={RecentThree} alt="tab img" title='tab img' className="img-fluid"/>
                </div>
              </div>
              <div className="bg-changer col-sm-6">
                {
                  CategoryRecentArtical.map((recentArtical, index)=>
                    <ul key={index} onMouseEnter={() =>{ setRecentbgChange(recentArtical.title)}}>
                      {
                        recentArtical.keyFeatures.map((recentArticalListing, index)=>
                          <li key={index} className="bb-with-m-p">
                            <p>
                              <span>Review</span>
                              {recentArticalListing.description}
                            </p>
                            <p className="cus-publishDate">{recentArticalListing.date}</p>
                          </li>
                        )
                      }
                    </ul>
                  )
                }
              </div>
            </div>
          </div>

        {/* FEATURED BRANDS Code Here Start */}
        <div className='col-sm-6 mb-2 pb-2'>
          <div className='row'>
            <div className="col-sm-12 d-flex justify-content-between align-items-flex-start bb-with-m-p pb-3">
                <h3 className="text-uppercase">FEATURED BRANDS</h3>
                <p><a className="viewAll" href="https://www.ethoswatches.com/the-watch-guide/all-time/" title="View All">View all <i className="fa-solid fa-angle-right"></i></a></p>
              </div>
            <div className="bg-changer col-sm-6">
              <div className={"tab-pane " + (featuredbgChange === 'MOST-FEATURED-ONE' ? 'active' : '')} >
                <img src={FeaturedOne}  className="img-fluid"/>
              </div>
              <div className={"tab-pane " + (featuredbgChange === 'MOST-FEATURED-TWO' ? 'active' : '')}>
                <img src={FeaturedTwo} className="img-fluid"/>
              </div>
              <div className={"tab-pane " + (featuredbgChange === 'MOST-FEATURED-THREE' ? 'active' : '')}>
                <img src={FeaturedThree} className="img-fluid"/>
              </div>
            </div>
            <div className="bg-changer col-sm-6">
              {
                CategoryfeaturedBrands.map((featuredBrands, index)=>
                  <ul key={index} onMouseEnter={() =>{ setFeaturedbgChange(featuredBrands.title)}}>
                    {featuredBrands.keyFeatures.map((featuredBrandsListing, index)=>
                    <li key={index} className="bb-with-m-p">
                          <p>
                            <span>Review</span>
                            {featuredBrandsListing.description}
                          </p>
                          <p className="cus-publishDate">{featuredBrandsListing.date}</p>
                        </li>
                      )
                    }
                  </ul>
                )
              }
            </div>
          </div>
        </div>
    </div>
  )
}
