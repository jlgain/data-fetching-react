import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs';

const GifList = (props) => 
{ 
  // Declare variable to store the data object from props...
  // Use map method to iterate over array to return a 
  // gif component for each gif/object in the array
  const results = props.data;

  // Use conditional rendering dependent on results array
  let gifs;
  if (results.length > 0)
  {
    gifs = results.map(gif => <Gif url={gif.images.fixed_height.url} key={gif.id} />);
  }
  else
  {
    gifs = <NoGifs />
  }

  return (
    <ul className="gif-list">
      {gifs}
    </ul> 
  );
}

export default GifList;
