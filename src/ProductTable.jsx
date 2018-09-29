import React, { Component } from 'react';
import { ProductCategoryRow } from './ProductCategoryRow';

export class ProductTable extends Component {
    constructor(props) {
        super();
        this.state = {};
    }
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                
                </thead>
                <tbody>
                    <ProductCategoryRow />
                </tbody>
            </table>
        )
    }
}