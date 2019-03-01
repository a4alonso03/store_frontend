import React, {Component} from 'react';
import {Container, Row} from "react-bootstrap";
import {getNthProductsPage} from "../../../http/ProductRequests";
import './ItemList.scss'
import ReactPaginate from 'react-paginate';

import ProductListItem from "./ProductListItem/ProductListItem";
import {withRouter} from "react-router-dom";

class ItemList extends Component {
    state = {
        productList: [],
        productLoadError: false
    };

    handlePageClick = data => {
        let selected = data.selected;
        let offset = Math.ceil(selected * this.props.perPage);

        this.setState({offset: offset}, () => {
            this.fetchProductPage(selected)
        });
    };

    fetchProductPage = page => {
        getNthProductsPage(page).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                this.setState({productLoadError: true});
            }
        }).then(customResponse => {
            if (customResponse != null) {
                this.setState({productList: customResponse.data.content});
                this.setState({productListSize: customResponse.data.totalElements})
            } else {
                this.setState({productLoadError: true});
            }
        })
    }

    componentDidMount() {
        this.fetchProductPage(0);
    }

    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        {this.state.productList.map(product =>
                            <ProductListItem
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                image={product.image}
                                categories={product.categories}
                            />
                        )}
                    </Row>
                </Container>
                <div className="paginate-container">
                    <ReactPaginate
                        previousLabel={'<'}
                        nextLabel={'>'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={this.state.pageCount}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={1}
                        onPageChange={this.handlePageClick}
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'}
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(ItemList);

