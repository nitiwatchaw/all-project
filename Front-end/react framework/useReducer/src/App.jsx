import { useReducer, useState } from "react";
import List from "./List.jsx";
import { Reducer } from "./reducer/Reducer.jsx";


export default function TaskApp() {


  // create inital array
  const initialTasks = [
    { id: 0, text: "Visit Kafka Museum", number: 25, done: true },
    { id: 1, text: "Watch a puppet show", number: 20, done: false },
    { id: 2, text: "Lennon Wall pic", number: 18, done: false }
  ];

  // create reducer 

  const [tasks, dispatch] = useReducer(Reducer, initialTasks);

  // create state
  const [text, setText] = useState('');
  const [number, setNumber] = useState('')



  function handleAddTask(text, number) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
      number: number
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      {tasks.length > 0 && <h2>{tasks.length} List</h2>}
      <input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <input type="text"
        placeholder="Add number"
        value={number}
        onChange={e => setNumber(e.target.value)} />
      <button onClick={() => {
        setText('');
        setNumber('');
        handleAddTask(text, number);
      }}>Add</button>
      <List
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

let nextId = 3;
