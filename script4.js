const taskInput = document.getElementById('taskInput');

const dateInput = document.getElementById('dateInput');

const taskList = document.getElementById('taskList');

function addTask(){

    const taskValue = taskInput.value;

    const dateValue = dateInput.value;

    if(taskValue === ""){

        alert("Please enter a task!");

        return;
    }

    const li = document.createElement('li');

    li.className = 'task-item';

    // Format date for display
    const displayDate = dateValue
        ? new Date(dateValue).toLocaleString()
        : "No time set";

    li.innerHTML = `

        <div class="task-info">

            <div>

                <div class="task-text">
                    ${taskValue}
                </div>

                <div class="task-time">
                    ${displayDate}
                </div>

            </div>

        </div>

        <div class="actions">

            <button 
                class="complete-btn" 
                onclick="toggleComplete(this)"
            >
                Complete
            </button>

            <button 
                class="edit-btn" 
                onclick="editTask(this)"
            >
                Edit
            </button>

            <button 
                class="delete-btn" 
                onclick="deleteTask(this)"
            >
                Delete
            </button>

        </div>
    `;

    taskList.appendChild(li);

    taskInput.value = "";

    dateInput.value = "";
}

function toggleComplete(btn){

    const item = btn.parentElement.parentElement;

    item.classList.toggle('completed');
}

function deleteTask(btn){

    const item = btn.parentElement.parentElement;

    item.remove();
}

function editTask(btn){

    const item = btn.parentElement.parentElement;

    const taskText = item.querySelector('.task-text');

    const newTask = prompt(
        "Edit your task:",
        taskText.innerText
    );

    if(newTask !== null && newTask.trim() !== ""){

        taskText.innerText = newTask;
    }
}