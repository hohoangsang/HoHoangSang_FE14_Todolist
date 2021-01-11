import './App.css';
import Task from './component/Task';

function App() {

  const title = {
    fontWeight: 'bold',
    color: '#61dafb',
    textTransform: 'uppercase',
    textAlign: 'center',
    width: 450,
    border: '2px solid #61dafb',
    borderRadius: '20px 20px 0 0',
    margin: 'auto',
  }

  const borderTask = {
    border: '2px dotted #61dafb',
    borderRadius: '0 0 20px 20px',
    borderTop: 'none',
    width: 450,
    margin: 'auto',
  }


  const taskData = [
    {
      content: 'task 1',
      status: 'done',
    },

    {
      content: 'task 2',
      status: 'cancel',
    },

    {
      content: 'task 3',
      status: 'pending',
    }
  ]

  const renderTask = () => {
    return taskData.map((item, index) => {
      return <Task
        content = {item.content}
        isLastItem = {index === taskData.length - 1}
        isFirstItem = {index === 0}
      />
    })
  }

  return (
    <div className="container">
      <p style = {title}>To do list</p>
      <div style = {borderTask}>
          {renderTask()}
      </div>
    </div>
  );
}

export default App;
