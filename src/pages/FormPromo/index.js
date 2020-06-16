import React, { Component } from 'react'
import Header from '../../Components/Header'
import { Form } from 'react-bootstrap'

export default class FormPromo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      NombrePromo: '',
      Productos: '',
      NumEscan: '',
      InicioPromo: '',
      FinPromo: '',
      Premio: ''
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
    const { NombrePromo, Productos, NumEscan, InicioPromo, FinPromo, Premio } = this.state
    const dataCredentials = {
      NombrePromo,
      Productos,
      NumEscan,
      InicioPromo,
      FinPromo,
      Premio
    }
    this.props.validateCredentials(dataCredentials)
  }

  render () {
    const { NombrePromo, Productos, NumEscan, InicioPromo, FinPromo, Premio } = this.state
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
              <Form.Control type='nombre' id='nombre' className='form-control mb-1' placeholder='Nombre' value={NombrePromo} onChange={this.handleInput} />
              <Form.Label className='d-flex justify-content-start'>Productos</Form.Label>
              <Form.Control type='productos' id='productos' className='form-control mb-1' placeholder='  Producto  ' value={Productos} onChange={this.handleInput} />
              <Form.Label className='d-flex justify-content-start'>Número de escaneos</Form.Label>
              <Form.Control type='numEscanos' id='numEscaneos' className='form-control mb-1' placeholder='  Numero de escaneos  ' value={NumEscan} onChange={this.handleInput} />
              <Form.Label className='d-flex justify-content-start'>Inicio de promociones</Form.Label>
              <Form.Control type='date' id='start' name='trip-start' min='2019-06-01' max='2020-12-31' className='form-control mb-1' placeholder='  Inicio  ' value={InicioPromo} onChange={this.handleInput} />
              <Form.Label className='d-flex justify-content-start'>Fin de promociones</Form.Label>
              <Form.Control type='date' id='start' name='trip-start' min='2018-01-01' max='2018-12-31' className='form-control mb-1' placeholder='  Inicio  ' value={FinPromo} onChange={this.handleInput} />
              <Form.Label className='d-flex justify-content-start'>Premio</Form.Label>
              <Form.Control type='' id='Inicio de promos' className='form-control mb-1' placeholder='  Inicio  ' value={Premio} onChange={this.handleInput} />
            </Form.Group>
            <button type='submit' className='my-5 mt-3 px-4 button py-2'>Registrar producto</button>
          </Form>
        </div>
      </div>
    )
  }
}
