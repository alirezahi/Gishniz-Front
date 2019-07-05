import React from 'react'
import { Select } from 'antd'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom";
import SearchInput from './SearchInput'

const { Option } = Select

function SearchContainer(props) {
    return(
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
                                    onChange={props.changeCityValue}
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
                                <SearchInput
                                    changeSearchValue={props.changeSearchValue}
                                    changeAreaValue={props.changeAreaValue}
                                    area_list={props.area_list}
                                />
                            </div>
                            <div className="flex-basis-1 search-district-icon-section cursor-pointer">
                                <Link to={`/restaurants?area=${props.area}`}>
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
    )
}

export default SearchContainer