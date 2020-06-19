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
        <div className='row'>
          <div className='col-lg-6 col-md-12'>
            <div className="card">
              <div id="dougnut">
              <Dougnut promo_id={id}/>
              </div>
            </div>
          </div>
          {/* <div className='col-lg-6 col-md-12'>
            <AreaParams/>
            <Mixed promo_id={id}/>
          </div> */}
        </div>
        <NavBarAdmin/>
      </div>
    );
  }
}