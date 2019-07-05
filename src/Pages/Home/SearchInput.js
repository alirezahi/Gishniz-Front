import React from 'react'
import { Select } from 'antd'
const { Option } = Select

function SearchInput(props){
    return(
        <Select 
            showSearch 
            className="select-district-input w-100"
            onSearch={props.changeSearchValue}
            onChange={props.changeAreaValue}
            placeholder="ناحیه"
        >
            {props.area_list.map(item => (
                <Option value={item['area']}>{item['area']}</Option>
            ))}
        </Select>
    )
}

export default SearchInput