import React from 'react'
import HeaderImage from '../../assets/images/header-restaurant.jpg'
import { Affix } from 'antd'
import * as Scroll from 'react-scroll';
import { Link as ScrollLink, Element, Events, scrollSpy, scroller } from 'react-scroll'
import axios from 'axios'

import FoodSection from './FoodSection'
import RestaurantInfo from './RestaurantInfo'
import CommentSection from './CommentSection'
import StarRating from '../../General/StarRating'

class Restaurant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurant: {},
            comments: [],
            food_set: {},
            food_set_object: [],
        }
        
    }

    componentDidMount = () =>{
        let params = this.props.match.params
        let id = params.id || ''
        axios.get(`http://localhost:8000/api/restaurants/${id}/`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    restaurant: response.data
                }, () => {
                    let food_set = this.group_by(response.data.foods, 'food_set')
                    let food_set_object = Object.keys(food_set)
                    this.setState({ food_set, food_set_object})
                })
            })
        axios.get(`http://localhost:8000/api/restaurants/${id}/comments/`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    comments: response.data
                }, () => {})
            })
    }

    group_by = (xs, key) => {
        xs = xs || []
        return xs.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    };

    componentWillUnmount = () => {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
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
                                        <StarRating
                                            value={this.state.restaurant.average_rate}
                                        />
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
                                            <ScrollLink spy={true} activeClass="active" className="text-secondary" to="Menu" smooth={true} offset={-100} duration={500}>
                                                    منوی رستوران
                                                </ScrollLink>
                                            </div>
                                            <div className="section-tab col-md-4 text-center p-3">
                                            <ScrollLink activeClass="active" to="RestaurantInfo" className="text-secondary" smooth={true} offset={-60}>
                                                    اطلاعات رستوران
                                                </ScrollLink>
                                            </div>
                                            <div className="section-tab col-md-4 text-center p-3">
                                            <ScrollLink activeClass="active" to="CommentSection" className="text-secondary" smooth={true} offset={-70}>
                                                    نظرات کاربران
                                                </ScrollLink>
                                            </div>
                                        </div>
                                    </div>
                                </Affix>
                            </div>
                            <Element id="Menu" name="Menu">
                            </Element>
                            {this.state.food_set_object
                                .map(food_set => (
                                    <React.Fragment>
                                        <div className="row p-3">
                                            <h4 className="font-weight-bold">
                                                {food_set}
                                            </h4>
                                        </div>
                                        <div className="row">
                                            {this.state.food_set[food_set]
                                                .map(food_item => (
                                                <div className="col-md-6 mb-3">
                                                    <FoodSection item={food_item}/>
                                                </div>
                                            ))}
                                        </div>
                                    </React.Fragment>
                                ))
                            }
                           
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
