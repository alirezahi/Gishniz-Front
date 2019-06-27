import React from 'react'
import Checkbox from '../../General/Checkbox'
import FlipMove from 'react-flip-move'

class SearchFood extends React.Component {
    render(){
        return (
            <ul className="list-group p-0">
                <FlipMove typeName={null}>
                    <li key={this.props.items[0]} className="list-group-item">
                        <div className="small text-secondary">
                            فیلتر براساس انواع غذا
                        </div>
                    </li>
                    <li key={this.props.items[1]} className="list-group-item">
                        <div className="form-group">
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="جستجوی دسته‌بندی غذاها" />
                        </div>
                        <div className="form-check">
                            <Checkbox name={this.props.items[0]} count={38} />
                        </div>
                    </li>
                    {this.props.items.filter((i,index) => index !== 0).map(item => (
                        <li key={item} className="list-group-item">
                            <div className="form-check">
                                <Checkbox name={item} count={38} />
                            </div>
                        </li>
                    ))}
                </FlipMove>


            </ul>
        )
    }
    
}

export default SearchFood
