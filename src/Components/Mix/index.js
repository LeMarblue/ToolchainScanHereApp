import React from 'react';
import {Line} from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Leche',
      backgroundColor: '#B21F00',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    },{
      label: 'yoghurt',
      backgroundColor: '#C9DE00',
      borderColor: 'rgba(1,0,0,1)',
      borderWidth: 2,
      data: [95, 69, 70, 31, 96]
    },{
      label: 'Helado',
      backgroundColor: '#2FDE00',
      borderColor: 'rgba(1,0,0,1)',
      borderWidth: 2,
      data: [115, 61, 80, 81, 126]
    }
  ]
}

export default class MixedChart extends React.Component {
  render() {
    return (
      <div>
        {/* <h2>Escaneos por dia</h2> */}
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Escaneos por dia',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}
