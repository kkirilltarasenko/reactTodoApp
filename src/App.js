import React, {useMemo, useState} from "react";
import "./styles/App.css"
import Button from "./styles/components/UI/Button/Button";
import TodoList from "./styles/components/TodoList";
import TodoForm from "./styles/components/TodoForm";
import ModalWindow from "./styles/components/UI/ModalWindow/ModalWindow";
import background from "./styles/components/UI/test.jpg";
import TodoFilter from "./styles/components/TodoFilter";
import TodoSelector from "./styles/components/TodoSelector";
import cl from "./styles/components/TodoFilter.module.css";

function App() {
  const [todos, setTodos] = useState([
      {id: 1, body: 'Make my bed', complete: false, mark: false, show: true},
      {id: 2, body: 'Do homework', complete: false, mark: false, show: true},
      {id: 3, body: 'Go for a walk', complete: true, mark: true, show: true},
      {id: 4, body: 'Listen to music', complete: false, mark: false, show: true},
      {id: 5, body: 'Study programming', complete: false, mark: false, show: true},
      {id: 6, body: 'Play games', complete: true, mark: true, show: true},
      {id: 7, body: 'Write notes', complete: false, mark: false, show: true},
      {id: 8, body: 'Brush my teeth', complete: false, mark: false, show: true},
      {id: 9, body: 'Read a book', complete: true, mark: true, show: true},
      {id: 10, body: 'Get some workout', complete: true, mark: true, show: true},
  ]);
  const [modal, setModal] = useState(false);
  const [sort, setSort] = useState('');
  const [filter, setFilter] = useState('');

  const sortTodos = (sort) => {
      setSort(sort);
      let i;
      if (sort[0] === 'c') {
          for (i = 0; i < todos.length; i++) {
              todos[i].show = todos[i].mark === true;
          }
      }
      if (sort[0] === 'u') {
          for (i = 0; i < todos.length; i++) {
              todos[i].show = todos[i].mark === false;
          }
      }
      if (!sort) {
          for (i = 0; i < todos.length; i++) {
              todos[i].show = true;
          }
      }
  }

  const todoSearcher = useMemo(() => {
      return todos.filter(todo => todo.body.toLowerCase().includes(filter.toLowerCase()));
  }, [filter, todos]);

  const todoCreator = (newTodo) => {
      setTodos([...todos, newTodo]);
      setModal(false);
  }

  const todoDeleter = (todo) => {
      setTodos(todos.filter(t => t.id !== todo.id))
  }

  const todoHandler = (id) => {
      setTodos([
          ...todos.map((todo) =>
              todo.id === id ? {...todo, complete: !todo.complete, mark: !todo.mark} : {...todo}
          )
      ])
  }

  return (
    <div className="App">
        <div>
            <div className="appIntro">
                <h1 className="app-title">Todo app</h1>
                <img className="appBackground" src={background} alt=""/>
            </div>
            <div className={cl.todoFilterContainer}>
                <div className={cl.todoFilterBox}>
                    <h2 className={cl.todoFilterTitle}>Search</h2>
                    <TodoFilter filter={filter} setFilter={setFilter}/>
                    <TodoSelector
                        value={sort}
                        onChange={sortTodos}
                        defaultValue={"All"}
                        options={[
                            {value: 'completed', name: 'Completed'},
                            {value: 'uncompleted', name: 'Uncompleted'}
                        ]}
                    />
                </div>
            </div>
            <TodoList todos={todoSearcher} remove={todoDeleter} handle={todoHandler} />
            <div>
                <ModalWindow visible={modal} setVisible={setModal}>
                    <TodoForm create={todoCreator} position={todos.length + 1} />
                </ModalWindow>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Button func={true} onClick={() => setModal(true)}>Create todo</Button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
