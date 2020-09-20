import React, { Component } from 'react';
import DbCalls from '../../modules/dbCalls'
import { Link } from 'react-router-dom'
import {
    Button, Card, CardText, CardBody,
    CardTitle,
} from 'reactstrap';
import { ButtonGroup } from 'reactstrap';

import './productDetails.css'


export default class LeadDetails extends Component {

    state = {
        leadId: "",
        first_name: "",
        last_name: "",
        email_address: "",
        lead_address: ""
    };

    componentDidMount() {
        DbCalls.getLead(this.props.match.params.leadId)
            .then(lead => {
                console.log(lead)
                this.setState({
                    leadId: lead.id,
                    first_name: lead.first_name,
                    last_name: lead.last_name,
                    email_address: lead.email_address,
                    phone_number: lead.phone_number,
                    lead_address: lead.lead_address,
                })
                console.log(this.state.leadId)
            }
            )

        // DbCalls.getUserProducts(this.props.match.params.userProductId)
        //     .then(userProduct => {
        //         console.log(userProduct)
        //         this.setState({
        //             userProductId: userProduct.id,
        //             userProductName: userProduct.user_product_name,
        //             userProductSalePrice: userProduct.user_product_sales_price,
        //             userProductDescription: userProduct.user_product_description
        //         })
        //         console.log(this.state.userProductId)
        //     })
    }

    render() {
        // console.log(product.id)
        return (
            <div>
                <Card body inverse className="productListCard" style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    {/* <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
                    <CardBody>
                        <CardTitle>
                            <h2>{this.state.first_name} {this.state.last_name}</h2>
                        </CardTitle>
                        <CardText>
                            <p>Email: {this.state.email_address}</p>
                        </CardText>
                        <CardText>
                            <p>Phone: {this.state.phone_number}</p>
                        </CardText>
                        <CardText>
                            <p>Address: {this.state.lead_address}</p>
                        </CardText>

                        <ButtonGroup>
                        <Link to={`/leads/${this.state.leadId}/edit`}>
                            <button>Edit</button>
                        </Link>
                        <Link to={`/leads`}>
                        <button onClick={() =>
                            this.props.deleteLead(this.state.leadId)} className="deleteProductBtn">
                            Delete
                            </button>
                            </Link>
                            </ButtonGroup> 
                    </CardBody>
                </Card>
            </div>

        )
    }
}