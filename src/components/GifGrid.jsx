import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({categoria}) => {

  const {data:imagenes, loading} = useFetchGifs(categoria);

  return ( 
    <>
      <h4 className="animate__animated animate__fadeIn">{categoria}</h4>
      
      {loading && <p className="animate__animated animate__flash">Cargando...</p>}
      
      <div className="card-grid">
        {
          imagenes.map ( (imagen, index) => (
            <GifGridItem key={`${imagen}-${index}`} {...imagen}/>
          ))
        }
      </div>
    </>
   );
}
 
export default GifGrid;