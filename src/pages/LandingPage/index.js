import React, { Component } from 'react'
import svgScan from './images/ScanHere.svg'
import HOME from './images/HOME.png' 
import homes from './images/HOMES.png' 
import cupon from './images/cupon.svg'
import charts from './images/Charts.svg'
import escaneo from './images/escaneo.svg'
import codigoqr from './images/codigo-qr.svg'
import album from './images/album.svg'
import phone from './images/icon-phone.svg'
import email from './images/icon-email.svg'

import {
  Link
} from 'react-router-dom'
// import Header from '../../Components/Header'

// css
import './landing.scss'

export default class index extends Component {
  render () {
    return (
      <div>
      <div className="fondo">
          <div className="container">
              <header className="row">
                  <div className="col-6 col-md-4 ">
                      <img  src={svgScan} alt=""/>
                  </div>
                  <div className="col-6 col-md-8 text">
                      <div className="d-flex justify-content-end">
                        <Link to='/signin'>
                          <a href="#"className="mx-1 mx-md-3">Sign in</a>
                        </Link>
                        <Link to='/login'>
                          <a href="#"className="mx-1 mx-md-3">Log in</a>
                        </Link>
                      </div>
                  </div>    
              </header>
          <div className="banner">
              {/* <div className="img"> */}
                  <div className='graph-dash'>
                      <img src={HOME}alt=""/>
                  </div>
              {/* </div>  */}
              <h2 className='pb-3'>Administra tus promociones facíl y rapido,<br/> accesible donde sea.</h2>
              <p className='pb-3'>Scan Here te ayuda a crear y gestionar promociones para tu empresa o noegocio.<br/>
              Tendras acceso al comportamiento de tus promociones de manera inmediata<br/>y donde sea que te encuentres</p>
          </div>
          
      </div>
      </div>


  <div className="services-container">
      <div className="container">
          <div className="row">
              <div className="col-12 col-md-6">
                  <div className="d-flex flex-column services">
                      <img src={cupon} className="rounded mx-auto d-block" alt=""/>
                      <h5>Crea Promociones facíl y rapido</h5>
                      <p>Da de alta productos y premios para tus promociones, conoce cuantos escaneos lleva tu promocion, al instante!!.</p>

                  </div>
              </div>
              <div className="col-12 col-md-6">
                  <div className="d-flex flex-column services">
                      <img src={charts} className="rounded mx-auto d-block" alt=""/>
                      <h5>Gráficas fáciles de entender</h5>
                      <p>Tendras el conteo al instante de los escaneos de tus promociones, tendrás conteos por producto, y conteos por día!</p>
      
                  </div>
              </div>
              <div className="col-12 col-md-6">
                  <div className="d-flex flex-column services">
                      <img src={escaneo} className="rounded mx-auto d-block" alt=""/>
                      <h5>Escaneos faciles pára tus usuarios</h5>
                      <p>Un flujo facil de entender, tus usuarios tendran un seguimiento de sus escaneos y promociones realizadas.</p>

                  </div>
              </div>
              <div className="col-12 col-md-6">
                  <div className="d-flex flex-column services">
                      <img src={codigoqr}  className="rounded mx-auto d-block" alt=""/>
                      <h5>Códigos QR únicos</h5>
                      <p>Los codigos que usa Scan Here son únicos, lo que permite que solo se pueda escanear un producto a la vez, y evitar fraudes o que mas de un usuario escaenee el mismo producto.</p>

                  </div>
              </div>
          </div>
      </div>
  </div>
      

  {/* <!--INFO--> */}
  <div className="info">
      <div className="container">
          <div className="row">
              <div className="admin col-12 col-md-6 d-flex justify-content-center" >
                <img src={homes} className="" alt="" width=""/>
              </div>
              <div className="col-12 col-md-6 d-flex justify-content-center" >
                  <div className="my-auto d-flex flex-column">
                      <h5>Administra tus promociones, donde te encuentres</h5>
                      <p>Como administrador, ScanHere te permite dar de alta productos y crear promociones.
                        Tambien puedes ver mediante graficas el desempeño de tu promocion.
                      </p>
                      <p>
                      ScanHere te muestra los conteos de escaneos por producto y por promocion.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div className="info2">
    <div className="container">
          <div className="row user">
            <div className="col-12 col-md-6 d-flex justify-content-center" >
                <div className="my-auto d-flex flex-column">
                    <h5>Tus usuarios podrán escanear y ganar premios facilmente!</h5>
                    <p>
                      {/* <!-- Tú decides cuántos escaneos. 
                      Cuando los juntan, ganan. 
                      Como un álbum de estampas --> */}
                      ScanHere es una app donde tus usuarios podran escanear tus productos 
                      y participar en tus promociones.
                    </p>
                    <p>
                    Es como llenar un album de estampas.
                  </p>
                </div>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center" >
              <img src={album} className="" alt="" width=""/>
            </div>
        </div>
      </div>
  </div>
    <div className="footer">
      <div className="container">
        <div className="row">
            <div className="col-12 col-md-4 d-flex justify-content-center">
                <div className="logo-loc">
                  <img src={svgScan} alt=""/>
                </div>
            </div>
            <div className="col-12 col-md-4 contactos">
              <div className="row d-flex justify-content-center">
                  <div className="iconos">
                      <img src={phone} alt=""/>
                  </div> 
                  <div className="link">
                      <a href="#">+52-777-157-72-73</a>
                  </div>   
              </div>
              <div className="row d-flex justify-content-center">
                  <div className="iconos">
                      <img src={email} alt=""/>
                  </div> 
                  <div className="link">
                      <a href="#">scan@scanhere.com</a>
                  </div>   
                    
              </div>
            </div>
          {/* <div className="col-12 col-md-4 redes d-flex justify-content-around">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div> */}
        </div>
      </div>
    </div>
 
</div>
    )
  }
}
