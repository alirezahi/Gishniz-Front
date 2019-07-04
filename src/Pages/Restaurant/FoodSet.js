import React from 'react'
import { Menu, Affix } from 'antd'
import { Link as ScrollLink, Element, Events, scrollSpy, scroller } from 'react-scroll'

function FoodSet(props){
    return (<Affix offset={100}>
        <Menu
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            className="bg-transparent"
        >
            {props.foodsets.map(foodset => (
                <Menu.Item>
                    <ScrollLink to={foodset} smooth={true} offset={-50}>
                        {foodset}
                    </ScrollLink>
                </Menu.Item>
            ))}
        </Menu>
    </Affix>)
}

export default FoodSet