import React, {useState} from 'react';
import AddCategories from './AddCategories';
import GifGrid from './GifGrid';

const GifExpertApp = () => {

  //const categorias = ['One Punch', 'Samurai shadow', 'Dragon Ball'];

  const [categorias, guardarCategorias] = useState(['One punch']);

  return ( 
    <>
      <h2>
        GifExpertApp
        <hr/>
        <AddCategories guardarCategorias={guardarCategorias}/>
        <ul>
          {
            categorias.map( (categoria, index) => 
              <GifGrid key={index} categoria = {categoria}/>
            )
          }
        </ul>
      </h2>
    </>
   );
}
 
export default GifExpertApp;
