import React from 'react'
import HeaderImage from '../../assets/images/header-restaurant.jpg'
import { Affix } from 'antd'
import * as Scroll from 'react-scroll'
import { Link as ScrollLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import FoodSection from './FoodSection'
import RestaurantInfo from './RestaurantInfo'

class Restaurant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <img className="w-100" src={HeaderImage} alt="عکس اصلی" />
                </div>
                    <div className="container w-xs-75 w-md-50">
                        
                        <div className="floating-restaurant">
                            <div className="small">
                                <span className="restaurant-dir rounded px-1">
                                    {/* <a href="/"> ریحون </a> */}
                                    <ScrollLink to="hello" smooth={true} offset={-100}>
                                        رحیونشنسی
                                    </ScrollLink>
                                    &#62; 
                                    <a href="/"> ریحون </a>
                                </span>
                                <span className="float-left restaurant-dir rounded px-1">
                                    <a href="/"> بازگشت </a>
                                </span>
                            </div>
                            <div className="rounded bg-white my-3 box-shadow-light">
                                <div id="main-info-rest" className="p-3 justify-content-center align-items-center text-center main-restaurant-info">
                                    <img
                                        className="max-height-70 rounded border-light main-restaurant-image"
                                        src="https://dist.reyhoon-static.com/uploads/images/restaurants/logos/sam-wich_2173_1520945285.jpeg@!branch_logo_web_default"
                                        alt="new"
                                    />
                                    <h3 className="text-center font-weight-bold">
                                        دینارو
                                    </h3>
                                    <div className="text-center">
                                        stars
                                    </div>
                                    <div className="text-center font-weight-bold">
                                        {['س', 'ذضثق', 'خذه'].reduce((a, b) => `${a} • ${b}`)}
                                    </div>
                                    <div className="text-center text-secondary">
                                        <address className="text-center">
                                            یه منطقه خوش آب و هوا
                                        </address>
                                    </div>

                                </div>
                                <Affix className="rounded-bottom z-index-1000">
                                    <div className="container bg-white rounded-bottom">
                                        <hr className="grey-gradient m-0" />
                                        <div className="row bg-white rounded-bottom p-3">
                                            <div className="col-md-4 text-center">
                                                <a href="asd" className="text-secondary">منوی رستوران</a>
                                            </div>
                                            <div className="col-md-4 text-center">
                                                <a href="asd" className="text-secondary">اطلاعات رستوران</a>
                                            </div>
                                            <div className="col-md-4 text-center">
                                                <a href="asd" className="text-secondary">نظرات کاربران</a>
                                            </div>
                                        </div>
                                    </div>
                                </Affix>
                            </div>
                           <div className="row p-3">
                                <h4 className="font-weight-bold">
                                    پیتزا
                                </h4>
                            </div>
                            <div className="row">
                                {[1,2,3,4].map(food_item => (
                                    <div className="col-md-6 mb-3">
                                        <FoodSection />
                                    </div>
                                ))}
                            </div>
                            <Element name="hello">
                                <div>jhfjhkf</div>
                            </Element>

                            <RestaurantInfo/>
                        </div>
                    </div>
            </div>
        )
    }

}

export default Restaurant
