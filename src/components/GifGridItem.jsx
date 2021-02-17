import React from 'react';

const GifGridItem = (imagen) => {
  
  const {id, title, size} = imagen;
  
  return ( 
    <div className="card animate__animated animate__fadeIn">
      <img src={size} alt={title}/>
      <p>{title}</p>
    </div>
   );
}
 
export default GifGridItem;