import React from 'react'
import ReyhoonLogo from '../../General/ReyhoonLogo'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return (
            <div className="first-section p-5">
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
                        <div className="border-radius-5 box-shadow display-flex padding-10">
                            <div className="flex-basis-6 display-flex align-items-center">
                                <select className="padding-10 border-elephant-1 height-45 background-color-white full-width" name="city" id="city-select">
                                    <option value="tehran">تهران</option>
                                    <option value="alborz">البرز</option>
                                    <option value="isfahan">اصفهان</option>
                                    <option value="shiraz">شیراز</option>
                                    <option value="yazd">یزد</option>
                                    <option value="lorestan">لرستان</option>
                                    <option value="khorasan-razavi">خراسان رضوی</option>
                                    <option value="kashan">kashan</option>
                                </select>
                            </div>
                            <div className="flex-basis-17">
                                <form className="search-distinct-form">
                                    <fieldset className="search-distinct padding-0 bg-big-hero">
                                        <legend className="text-align-right select-district-info-text">منطقه خود را وارد کنید</legend>
                                        <select className="select-district-input border-none full-width full-height">
                                            <option value="">نیاوران</option>
                                            <option value="">یوسف‌آباد</option>
                                        </select>
                                    </fieldset>
                                </form>
                            </div>
                            <div className="flex-basis-1 search-district-icon-section cursor-pointer">
                                <span>
                                    <FontAwesomeIcon icon={ faSearch }/>
                                </span>
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