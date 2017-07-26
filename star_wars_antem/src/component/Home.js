import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      data_api: '',
    }
  }
  
  componentDidMount() {
    axios.get("https://swapi.co/api/people")
    .then(data => {
      this.setState({data_api: data.data.results})
      console.log(data);
    }).catch(err => {
      console.log(err)
    })
  }
  
  New_Person () {
    let data = this.state.data_api
    return (
      <div>
        <tr>
          <th> Name </th>
          <th> Gender </th>
          <th> Age </th>
        </tr>
          { data.map((results,index) => {
              return (
                <tr>
                  <td> <Link to= {`/${index+1}`}> {results.name} </Link></td> 
                  <td> {results.gender} </td> 
                  <td> {results.birth_year} </td>
                </tr>
              )
            })
          }
      </div>
    )
  }
  
  render () {
    return (
        <div>
          { (this.state.data_api==='') ? "Waiting" : this.New_Person()}
        </div>
    )
  }
}

export default Home;