import React, { Component } from "react";
import Header from "../../Components/Header";
import { getProducts,createPromo} from '../../services/admin'


export default class PromoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo:[],
      numberOfScans:0,
      promoStarts:"",
      promoEnds:"",
      state:"",
      prize:"",
      selectedProduct: "",
      state:"activo",
      hasMadeAPromo: false,
      products:[]
    };
    this.handlerInput = this.handlerInput.bind(this);
  }

  async componentDidMount () {
    try {
      //const token = window.localStorage.getItem('authToken')
      //const response = await getProducts(token)
      const response = await getProducts()
      const dataResponse = await response.json()
      this.setState({
        products: dataResponse.data.product
      })
    } catch (error) {
      console.log('Error', error)
    }
  }

  _renderProducts () {
    const { products } = this.state
    return products.map(({ productName,sku,_id}, index) => (
      <option value={_id}>Nombre: {productName} , SKU:{sku}</option>
    ))
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
    const response = await createPromo(data)
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
    const { prize,promoEnds,promoStarts, numberOfScans, productInfo } = this.state;
    return (
      <div className="Container">
        <div>
          <Header
          />
          <div>
            <form onSubmit={this.handleSubmit} className='border border-black p-5 shadow p-3 mb-5 bg-white rounded'>
              <div className="row ">
                  <div className="col-12 "> 
                  <input
                    type='number'
                    placeholder={"Numero de escaneos"}
                    value={numberOfScans}
                    onChange={this.handlerInput}
                    name={"numberOfScans"}
                  />
                  </div>
                  <div className="col-12 d-flex justify-content-center "> 
                  <select className="form-control form-control-sm" id="selectOptios" onChange={this.handleInput} value={this.state.value}>
                    <option value="none" selected disabled hidden> 
                      Escoje un Producto
                    </option> 
                    { this._renderProducts()}
                  </select>
                  </div>
                  <div className="col-12 "> 
                  <input
                    type='date' id='start' name='trip-start' min='2020-06-17' max='2020-12-31'
                    placeholder={"MXN"}
                    value={promoStarts}
                    onChange={this.handlerInput}
                    name={"promoStarts"}
                  />
                  </div>
                  <div className="col-12 "> 
                  <input
                    type='date' id='end' name='trip-end' min='2020-06-17' max='2020-12-31'
                    placeholder={"Start"}
                    value={promoEnds}
                    onChange={this.handlerInput}
                    name={"promoEnds"}
                  />
                  </div>
                  <div className="col-12 "> 
                  <input
                    type='string'
                    placeholder={"Premio"}
                    value={prize}
                    onChange={this.handlerInput}
                    name={"prize"}
                  />
                  </div>
                  <div className="col-12 d-flex justify-content-center"> 
                  {/* <div className='row d-flex justify-content-center'>
                    <div className='col-6'> */}
                      <button type='submit' className='m-3 px-4 button py-2' onClick={this.handleButton}>REGISTRAR PROMOCIÓN</button>
                    {/* </div>
                  </div> */}

                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
