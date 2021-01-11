import { useState } from 'react';
import Task from '../component/Task';
import React from 'react';

function Home() {

  const title = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#009933',
    textTransform: 'uppercase',
    textAlign: 'center',
    width: 450,
    height: 50,
    border: '2px solid #009933',
    borderRadius: '20px 20px 0 0',
    margin: 'auto' ,
    padding: 'auto',
  }

  const borderTask = {
    border: '2px dotted #009933',
    borderRadius: '0 0 20px 20px',
    borderTop: 'none',
    width: 450,
    margin: 'auto',
  }


  const taskData = [
    {
      title: 'title 1',
      content: 'hoc react',
      status: 'done',
    },

    {
      title: 'title 2',
      content: 'thuc hanh',
      status: 'cancel',
    },

    {
      title: 'title 3',
      content: 'test',
      status: 'pending',
    }
  ]


  const [dataTask, setDataTask] = useState(taskData)

  const updateData = (value, index) => {
    console.log('home: ', value, index)
    const task = {
      ...taskData[index],
      content : value,
    }

    const dataTemp = [
      ...taskData,
      task,
    ]
    setDataTask(dataTemp); 
  }

  const renderTask = () => {
    return taskData.map((item, index) => {
      return <Task
        //title = {item.title}
        //content = {item.content}
        //status = {item.status}
        {...item} //truyen du lieu
        isLastItem = {index === taskData.length - 1}
        isFirstItem = {index === 0}
        updateData = {updateData}
        index = {index}
        key = {index}
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
};

export default Home;
