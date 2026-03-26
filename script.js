function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }
const li = document.createElement("li");
li.textContent = taskText;

// Toggle completed
li.onclick = function () {
    li.classList.toggle("completed");
};
    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";

    // When clicked → remove task
    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}