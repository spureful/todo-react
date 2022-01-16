import React, {useState} from 'react';
import PropTypes from 'prop-types';


function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue)
  return {
    use: {
      value,
      onChange: e => setValue(e.target.value)
    },
    clearValue: () => setValue(''),
    value: () => value
  }   
}
function AddToDo({addToDo}) {
  const input = useInput(); 

  function formSubmit(e) {
    e.preventDefault();
    if(input.value().trim()) {
      addToDo(input.value());
     input.clearValue()
    }
  }
  return (
    <form onSubmit={formSubmit}>
      <input placeholder='введите текст' {...input.use}/>
      <button type="submit"> add</button>  
    </form> 
  )
}
AddToDo.propTypes = {
  addToDo: PropTypes.func.isRequired
}
export default AddToDo