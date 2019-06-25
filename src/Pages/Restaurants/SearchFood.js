import React from 'react'
import Checkbox from '../../General/Checkbox'

function SearchFood() {
    return (
        <ul class="list-group">
            <li class="list-group-item disabled">فیلتر براساس انواع غذا</li>
            <li class="list-group-item">
                <div class="form-group">
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="جستجوی دسته‌بندی غذاها"/>
                </div>
                <div class="form-check">                        
                    <Checkbox />
                </div>
            </li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
        </ul>
    );
}

export default SearchFood;
