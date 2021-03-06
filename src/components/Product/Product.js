import React, {Component} from 'react';
import './Product.scss'
import Header from "../Header/Header";
import {Col, Container, Row} from "react-bootstrap";
import {getProductById} from "../../http/ProductRequests";
import {withRouter} from "react-router-dom";
import * as ACTIONS from "../../redux/ReducerActions";
import {connect} from "react-redux";
import Alert from 'react-s-alert';



class Product extends Component {
    state = {
        currentProduct: {
            image: "https://via.placeholder.com/500x500.png?text=Loading"
        },
        productFetchError: false,
        reviewsRef: React.createRef()
    };


    componentDidMount() {
        getProductById(this.props.match.params.id).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                this.setState({productFetchError: true})
            }
        }).then(customResponse => {
            if (customResponse != null) {
                this.setState({currentProduct: customResponse.data})
            } else {
                this.setState({productFetchError: true})
            }
        })
    }


    addItemToCartHandler = () => {
        console.log(this.state.currentProduct);
        this.props.addProductToCart({
            amount: 1,
            product: this.state.currentProduct
        })
        Alert.success("Item added to cart", {})
    };


    render() {
        return (
            <React.Fragment>
                <Header showFilters={false}/>
                <Container fluid>
                    <Row className="product-row">
                        <Col xs={12} sm={12} md={6} className="product__image-container">
                            <img src={this.state.currentProduct.image} alt="product"/>
                        </Col>
                        <Col xs={12} sm={12} md={6} className="product__description-container">
                            <h2>{this.state.currentProduct.name}</h2>
                            <div/>
                            <p>${this.state.currentProduct.price}</p>
                            <div onClick={()=> this.addItemToCartHandler()} className="add-to-cart-button"> Add to cart</div>
                        </Col>
                        <Col xs={12} className="next-area-arrow-container">

                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addProductToCart: wrappedProduct => {
            dispatch({type: ACTIONS.ADD_ITEM_TO_CART, wrappedProduct})
        }
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Product));