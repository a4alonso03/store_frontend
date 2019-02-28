import React from 'react';
import Col from "react-bootstrap/Col";
import './ProductListItem.scss'
import {withRouter} from "react-router-dom";
import * as ROUTES from "../../../../routing/Routes";

class ProductListItem extends React.Component {
    render() {
        return (
            <Col xs={6} sm={4} md={3}
                 className="product-list-item"
                 onClick={() => this.props.history.push(ROUTES.PRODUCT + "/" + this.props.id)}>
                <div className="list-item__categories-container">
                    {this.props.categories.map(category =>
                        <div key={category.id}>{category.name}</div>
                    )}
                </div>
                <img src={this.props.image} alt="product example"/>
                <h2>{this.props.name}</h2>
                <p>${this.props.price}</p>
            </Col>
        );
    }
}

export default withRouter(ProductListItem);

