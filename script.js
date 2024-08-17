document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('task-form');
    const taskInput = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    form.addEventListener('submit', function(event){
        event.preventDefault(); //prevents from submitting by default and updates dynamically;

        const task = taskInput.value.trim();

        if(task !== ''){
            const listItem = document.createElement('li');
            listItem.className = 'task-item';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'task-checkbox';

            const taskText = document.createElement('span');
            taskText.textContent = task;
            taskText.className = 'task-text';

            listItem.appendChild(checkbox);
            listItem.appendChild(taskText);
            taskList.appendChild(listItem);
            taskInput.value = '';
    
            checkbox.addEventListener('change', function(){
                if(checkbox.checked){
                    taskList.removeChild(listItem);
                } 
            });
        }
    });
});  
