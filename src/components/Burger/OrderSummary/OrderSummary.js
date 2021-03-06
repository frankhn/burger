import React, { Component } from 'react'
import Aux from '../../../HOC/Aux/Aux';
import Button from '../../UI/Button/button'

class OrderSummary  extends Component {

    // componentDidUpdate() {
    //     console.log('Loaded OrderSummary')
    // }
    render() {
            const ingredientsSummary = Object.keys(this.props.ingredients)
    .map(igKey => {
        return (
        <li key={igKey}>
        <span style={{ textTransform: 'capitalize'}}>{igKey}</span>
        : {this.props.ingredients[igKey]}
        </li>)
    })
        return (
            <Aux>
        <h3> Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
            {ingredientsSummary}
        </ul>
        <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
        <p>Continue To Checkout</p>
        <Button btnType='Danger' clicked={this.props.purchaseCancelled}>CANCEL</Button>
        <Button btnType='Success' clicked={this.props.purchaseContinued}>CONTINUE</Button>
    </Aux>
        )
    }
}

export default OrderSummary;