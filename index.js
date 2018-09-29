import React from 'react';
import ReactDOM from 'react-dom'
import {FilterableProductTable} from './src/FilterableProductTable'


const App = () => (
    <FilterableProductTable />
)

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
}