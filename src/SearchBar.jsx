import React, { Component } from 'react';

export class SearchBar extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <section>
                <input type="text" />
                <input type="checkbox" />
                <label>Only show products in stock</label>
            </section>
        )
    }
}



