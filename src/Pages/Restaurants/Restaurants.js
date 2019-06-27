import React from 'react'
import HeaderImage from '../../assets/images/header-restaurant.jpg'
import SearchFood from './SearchFood'
import RestaurntSection from './RestaurantSection'
class Restaurants extends React.Component {
    constructor(props) {
        super(props);
        this.state = { a:['a','b','c','d','e'] };
    }
    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <img className="w-100" src={HeaderImage} alt="عکس اصلی" />
                </div>
                <div className="row"></div>
                <div className="row"></div>
                <div className="row py-3">
                    <div className="col-md-3" onClick={() => { this.setState({ a: this.state.a.sort(() => Math.random() - 0.5)}) }}>
                        <SearchFood items={this.state.a} />

                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            {[1, 2, 3].map(item => (
                                <div className="col-md-4">
                                    <RestaurntSection disabled={true}/>
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
