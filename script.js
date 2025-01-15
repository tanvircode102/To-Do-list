const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = inputBox.value;

    const span = document.createElement("span");
    span.innerHTML = "<i class='fas fa-trash'></i>";
    span.onclick = function () {
        li.remove();
        saveData();
    };

    li.appendChild(span);

    li.addEventListener("click", function () {
        li.classList.toggle("completed");
        saveData();
    });

    listContainer.appendChild(li);
    inputBox.value = "";
    saveData();
}

function saveData() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}

function loadTasks() {
    listContainer.innerHTML = localStorage.getItem("tasks") || "";
    listContainer.querySelectorAll("li").forEach(li => {
        li.addEventListener("click", function () {
            li.classList.toggle("completed");
            saveData();
        });

        li.querySelector("span").onclick = function () {
            li.remove();
            saveData();
        };
    });
}

loadTasks();
