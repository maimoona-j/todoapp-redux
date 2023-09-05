 
import './App.css'

// function App() {
   

//   return (
//     <>
  
//     </>
//   )
// }

// export default App



import Task from "./components/Task";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <Task />
      <TaskList />
    </div>
  );
}

export default App;