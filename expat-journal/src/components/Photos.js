import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GridHolder, PhotoCard } from './Styled.js';

const Photos = () => {
    const [photos, setPhotos] = useState([])
    
    useEffect(() => {
        axios.get('https://bw-expat-journal-ls.herokuapp.com/api/photos')
        .then(response => {
          setPhotos(response.data)
        })
    }, [])
    
    return (
        <GridHolder>
            {photos.map((photo, id) => <PhotoCard key={id} width='700' height='480' src={photo.img_url} />)}
        </GridHolder>
    )
};

export default Photos;