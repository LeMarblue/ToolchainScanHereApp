import React, { Component } from "react";
import Header from "../../Components/Header";
import { getProducts,createPromo} from '../../services/admin'
import NavBarAdmin from '../../Components/NavBarAdmin'


export default class PromoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sku:"",
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
      const token = window.localStorage.getItem('authUserToken')
      //const response = await getProducts(token)
      const response = await getProducts(token)
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
  // arrayvar: this.state.arrayvar.concat([newelement])
  handlerInput({ target: { name, value } }) {
    console.log(name)
    console.log(value)
    if (name==""){

      this.setState({
        productInfo: [value],
      });
    }
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    console.log("estadooo")
    console.log(this.state)
    const {  prize, productInfo, promoStarts, promoEnds,numberOfScans} = this.state;

    const data = {
      numberOfScans,
      productInfo,
      prize,
      promoStarts,
      promoEnds,
      state:"activo"
    }
    const token = localStorage.getItem('authUserToken')
    const response = await createPromo(data,token)
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
                  <select className="form-control form-control-sm" id="selectOptios" onChange={this.handlerInput} value={this.state.value}>
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
                      <button type='submit' className='m-3 px-4 button py-2' onClick={this.handleSubmit}>REGISTRAR PROMOCIÓN</button>
                    {/* </div>
                  </div> */}

                </div>
              </div>
            </form>
          </div>
        </div>
        <NavBarAdmin/>
      </div>
    );
  }
}
