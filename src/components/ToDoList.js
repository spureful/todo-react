import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem'
const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
}
function ToDoList(props) {
  return (
    <ul style={styles.ul}> 
    { props.todos.map((todo, index) => <ToDoItem todo={todo} key={todo.id} index={index+1} toggleTodo={props.toggleTodo}/>) }

    </ul>
  );
};

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleTodo: PropTypes.func.isRequired
}
export default ToDoList;