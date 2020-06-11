import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';
import { CountScans } from '../../services/admin'

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

export default class DoughnutChart extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     scans: []
  //   }
  //   this._renderScans = this._renderScans.bind(this)
  // }

  // async componentDidMount () {
  //   try {
  //     //const token = window.localStorage.getItem('authToken')
  //     id="5ed9c6182b2fde4d3083caa5"
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


  // _renderPosts () {
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


  render() {
    return (
      <div>
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