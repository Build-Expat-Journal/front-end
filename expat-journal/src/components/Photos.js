import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GridHolder, PhotoCard } from './Styled.js';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialPhoto = {
    trip_id: 11,
    img_url: '',
    img_caption: '',
    user_id: 1
}

const Photos = () => {
    const [photos, setPhotos] = useState([])
    const [newPhoto, setNewPhoto] = useState(initialPhoto)

    useEffect(() => {
        axiosWithAuth().get('/photos')
        .then(response => {
            console.log('photos response', response)
          setPhotos(response.data)
        })
    }, [])

    const handleChanges = event => {
        setNewPhoto({ ...newPhoto, [event.target.name]: event.target.value })
      };

    const submitHandler = e => {
        e.preventDefault();
        axios.post('https://bw-expat-journal-ls.herokuapp.com/api/photos', newPhoto)
            .then(res => console.log('photo res', res))
    }

    const deletePhoto = () => {
        // console.log(photos)
        // axios.delete(`https://bw-expat-journal-ls.herokuapp.com/api/photos/${photos.id}`, photos.id)
        //     .then(res => {
        //         console.log('delete photo success', res)
        //     })
        //     .catch(err => console.log(err))
     }

    return (
        <div>
            <GridHolder>
                {photos.map((photo, id) => <PhotoCard key={id} width='500' height='300' id={photo.id} src={photo.img_url} onDoubleClick={deletePhoto}/>)}
            </GridHolder>
            <div className='photo-form'>
                <form onSubmit={submitHandler}>
                    <input 
                        onChange={handleChanges}
                        type='text'
                        name='img_url'
                        value={newPhoto.img_url}
                        placeholder='Image URL'
                    />
                    <input 
                        onChange={handleChanges}
                        type='text'
                        name='img_caption'
                        value={newPhoto.img_caption}
                        placeholder='Image Caption'
                    />
                    <button type='submit'>Add Photo</button>
                </form>
            </div>
        </div>
    )
};

export default Photos;