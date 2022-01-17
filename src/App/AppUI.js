import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm/TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { ChangeAlertWithStorageListener } from '../ChangeAlert';
import { TodoError } from '../TodoError';
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from '../Modal';
import { Loading } from '../Loading';


function AppUI() {
  const {
    searchValue,
    error,
    loading,
    totalTodos,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    sincronizeTodos,
  } = React.useContext(TodoContext);
  
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList
      searchValue={searchValue}
      error={error}
      loading={loading}
      searchedTodos={searchedTodos}
      totalTodos={totalTodos}
      onError={()=> <TodoError />}
      onLoading={()=> <Loading />}
      onEmptyTodos={()=> <EmptyTodos />}
      onEmptySearchResults={()=><p>Nie ma zadania {searchValue}</p>}
      >
        {todo=>(
        <TodoItem
        key={todo.text}
        text={todo.text}
        completed={todo.completed}
        onComplete={() => completeTodo(todo.text)}
        onDelete={() => deleteTodo(todo.text)}
      />)}

      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
      <ChangeAlertWithStorageListener 
      sincronize={sincronizeTodos}
      />
    </React.Fragment>
  );
}

export { AppUI };