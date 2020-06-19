import Header from '../../Components/Header'
import React from 'react';
import Dougnut from '../../Components/DougnutChart'
// import Mixed from '../../Components/Mix'
// import AreaParams from '../../Components/AreaChartParams'
import './Admin.scss'
import NavBarAdmin from '../../Components/NavBarAdmin'


export default class Admin extends React.Component {

  render() {
    const { id } = this.props.match.params
    return (
      <div>
        <Header/>
        {/* <div className='row'>
          <div className='col-md-12 d-flex align-content-center'> */}
            <div className="card">
              <div id="dougnut">
              <Dougnut promo_id={id}/>
              </div>
            </div>
          {/* </div>
        </div> */}
        <NavBarAdmin/>
      </div>
    );
  }
}