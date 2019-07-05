import React from 'react'
import HeaderImage from '../../assets/images/header-restaurant.jpg'
import SearchFood from './SearchFood'
import RestaurntSection from './RestaurantSection'
import axios from 'axios'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const queryString = require('query-string');


class Restaurants extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            items:[],
            category_list: [],
            filters: [],
            search_category_value: '',
            restaurantSeachValue:'',
         };
    }

    is_disabled = (item) => {
        let now = new Date()
        let opening_time = new Date()
        let closing_time = new Date()
        opening_time.setHours(item.opening_time.split(':')[0])
        opening_time.setMinutes(item.opening_time.split(':')[1])
        closing_time.setHours(item.closing_time.split(':')[0])
        closing_time.setMinutes(item.closing_time.split(':')[1])
        return !(now > opening_time && now < closing_time)
    }

    search_category = (search_category_value) => {
        this.setState({ search_category_value })
    }

    sorted_categories = () => {
        let { filters, category_list } = this.state
        return category_list
            .filter(item => {
                if(this.state.search_category_value === '')  return true
                return `${item.name}`.includes(this.state.search_category_value)
            })
            .sort((a,b) => {
                if(filters.includes(a.id)) return -1
                return 1
            })
            .map(item => { return { ...item, checked: this.state.filters.includes(item.id) } })
    }

    final_restaurant_list = (is_disabled) => {
        if (is_disabled) {
            if (this.state.filters.length === 0){
                return this.state.items
                    .filter(item => this.is_disabled(item))
                    .filter(item => item.name.includes(this.state.restaurantSeachValue))
            }
            else{
                return this.state.items
                    .filter(item => this.is_disabled(item))
                    .filter(item => item.categories.some(cat => this.state.filters.includes(cat.id)))
                    .filter(item => item.name.includes(this.state.restaurantSeachValue))
            }
        }
        else{
            if (this.state.filters.length === 0) {
                return this.state.items
                    .filter(item => !this.is_disabled(item))
                    .filter(item => item.name.includes(this.state.restaurantSeachValue))
            }
            else {
                return this.state.items
                    .filter(item => !this.is_disabled(item))
                    .filter(item => item.categories.some(cat => this.state.filters.includes(cat.id)))
                    .filter(item => item.name.includes(this.state.restaurantSeachValue))
            }
        }
    }

    update_filter = (item, checked) => {
        let { filters } = this.state
        if(checked === true){
            if(!filters.includes(item)){
                this.setState({
                    filters: [...filters,item]
                })
            }
        }
        else{
            if(filters.includes(item)){
                filters.pop(item)
                this.setState({filters})
            }
        }
    }

    componentDidMount(){
        let parsed = queryString.parse(this.props.location.search)
        axios.get('http://localhost:8000/api/restaurants/',{
            params:{
                area: parsed['area']
            }
        }).then(response => {
            console.log(response.data)
            this.setState({
                items: response.data
            },()=>{
                this.categories()
            })
        })
        
    }

    searchRestaurant = (e) => {
        this.setState({restaurantSeachValue:e.target.value})
    }

    categories = () => {
        let category_list_temp = this.state.items
            .map(item => item.categories)
            .reduce(((a,b) => [...a,...b]),[])


        var count = {};
        category_list_temp.forEach(function (i) { count[i.name] = (count[i.name] || 0) + 1; });

        let category_list = category_list_temp
            .filter((item, index, self) =>
                index === self.findIndex((t) => (
                    t.id === item.id
                ))
            )
            .map(item => ({...item, count:count[item.name]}))
        

        this.setState({ category_list})
    }

    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <img className="w-100" src={HeaderImage} alt="عکس اصلی" />
                </div>
                <div className="row bg-white px-5 py-2 font-weight-bold border">
                    <h5>
                        {`${this.state.items.length} رستوران امکان سرویس‌دهی به ${ queryString.parse(this.props.location.search)['area']}▼ را دارند`}
                    </h5>
                </div>
                <div className="row bg-white px-5 py-2">
                    <div className="w-md-50 w-100 search-restaurant">
                        <label class="sr-only" for="inlineFormInputGroupUsername">جستجوی رستوران در این محدوده</label>
                        <div class="input-group">
                            <div class="input-group-prepend bg-light">
                                <div class="input-group-text bg-light">
                                    <FontAwesomeIcon icon={faSearch}/>
                                </div>
                            </div>
                            <input type="text" onChange={this.searchRestaurant} class="form-control bg-light" id="inlineFormInputGroupUsername" placeholder="جستجوی رستوران در این محدوده" />
                        </div>
                    </div>
                </div>
                <div className="row py-3 bg-light">
                    <div className="col-md-3">
                        <SearchFood 
                            items={this.sorted_categories()} 
                            updateFilter={this.update_filter}
                            searchCategory={this.search_category}
                        />
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            {this.final_restaurant_list(false).map(item => (
                                <div className="col-md-4 mb-2">
                                    <RestaurntSection disabled={true} item={{ ...item, is_disabled: false}}/>
                                </div>
                            ))}
                        </div>
                        {this.final_restaurant_list(true).length > 0 &&
                            <div className="row font-weight-bold p-3">
                                رستوران‌های بسته
                            </div>
                        }
                        <div className="row">
                            {this.final_restaurant_list(true).map(item => (
                                <div className="col-md-4 mb-2">
                                    <RestaurntSection disabled={true} item={{ ...item, is_disabled: true}}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Restaurants;
