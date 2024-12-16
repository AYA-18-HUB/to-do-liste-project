const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function() {
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "حذف";
        deleteButton.classList.add("deleteButton");
        li.appendChild(deleteButton);

        taskList.appendChild(li);

        taskInput.value = "";

        li.addEventListener("click", function() {
            li.classList.toggle("completed");
        });

        deleteButton.addEventListener("click", function() {
            li.remove();
        });
    }
});
