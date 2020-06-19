import React, { Component } from "react";
import Header from "../../Components/Header";
import {createProduct} from '../../services/admin'

export default class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      sku: "",
      price: "",
      currency:"",
      succes:false
    }
    this.handlerInput = this.handlerInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handlerInput({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  async handleSubmit (event) {
    event.preventDefault()
    const { currency, price, sku, productName } = this.state;
    const data = {
      productName,
      sku,
      price,
      currency
    }
    const response = await createProduct(data)
    const responseJSON = await response.json()
    if (responseJSON.success) {
      this.setState({
        success: true
      })
    } else if (!responseJSON.success) {
      this.setState({
        success: false
      })
    }
  }

  render() {
    const { currency, price, sku, productName } = this.state;
    return (
      <div className="Container">
        <div>
          <Header
          />
          <div className='row d-flex justify-content-center'>
            <form onSubmit={this.handleSubmit} className='border border-black p-5 shadow p-3 mb-5 bg-white rounded'> 
            <div className='col-lg-6 col-md-12'>
              <input
                placeholder="Nombre del producto"
                value={productName}
                onChange={this.handlerInput}
                name="productName"
                class='form-comtrol'
              />
              </div>
              <div className='col-lg-6 col-md-12'>
              <input
                type='number'
                placeholder={"SKU"}
                value={sku}
                onChange={this.handlerInput}
                name="sku"
              />
              </div>
              <div className='col-lg-6 col-md-12'>
              <input
                type='number'
                placeholder={"Precio"}
                value={price}
                onChange={this.handlerInput}
                name="price"
              />
              </div>
              <div className='col-lg-6 col-md-12'>
              <input
                type='string'
                placeholder={"MXN"}
                value={currency}
                onChange={this.handlerInput}
                name="currency"
              />
              </div>
              <div className="col-lg-6 col-md-12 d-flex justify-content-center"> 
                  {/* <div className='row d-flex justify-content-center'>
                    <div className='col-6'> */}
                      <button type='submit' className='m-3 px-4 button py-2' >REGISTRAR PRODUCTO</button>
                    {/* </div>
                  </div> */}

                </div>
            </form>
          </div>
          
        </div>
      </div>
    );
  }
}
