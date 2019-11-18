import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { GridHolder } from './Styled.js'
import TripCard from './TripCard';


const TripGrid = props => {
  const [newTrip, setNewTrip] = useState([])

  useEffect(() => {
    axios.get('https://bw-expat-journal-ls.herokuapp.com/api/trips')
      .then(response => {
        console.log(response.data);
        setNewTrip(response.data);
      })
  }, []);

  return (
    <GridHolder>
      {newTrip.map((trips, id) => {
        return <TripCard key={id} trips={trips} />;
      })}
    </GridHolder>
  )
};

export default TripGrid;
