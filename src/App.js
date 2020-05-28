import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component 
{
  
  constructor() 
  {
    super();
    this.state = {
      gifs: [],
      loading: true
    };
  } 

  // Setup Data fetching for app
  // This is called immediately after a component 
  // is added to the DOM. So, this is a good place to create the 
  // request for external data to be loaded
  // componentDidMount()
  // {
  //   // fetch('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
  //   //   .then(response => response.json())
  //   //   .then(responseData =>
  //   //     {
  //   //       this.setState({gifs: responseData.data});
  //   //     })
  //   //   .catch(error => 
  //   //     {
  //   //       console.log('Error fetching and parsing data', error);
  //   //     });
  // }

  componentDidMount()
  {
    // Call performSearch function 
    this.performSearch();
  }

  // Create function/method that fetches the data and 
  // updates the gif state when called
  performSearch = (query = 'cats') =>
  {
    // Use Search Endpoint (url) from gify.api that returns a search query
    // and use a 24 gif limit per search
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
      .then(response => 
      {
        this.setState({
          gifs: response.data.data,
          loading: false
        });
      })
      .catch(error => 
      {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() 
  { 
    console.log(this.state.gifs);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            {/* Below uses the prop onSearch which passes the performSearch function 
                to the SearchForm component and invokes it when onSearch is called */}
            <SearchForm onSearch={this.performSearch} />      
          </div>   
        </div>    
        <div className="main-content">
        {/* If loading state is true render a paragraph text of Loading...
          otherwise, render gif list component */}
          {(this.state.loading) ? <p>Loading...</p> : <GifList data={this.state.gifs} />}
        </div>
      </div>
    );
  }
}
