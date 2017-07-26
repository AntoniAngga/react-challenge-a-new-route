import React from 'react';
import axios from 'axios';

class DetailStarwars extends React.Component {
  constructor() {
      super()
      this.state = {
        data_detail : ''
      }
  }
  
  componentDidMount() {
    axios.get(`https://swapi.co/api/people/${this.props.match.params.id}`)
    .then(result => {
      this.setState({data_detail: result.data})
      console.log(this.state.data_detail)
    }).catch(err => {
      console.log(err)
    })
  }
  
  Starship(){
    let data = this.state.data_detail;
    return(
      <div>
        <h5> Name : {data.name}</h5>
        <h5> Height : {data.height}</h5>
        <h5> Skin color : {data.skin_color}</h5>
        <h5> Eye Color : {data.eye_color}</h5>
      </div>
    )
  }
  
  render () {
    return (
      <div>
        { (this.state.data_detail==='') ? "Waiting" : this.Starship()}
      </div>
    )
  }
  
}

export default DetailStarwars;