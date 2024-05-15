
export const TodoItem = ({completeTodo, deleteTodo, todo}) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => () => {
    completeTodo(todo)
  }

  const doneInfo = (
      <>
        <span>This todo is done</span>
        <span>
              <button onClick={onClickDelete(todo)}> Delete </button>
            </span>
      </>
  )

  const notDoneInfo = (
      <>
            <span>
              This todo is not done
            </span>
        <span>
              <button onClick={onClickDelete(todo)}> Delete </button>
              <button onClick={onClickComplete(todo)}> Set as done </button>
            </span>
      </>
  )

  return (
      <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
            <span className={'todo-text'}>
              {todo.text}
            </span>
        {todo.done ? doneInfo : notDoneInfo}
      </div>
  )
}


const TodoList = ({ todos, deleteTodo, completeTodo }) => {

  return (
    <>
      {todos.map(todo => <TodoItem key={todo.text} deleteTodo={deleteTodo} completeTodo={completeTodo} todo={todo} />).reduce((acc, cur, currentIndex) => [...acc, <hr key={currentIndex} />, cur], [])}
    </>
  )
}

export default TodoList
