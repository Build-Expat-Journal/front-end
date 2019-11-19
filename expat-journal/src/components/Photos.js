import React, { useState } from 'react';
import axios from 'axios';
import { GridHolder, PhotoCard } from './Styled.js';

const Photos = () => {
    const [photos, setPhotos] = useState([])

    axios.get('https://bw-expat-journal-ls.herokuapp.com/api/photos')
    .then(response => {
      setPhotos(response.data)
    })
    return (
        <GridHolder>
            {photos.map((photo) => <PhotoCard width='700' height='480' src={photo.img_url} />)}
        </GridHolder>
    )
};

export default Photos;