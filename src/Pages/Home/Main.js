import React from 'react'
import ReyhoonLogo from '../../General/ReyhoonLogo'
import backgroundImage from '../../assets/images/1.jpg'
import SearchContainer from './SearchContainer'
import axios from 'axios'



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
                <SearchContainer
                    changeSearchValue={this.changeSearchValue}
                    changeCityValue={this.changeCityValue}
                    changeAreaValue={this.changeAreaValue}
                    update_area={this.update_area}
                    area={this.state.area}
                    city={this.state.city}
                    area_list={this.state.area_list}
                />
            </div>
        )
    }
}

export default Main