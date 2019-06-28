import React from 'react'
import HeaderImage from '../../assets/images/header-restaurant.jpg'
import { Affix } from 'antd'
import { Link as ScrollLink, Element } from 'react-scroll'
import axios from 'axios'

import FoodSection from './FoodSection'
import RestaurantInfo from './RestaurantInfo'
import CommentSection from './CommentSection'

class Restaurant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurant: {},
            comments: []
        }
    }

    componentDidMount = () =>{
        let params = this.props.match.params
        let id = params.id || ''
        axios.get(`http://localhost:8000/api/restaurants/${id}`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    restaurant: response.data
                }, () => {})
            })
        axios.get(`http://localhost:8000/api/restaurants/${id}/comments`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    comments: response.data
                }, () => {})
            })
    }

    render() {
        return (
            <div className="container-fluid bg-light">
                <div className="row">
                    <img className="w-100" src={HeaderImage} alt="عکس اصلی" />
                </div>
                    <div className="container w-xs-75 w-md-50">
                        
                        <div className="floating-restaurant">
                            <div className="small">
                                <span className="restaurant-dir rounded px-2">
                                    <a href="/"> ریحون </a>
                                    &#62; 
                                    <a href="/"> {`${this.state.restaurant.address ? this.state.restaurant.address.city : ''}، ${this.state.restaurant.address ? this.state.restaurant.address.area : ''} `} </a>
                                    &#62; 
                                    <a href="/" className="text-dark"> {this.state.restaurant.name} </a>
                                </span>
                                <span className="float-left restaurant-dir rounded px-2">
                                <a href="/"> بازگشت </a>&#62; 
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
                                        {this.state.restaurant.name}
                                    </h3>
                                    <div className="text-center">
                                        stars
                                    </div>
                                    <div className="text-center font-weight-bold">
                                        {(this.state.restaurant.categories || []).map(item => item.name).join(' • ')}
                                    </div>
                                    <div className="text-center text-secondary">
                                        <address className="text-center">
                                        {this.state.restaurant.address ? this.state.restaurant.address.address_line : ''}
                                        </address>
                                    </div>

                                </div>
                                <Affix className="rounded-bottom z-index-1000">
                                    <div id="affix-one" className="container bg-white rounded-bottom">
                                        <hr className="grey-gradient m-0" />
                                        <div className="row bg-white rounded-bottom">
                                            <div className="section-tab col-md-4 text-center p-3">
                                                <ScrollLink to="Menu" smooth={true} offset={-100}>
                                                    <a href="asd" className="text-secondary">منوی رستوران</a>
                                                </ScrollLink>
                                            </div>
                                            <div className="section-tab col-md-4 text-center p-3">
                                                <ScrollLink to="RestaurantInfo" smooth={true} offset={-60}>
                                                    <a href="asd" className="text-secondary">اطلاعات رستوران</a>
                                                </ScrollLink>
                                            </div>
                                            <div className="section-tab col-md-4 text-center p-3">
                                                <ScrollLink to="CommentSection" smooth={true} offset={-70}>
                                                    <a href="asd" className="text-secondary">نظرات کاربران</a>
                                                </ScrollLink>
                                            </div>
                                        </div>
                                    </div>
                                </Affix>
                            </div>
                            <Element name="Menu">
                            </Element>
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
                            <Element name="RestaurantInfo">
                                <RestaurantInfo
                                    item={this.state.restaurant}
                                />
                            </Element>
                            <Element name="CommentSection">
                                <CommentSection
                                    item={this.state.restaurant}
                                    comments={this.state.comments}
                                />
                            </Element>
                        </div>
                    </div>
            </div>
        )
    }

}

export default Restaurant
