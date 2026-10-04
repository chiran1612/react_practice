
import './App.css'
import TaskList from './components/tasks'
import ErrorBoundary from './components/ErrorBoundary'
function App() {
  const tasks = ['Make a bed', 'brush my teeth', 'Drink milk']

  // const [tasks, setTask] = useState(null)

  return (
    <ErrorBoundary>
          <TaskList title="Morning task" tasks={tasks} />
    </ErrorBoundary>
  )
}

export default App
