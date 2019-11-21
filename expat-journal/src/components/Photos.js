import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GridHolder, PhotoCard } from './Styled.js';

const initialPhoto = {
    trip_id: 11,
    img_url: '',
    img_caption: '',
    user_id: 1
}

const Photos = (props) => {
    const [photos, setPhotos] = useState([])
    const [newPhoto, setNewPhoto] = useState(initialPhoto)
    useEffect(() => {
        axios.get('https://bw-expat-journal-ls.herokuapp.com/api/photos')
        .then(response => {
            console.log('photos response', response)
          setPhotos(response.data)
        })
    }, [])
    console.log('photos', photos)
    const handleChanges = event => {
        setNewPhoto({ ...newPhoto, [event.target.name]: event.target.value })
      };
    const submitHandler = e => {
        e.preventDefault();
        axios.post('https://bw-expat-journal-ls.herokuapp.com/api/photos', newPhoto)
            .then(res => console.log('photo res', res))
    }
    const deletePhoto = e => {
    //     axios.delete(`https://bw-expat-journal-ls.herokuapp.com/api/photos/${photos.id}`)
    //         .then(console.log('delete photo success'))
    //         .catch(err => console.log(err))
     }
    return (
        <div>
            <GridHolder>
                {photos.map((photo, id) => <PhotoCard key={id} width='500' height='300' src={photo.img_url} onDoubleClick={deletePhoto}/>)}
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