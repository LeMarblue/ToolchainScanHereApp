import React from 'react';
import './AreaParams.scss'

export default class AreaParams extends React.Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-3">
            <h5>Escaneos por dia</h5>
          </div>
          <div className="col-1">
            <h6>Dias:</h6>
          </div>
          <div className="col-1">
            <select className="form-control form-control-sm" id="selectOptios">
              <option value="0">10</option>
                <option value="1">9</option>
                <option value="2">8</option>
                <option value="3">7</option>
                <option value="4">6</option>
                <option value="5">5</option>
                <option value="6">4</option>
                <option value="7">3</option>
                <option value="8">2</option>
            </select>
          </div>
          <div className="col-1">
            <h6>Inicio</h6>
          </div>
          <div className="col-1">
          <input className="form-control form-control-sm" type="text" placeholder="dd" id="inicioD"/>
          </div>
          {/* <div className="col-1">
            <input type="text" />
          </div> */}
          {/* <div className="col-1">

          </div> */}
        </div>
      </div>
    );
  }
}


