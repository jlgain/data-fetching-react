import React, { Component } from 'react';

export default class SearchForm extends Component {
  
  state = 
  {
    searchText: ''
  }
  
  // Function used to change the state of searchText field
  // with user input
  onSearchChange = e => 
  {
    this.setState({ searchText: e.target.value });
  }
  
  // Function to handle user form submit after 
  // text entered in search field
  handleSubmit = e => 
  {
    e.preventDefault();

    // Call/invoke onSearch function 
    this.props.onSearch(this.query.value);

    // Reset searchText field after form submitted
    e.currentTarget.reset();
  }
  
  render() 
  {  
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <label className="is-hidden" htmlFor="search">Search</label>
        {/* Use ref to access the value of the input field,
          and refs allow you to get direct access to a DOM element,
          and you dont want a state that is dependent on another state.
          The ref attribute takes a callback function when used on an HTML element. */}
        <input type="search" 
               onChange={this.onSearchChange}
               name="search" 
               ref={(input) => this.query = input}
               placeholder="Search..." />
        <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
      </form>      
    );
  }
}