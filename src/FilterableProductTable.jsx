import React, { Component } from 'react';
import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable';
import data from '../data.json';

const category_map = data.data.map(el => el.category)

export class FilterableProductTable extends Component {
    
    getCategories() {
        Array.from(new Set(category_map))
    }
    render() {
        return (
            <section>
                <SearchBar data={data} />
                <ProductTable data={this.getCategories()} />
            </section>
        ) 
    }
}