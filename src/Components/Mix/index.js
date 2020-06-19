import React from 'react';
import { Line } from 'react-chartjs-2';
import { CountScans, getPromo, countScansByDate } from '../../services/admin'

async function asyncForEach (array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

export default class MixedChart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      promotion: [],
      scansByProduct: [],
      productNames: [],
      dates: []
    }
  }

  async componentDidMount () {
    const { promo_id } = this.props
    // const promo_id="5ee41bd0195a6224f0b3e2da"
    // const promo_id="5ee41d43195a6224f0b3e2dd"
    try {
      const response = await getPromo(promo_id)
      const dataResponse = await response.json()
      this.setState({
        promotion: dataResponse.data.promotion.productInfo
      })
    } catch (error) {
      console.log('Error', error)
    }

    // const products_ids=this.state.promotion.productInfo
    const listOfDates = ["2020-06-10", "2020-06-12", "2020-06-14", "2020-06-16"]
    const listOfNames = []
    let matrix = []
    let productIndex = 0
    let dayIndex = 0
    await asyncForEach(this.state.promotion, async (producto) => {
      await asyncForEach(listOfDates, async (day) => {
        try {
          const response = await countScansByDate(promo_id, producto._id, day)
          const dataResponse = await response.json()
          matrix[productIndex][dayIndex] = dataResponse.data.scans
        } catch (error) {

        }
        dayIndex++
      })
      listOfNames.push(producto.productName)
      dayIndex = 0
      productIndex++
    })
    this.setState({
      scansByProduct: matrix,
      dates: listOfDates,
      productNames: listOfNames
    })
  }


  render () {

    const state = {
      labels: this.state.dates,
      datasets: [
        {
          label: '',
          data: []
        },
        {
          label: '',
          data: []
        }, {
          label: '',
          data: []
          // },{
          //   label:'',
          //   data: []
          // },{
          //   label:'',
          //   data: []
        }]
    }
    let dataindex = 0
    this.state.productNames.forEach(product => {
      state.datasets[dataindex].label = product
      state.datasets[dataindex].data = this.state.scansByProduct[dataindex]
      dataindex++
    });
    return (
      <div>
        <h1>
          {/* {
          state.datasets[0].data=this.state.scans
          }
          {
            state.labels=this.state.productNames
          } */}
        </h1>
        <Line
          data={state}
          options={{
            title: {
              display: true,
              text: 'Escaneos por dia',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        >/</Line>
      </div>
    );
  }
}
