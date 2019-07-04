import React from 'react'
import ReyhoonLogo from '../../General/ReyhoonLogo'
import backgroundImage from '../../assets/images/1.jpg'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Select } from 'antd'
import axios from 'axios'
import { Link } from "react-router-dom";
const { Option } = Select

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            area:'',
            city: '',
            area_list: [],
        }
    }

    changeSearchValue = (e) => {
        this.setState({area:e},() => {
            this.update_area()
        })
    }

    changeCityValue = (e) => {
        this.setState({city:e})
    }

    changeAreaValue = (e) => {
        this.setState({area:e})
    }

    update_area = () => {
        
        axios.get(`http://localhost:8000/api/areas`,{
                params:{
                    area: this.state.area,
                    city: this.state.city,
                }
            })
            .then(response => {
                console.log(response.data)
                this.setState({
                    area_list: response.data
                }, () => {
                    
                })
            })
    }

    render(){
        return (
            <div className="first-section p-5" style={{ backgroundImage: `url(${backgroundImage})`}}>
                <div id="main-page-reyhoon-logo" className="m-auto px-3 py-5">
                    <ReyhoonLogo/>
                </div>
                <div className="text-center font-weight-bold">
                    <h3 className="text-center font-weight-bold">
                        سفارش آنلاین غذا از بهترین رستوران‌ها و فست‌فود‌ها
                    </h3>
                    <p className="text-center color-elephant">
                        برای دیدن لیست رستوران‌ها و فست‌فود‌هایی که به شما سرویس می‌دهند، منطقه خود را وارد کنید.
                    </p>
                    <div className="width-60 margin-center">
                        <div className="box-shadow display-flex padding-10">
                            <div className="flex-basis-6 display-flex align-items-center p-2">
                                <Select 
                                    showSearch 
                                    className="background-color-white full-width"
                                    optionFilterProp="city"
                                    onChange={this.changeCityValue}
                                    placeholder="شهر"
                                >
                                    {[
                                        {
                                            name:'tehran',
                                            name_fa:'تهران',
                                        },
                                        {
                                            name:'alborz',
                                            name_fa:'البرز',
                                        },
                                        {
                                            name:'isfahan',
                                            name_fa:'اصفهان',
                                        },
                                        {
                                            name:'shiraz',
                                            name_fa:'شیراز',
                                        },
                                        {
                                            name:'yazd',
                                            name_fa:'یزد',
                                        },
                                    ].map(item => (
                                        <Option key={item.name} city={`${item.name} ${item.name_fa}`} value={item.name}>{item.name_fa}</Option>
                                    ))}
                                </Select>
                            </div>
                            <div className="flex-basis-17 py-2 pr-2">
                                <span className="text-align-right select-district-info-text position-absolute">منطقه خود را وارد کنید</span>
                                <Select 
                                    showSearch 
                                    className="select-district-input w-100"
                                    onSearch={this.changeSearchValue}
                                    onChange={this.changeAreaValue}
                                    placeholder="ناحیه"
                                >
                                    {this.state.area_list.map(item => (
                                        <Option value={item['area']}>{item['area']}</Option>
                                    ))}
                                </Select>
                            </div>
                            <div className="flex-basis-1 search-district-icon-section cursor-pointer">
                                <Link to={`/restaurants?area=${this.state.area}`}>
                                    <span className="text-white">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="display-flex last-section-search last-result-link">
                            <a className="color-elephant" href="/">
                                آخرین جستجو: فلان و بهمان
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main