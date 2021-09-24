document.addEventListener('DOMContentLoaded', () => {

  // grab all the todos from db via the backend
  fetch('/tasks/getTasks')
    .then(res => res.json())
    .then(arrOfTasks => addToList(arrOfTasks));

  const list = document.querySelector(".allTasks");
  // document.querySelector('body').appendChild(list)
  function addToList(arr) {
    for (let i = 0; i < arr.length; i++) {
      const taskItem = document.createElement('div');
      taskItem.setAttribute('id', i);
    
      const { taskLabel, dateCreated, dueDate } = arr[i];
      [taskLabel, dateCreated, dueDate].forEach( data => {
        const htmlElement = document.createElement('p');
        htmlElement.innerText = data;
        taskItem.appendChild(htmlElement);
      })


      list.appendChild(taskItem);

      // const taskLabelEl = document.createElement('p');
      // const dateCreatedEl = document.createElement('p');
      // const dueDateEl = document.createElement('p');

      // taskLabelEl.innerText = taskLabel;
      // dateCreatedEl.innerText = dateCreated;
      // dueDateEl.innerText = dueDate;

      // taskItem.appendChild(taskLabelEl);
      // taskItem.appendChild(dateCreatedEl);
      // taskItem.appendChild(dueDateEl);
      
      // list.appendChild(taskItem);
    }
  }
});

document.getElementById('submit').addEventListener('click', () => {
  
  const taskLabel = document.querySelector('#task').value;
  const dueDate = document.querySelector('#due').value;
  
  // add tasks 
  fetch('/tasks/createTask', {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ taskLabel: taskLabel, dueDate: dueDate })
  })
  .then(res => res.json())
  .then(data => alert(data));
})
