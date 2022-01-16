import PropTypes from 'prop-types';
import Context from '../context';
import React, { useContext } from 'react';

function ToDoItem(props) {
  const {removeToDo} = useContext(Context);

  function getBgColor() {
    return props.todo.completed ? 'rgb(173, 231, 133)' : '#fff' 
  }
  const styles = {
    li: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '5px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      marginBottom: '5px',
      fontWeight: 'bold',
      backgroundColor: getBgColor()
    },
    checkbox: {
      marginRight: '8px'
    },
    index: {
      fontWeight: 'bold',
      marfinRight: '3px'
    },
    removeBtn: {
      cursor: 'pointer',
      border: 'none',
      borderRadius: '50%',
      backgroundColor: '#000',
      color: '#fff'
    }
  }   
  return (
    <li style={styles.li}> 
      <div > 
      <input type='checkbox' style={styles.checkbox} checked={props.todo.completed} onChange={() => props.toggleTodo(props.todo.id)}/>
      <span > 
        <span style={styles.index}>{props.index} </span>
        <span >{props.todo.title}</span>
      </span>
     
      </div>

      <button style={styles.removeBtn} onClick={removeToDo.bind(null, props.todo.id)}> &times; </button>
    </li>
  )
}



ToDoItem.propTypes = {
  index: PropTypes.number,
  todo: PropTypes.object.isRequired,
  toggleTodo: PropTypes.func.isRequired
}
export default ToDoItem;