import React from 'react'
import HeaderImage from '../../assets/images/header-restaurant.jpg'
import SearchFood from './SearchFood'
import RestaurntSection from './RestaurantSection'

function Restaurants() {
    return (
        <div className="container-fluid">
            <div className="row">
                <img className="w-100" src={HeaderImage} alt="عکس اصلی"/>
            </div>
            <div className="row"></div>
            <div className="row"></div>
            <div className="row py-3">
                <div className="col-md-3">
                    <SearchFood/>
                    
                </div>
                <div className="col-md-9">
                    <div className="row">
                        {[1,2,3].map(item => (
                            <div className="col-md-4">
                                <RestaurntSection/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Restaurants;
