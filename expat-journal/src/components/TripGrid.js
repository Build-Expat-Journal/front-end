import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { GridHolder } from './Styled.js'
import TripCard from './TripCard';

const TripGrid = () => {
  const [trips, setTrip] = useState([])

  useEffect(() => {
    axios.get('https://bw-expat-journal-ls.herokuapp.com/api/trips')
      .then(response => {
        console.log(response.data);
        setTrip(response.data);
      })
  }, []);

  const handleClick = e => {
    return <Redirect to='/photos' />
  };

  return (
    <GridHolder onClick={handleClick}>
      {trips.map((trips, id) => {
        return <TripCard key={id} trips={trips} />;
      })}
    </GridHolder>
  )
};

export default TripGrid;
