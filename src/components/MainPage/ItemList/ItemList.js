import React, {Component} from 'react';
import {Container, Row} from "react-bootstrap";
import {getAllProductsRequest} from "../../../http/ProductRequests";
import './ItemList.scss'
import ProductListItem from "./ProductListItem/ProductListItem";
import {withRouter} from "react-router-dom";

class ItemList extends Component {
    state = {
        productList: [],
        productLoadError: false
    };

    componentDidMount() {
        getAllProductsRequest().then(response => {
            if(response.ok) {
                return response.json();
            }else {
                this.setState({productLoadError: true});
            }
        }).then(customResponse =>{
            if(customResponse != null){
                this.setState({productList: customResponse.data});
            }else {
                this.setState({productLoadError: true});
            }
        })
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
            </div>
        );
    }
}

export default withRouter(ItemList);

