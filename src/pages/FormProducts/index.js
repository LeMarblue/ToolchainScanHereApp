import React, { Component } from 'react'
import Header from '../../Components/Header'
import { Form } from 'react-bootstrap'

export default class FormProducts extends Component {
  constructor (props) {
    super(props)
    this.state = {
      Nombre: '',
      SKU: '',
      Precio: '',
      Moneda: ''
    }
  }

  handleInput ({ target: { name, value } }) {
    this.setState({
      [name]: value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    console.log('envoandp datos')
    const { Nombre, SKU, Precio, Moneda } = this.state
    const dataCredentials = {
      Nombre,
      SKU,
      Precio,
      Moneda
    }
    this.props.validateCredentials(dataCredentials)
  }

  render () {
    const { Nombre, SKU, Precio, Moneda } = this.state
    return (
      <div className='container'>
        <Header />
        <div className='form'>
          <div className='my-4 title d-flex justify-content-center font-weight-bold'>
            <p>Añadir productos</p>
          </div>
          <Form className='px-4'>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label className='d-flex justify-content-start'>Nombre</Form.Label>
              <Form.Control type='nombre' id='nombre' className='form-control mb-1' placeholder='  Nombre   ' value={Nombre} onChange={this.handleInput} />
              <Form.Label className='d-flex justify-content-start'>SKU</Form.Label>
              <Form.Control type='sku' id='sku' className='form-control mb-1' placeholder='  SKU  ' value={SKU} onChange={this.handleInput} />
              <Form.Label className='d-flex justify-content-start'>Precio</Form.Label>
              <Form.Control type='precio' id='precio' className='form-control mb-1' placeholder='  $ 0.00  ' value={Precio} onChange={this.handleInput} />
              <Form.Label className='d-flex justify-content-start'>Moneda</Form.Label>
              <Form.Control type='moneda' id='moneda' className='form-control mb-1' placeholder='  MXN  ' value={Moneda} onChange={this.handleInput} />
            </Form.Group>
            <button type='submit' className='my-5 mt-3 px-4 button py-2'>Registrar producto</button>
          </Form>
        </div>
      </div>
    )
  }
}
