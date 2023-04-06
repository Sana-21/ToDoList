import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom/client';

class List extends Component{
constructor(props) {
    super(props);
        this.state = {
            list: [],
            task: '',
            priority:'',
        };
    }

HandleChange = (event) =>{
    this.setState({
        task: event.target.value,
    })
}

HandlePriority = (event) =>{
    this.setState({
        priority: event.target.value,
    })
}
AddTask = (event) =>{
    //list is the array of input values input holds the current val
    event.preventDefault();
    const{list, task, priority} = this.state;

    if(task != '')
    {
        this.setState({
            list: [...list, {task, priority}],
            task:'',
            priority: '',
         
        });
    }
    
};

RemoveTask = (index) =>{
    const{list} = this.state;
    const newList= list.filter((_, i) => i !== index);
    this.setState({
        list: newList
    })
};


moveItemToTop = (index) => {
    const { list } = this.state;
    const itemToMove = list[index];
    const newList = [...list];
    newList.splice(index, 1);
    newList.unshift(itemToMove);
    this.setState({
      list: newList,
    });
  }

render(){
    const {list, task, priority} = this.state;
    return(
        <div className='container'> 
            <h1>To Do List</h1>
            <div className = 'list'>
            <input type = "text" id = "task" value = {task} placeholder='task' onChange={this.HandleChange}></input>
            &nbsp;
            <input id = "priority"type="number" value = {priority} placeholder='priority' onChange={this.HandlePriority}></input>
            &nbsp;
            <button class="btn btn-dark" onClick={this.AddTask}>Add Task</button>
            <br></br>
            <br></br>
            <ul class="list-group">
                {list.map((item, index)=>(
                    <div>
                        <li key = {index} class="list-group-item">
                            {item.task}&nbsp;({item.priority})&nbsp;
                            <svg  onClick={()=>this.RemoveTask(index)} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" className="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                            <title>delete item</title>
                            </svg>
                            &nbsp;
                            <svg onClick={() => this.moveItemToTop(index)} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" className="bi bi-arrow-up" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                            <title>move to top</title>
                            </svg>
                        </li>
                    </div>

                ))}
            </ul>  
            </div>
           
        </div>
    );
    
}
}

export default List;