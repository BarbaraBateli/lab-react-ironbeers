import { Component } from "react";
import { Link } from "react-router-dom";
import React from 'react';
import axios from 'axios';
import Header from './Header';

class AllBeers extends Component {
  state = {
    beers: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers"
      );
      //console.log(response);
      this.setState({ beers: [...response.data]});
    } catch (err) {
      console.log(err);
    }
  };
  
  render() {
    return (
      <div>
      <Header />
      {this.state.beers.map((beer) => {
        return (
          <div className="card m-3" style={{ maxWidth: '100vw' }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src={beer.image_url}
                className="card-img-top"
                style={{ width: '3rem' }}
              />
              <div class="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{beer.name} </h5>
                  <h6> {beer.tagline}</h6>
                  <p className="card-text">
                    Created By: {beer.contributed_by}
                  </p>
                  <Link to={'/beers/:beerId'} className="btn btn-primary">
                    Go somewhere
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>
);
}
}
export default AllBeers;
  

