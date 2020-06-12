import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';
import { CountScans } from '../../services/admin'

// const state = {
//   labels: ['Leche', 'yoghurt', 'helado'],
//   datasets: [
//     {
//       label: 'Productos',
//       backgroundColor: [
//         '#B21F00',
//         '#C9DE00',
//         '#2FDE00',
//       ],
//       hoverBackgroundColor: [
//       '#501800',
//       '#4B5000',
//       '#175000',
//       ],
//       data: [65, 59, 80]
//     }
//   ]
// }
// state.datasets[0].data=[100,100,100]
// console.log("datos")
// console.log()

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

export default class DoughnutChart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      promotion: "",
      products: [],
      scans:[]
    }
    //this._renderScans = this._renderScans.bind(this)
  }


  // componentDidMount () {
  //   fetch('http://localhost:8082/querys/countScansByProduct/5ed9c6182b2fde4d3083caa5')
  //     .then(response => response.json())
  //     .then(({ data: { scans } }) => {
  //       const formatedPromotions = scans
  //       this.setState({
  //         scans: formatedPromotions
  //       })
  //     })
  // }
  

  // async componentDidMount () {
  //   try {
  //     //const token = window.localStorage.getItem('authToken')
  //     const id="5ed9c6182b2fde4d3083caa5"
  //     const response = await CountScans(id)
  //     const dataResponse = await response.json()
  //     console.log(dataResponse.data.scans)
  //     this.setState({
  //       scans: dataResponse.data.scans
  //     })
  //   } catch (error) {
  //     console.log('Error', error)
  //   }
  // }

  async componentDidMount () {
    const listOfIds=["5ed9c4632b2fde4d3083caa3","5ed9c6182b2fde4d3083caa5"]
    const listOfScans=[]
    //await asynclistOfIds.forEach(element => {
    await asyncForEach(listOfIds, async (element) => {
      //const id_prod = element
      try {
        const response = await CountScans(element)
        const dataResponse = await response.json()
        console.log(dataResponse.data.scans)
        listOfScans.push(dataResponse.data.scans)
      } catch (error) {
        console.log('Error', error)
      }
    })
    this.setState({
      scans: listOfScans
    })
  }

  // _renderScans () {
  //   const { posts } = this.state
  //   return posts.map(({ _id, category, title, description, author, publication_date, estimated_time, image }) => (
  //     <Post
  //       key={_id}
  //       id={_id}
  //       category={category}
  //       title={title}
  //       description={description}
  //       author={author}
  //       publication_date={publication_date}
  //       estimated_time={estimated_time}
  //       image={image}
  //     />
  //   ))
  // }


  // componentDidMount () {
  //   fetch('http://localhost:8082/promotions')
  //     .then(response => response.json())
  //     .then(({ data: { promotion } }) => {
  //       const formatedPromotions = promotion.map(promo => {
  //         return {
  //           id: promo._id,
  //           ...promo
  //         }
  //       })
  //       this.setState({
  //         promoList: formatedPromotions
  //       })
  //     })
  // }



  render() {
    const state = {
      labels: ['Leche', 'yoghurt', 'helado'],
      datasets: [
        {
          label: 'Productos',
          backgroundColor: [
            '#B21F00',
            '#C9DE00',
            '#2FDE00',
          ],
          hoverBackgroundColor: [
          '#501800',
          '#4B5000',
          '#175000',
          ],
          data: [65, 59, 80]
        }
      ]
    }
    return (
      <div>
        <h1>
          {state.datasets[0].data=this.state.scans}
        </h1>
        <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:'Escaneos por producto',
              fontSize:25
            },
            legend:{
              display:true,
              position:'left'
            }
          }}
        />
      </div>
    );
  }
}