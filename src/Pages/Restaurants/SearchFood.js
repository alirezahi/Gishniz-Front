import React from 'react'
import Checkbox from '../../General/Checkbox'
import FlipMove from 'react-flip-move'

class SearchFood extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            categories:[],
        }
    }
    render(){
        return (
            <ul id="category_search" className="list-group p-0">
                <li className="list-group-item">
                    <div className="small text-secondary">
                        فیلتر براساس انواع غذا
                    </div>
                </li>
                <FlipMove typeName={null}>
                    <li className="list-group-item">
                        <div className="form-group">
                            <input onChange={(e) => this.props.searchCategory(e.target.value)} type="text" className="form-control" id="formGroupExampleInput" placeholder="جستجوی دسته‌بندی غذاها" />
                        </div>
                    </li>
                    <li key={this.props.items[0] ? this.props.items[0].id : ''} className="list-group-item">
                        <div className="form-check">
                            <Checkbox 
                                checked={this.props.items[0]? this.props.items[0].checked : false}
                                onChange={this.props.updateFilter} 
                                name={this.props.items[0] ? this.props.items[0].name : ''} 
                                count={38} 
                                id={this.props.items[0] ? this.props.items[0].id : ''}
                            />
                        </div>
                    </li>
                    {this.props.items.filter((i,index) => index !== 0).sort((a,b)=>(a.id>b.id)).map(item => (
                        <li key={item.id} className="list-group-item">
                            <div className="form-check">
                                <Checkbox 
                                    checked={item.checked}
                                    onChange={this.props.updateFilter} 
                                    name={item.name} 
                                    count={38} 
                                    id={item.id}
                                />
                            </div>
                        </li>
                    ))}
                </FlipMove>


            </ul>
        )
    }
    
}

export default SearchFood
