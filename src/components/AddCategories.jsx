import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategories = ({guardarCategorias}) => {

  const [valor, guardarValor] = useState('');

  const cambioValor = (e) => {
    guardarValor(e.target.value);
  }

  const handleSubmit= (e) => {
    e.preventDefault();
    if (valor.trim().length >2){
      guardarCategorias(categorias => [valor, ...categorias]);
      guardarValor('');
    }
  }

  return ( 
    <form onSubmit={handleSubmit}>
      <input type="text" value={valor} onChange={cambioValor}/>
      {/* <button>Añadir</button> */}
    </form>
   );
}

AddCategories.propTypes = {
  guardarCategorias: PropTypes.func.isRequired
}
 
export default AddCategories;